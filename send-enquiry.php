<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
header('X-Content-Type-Options: nosniff');

function load_environment(string $path): void
{
    if (!is_readable($path)) {
        return;
    }

    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }

        [$key, $value] = array_map('trim', explode('=', $line, 2));
        if ($key === '' || getenv($key) !== false) {
            continue;
        }

        $value = trim($value, "\"'");
        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
    }
}

load_environment(__DIR__ . DIRECTORY_SEPARATOR . '.env');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['success' => true]);
    exit;
}

function clean_field(string $key): string
{
    $value = trim((string) ($_POST[$key] ?? ''));
    return preg_replace('/[\r\n]+/', ' ', $value) ?? '';
}

$name = clean_field('name');
$company = clean_field('company');
$email = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$phone = clean_field('phone');
$enquiryType = clean_field('enquiryType');
$productCategory = clean_field('productCategory');
$quantity = clean_field('quantity');
$projectLocation = clean_field('projectLocation');
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $email === false || $phone === '' || $enquiryType === '' || $productCategory === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

$recipient = filter_var(getenv('MAIL_TO') ?: '', FILTER_VALIDATE_EMAIL);
$sender = filter_var(getenv('MAIL_FROM') ?: '', FILTER_VALIDATE_EMAIL);
$smtpHost = trim((string) (getenv('SMTP_HOST') ?: ''));
$smtpPort = filter_var(getenv('SMTP_PORT'), FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 65535]]);
$smtpUsername = trim((string) (getenv('SMTP_USERNAME') ?: ''));
$smtpPassword = (string) (getenv('SMTP_PASSWORD') ?: '');
$smtpEncryption = strtolower(trim((string) (getenv('SMTP_ENCRYPTION') ?: '')));

if (
    $recipient === false ||
    $sender === false ||
    $smtpHost === '' ||
    $smtpPort === false ||
    $smtpUsername === '' ||
    $smtpPassword === '' ||
    $smtpPassword === 'REPLACE_WITH_MAILBOX_PASSWORD' ||
    !in_array($smtpEncryption, ['ssl', 'tls'], true)
) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail settings are not configured correctly.']);
    exit;
}

$subject = 'Website enquiry: ' . $productCategory;
$body = implode("\n", [
    'Name: ' . $name,
    'Company: ' . ($company !== '' ? $company : 'Not provided'),
    'Email: ' . $email,
    'Phone / WhatsApp: ' . $phone,
    'Enquiry type: ' . $enquiryType,
    'Product category: ' . $productCategory,
    'Estimated quantity / area: ' . ($quantity !== '' ? $quantity : 'Not provided'),
    'Project location: ' . ($projectLocation !== '' ? $projectLocation : 'Not provided'),
    '',
    'Project requirements:',
    $message,
]);

try {
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = $smtpHost;
    $mailer->Port = $smtpPort;
    $mailer->SMTPAuth = true;
    $mailer->Username = $smtpUsername;
    $mailer->Password = $smtpPassword;
    $mailer->SMTPSecure = $smtpEncryption === 'ssl'
        ? PHPMailer::ENCRYPTION_SMTPS
        : PHPMailer::ENCRYPTION_STARTTLS;
    $mailer->CharSet = PHPMailer::CHARSET_UTF8;
    $mailer->setFrom($sender, 'Alpha Rubber Website');
    $mailer->addAddress($recipient);
    $mailer->addReplyTo((string) $email, $name);
    $mailer->Subject = $subject;
    $mailer->Body = $body;
    $mailer->send();
} catch (Exception $exception) {
    error_log('Contact form SMTP error: ' . $exception->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'The SMTP server could not send this enquiry.']);
    exit;
}

echo json_encode(['success' => true]);
