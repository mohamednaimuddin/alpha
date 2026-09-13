(() => {
  'use strict';

  const collections = {
    industrial: {
      number: '02', title: 'Industrial Mats', accent: 'Mats', image: 'assets/products/Industrial%20Mats/images/Industrial%20Mats.png',
      intro: 'Alpha Rubber provides industrial rubber mats and rolls for UAE workshops, production areas, service zones and demanding workplaces. The range includes comfort, octagon, hollow, Squarow, bubble, grid, strip and tube formats plus EPDM rolls. Dimensions, finish and project suitability are confirmed with the customer before quotation.',
      benefit: 'Engineered for traction, comfort and daily industrial use',
      products: [
        ['Comfort Rolls','Cushioned roll flooring that supports people working through long shifts.','Workplace comfort'],
        ['Octagon Rolls','Distinctive open-pattern rolls for drainage, airflow, and reliable underfoot grip.','Open drainage'],
        ['Hollow Mat Rolls','Flexible hollow-profile matting for wet or debris-prone operational areas.','Flexible protection'],
        ['Squarow Rolls','Geometric roll matting designed for practical coverage and stable footing.','Structured grip'],
        ['Bubble Rolls','Raised bubble-texture flooring that combines cushioning with confident traction.','Cushioned traction'],
        ['Grid Rolls','Open-grid rubber rolls for drainage-focused industrial and utility applications.','Drainage performance'],
        ['Strip Mats','Straightforward strip matting for entrances, workstations, and circulation routes.','Everyday durability'],
        ['Tube Mats','Tubular-profile matting for flexible, hard-wearing coverage in demanding areas.','Resilient coverage'],
        ['EPDM Rolls','Premium resilient rolls for durable flooring with refined colour and finish options.','Premium finish']
      ]
    },
    entrance: {
      number: '03', title: 'Entrance & Door Mats', accent: 'Mats', image: 'assets/products/EntranceandDoorMats/images/Entrance%20%26%20Door%20Mats.png',
      intro: 'Alpha Rubber provides entrance and door mat solutions for UAE commercial entrances, reception areas, doorways and high-traffic circulation spaces. The collection includes scraper mats, everyday door mats, custom logo mats and aluminium entrance systems. Format, dimensions and finish are selected around the entrance and expected use.',
      benefit: 'Designed to capture dirt, manage moisture and elevate entrances',
      products: [
        ['Scraper Mats','Hard-wearing entrance mats that help remove dirt and debris from footwear.','Dirt control'],
        ['Door Mats','Practical everyday mats for cleaner, safer, and more welcoming thresholds.','Everyday entrances'],
        ['Logo Mats','Custom-branded entrance mats that combine visual identity with functional protection.','Brand presence'],
        ['Aluminium Entrance Mats','Premium entrance systems for high-footfall commercial and architectural settings.','Architectural performance']
      ]
    },
    kitchen: {
      number: '04', title: 'Anti-Fatigue & Kitchen', accent: 'Kitchen', image: 'assets/products/Anti-FatigueandKitchen/images/Anti-Fatigue%20%26%20Kitchen.png',
      intro: 'Alpha Rubber provides anti-fatigue and kitchen mats for UAE kitchens, counters, production lines and standing workstations. Kitchen mats are intended for busy preparation, washing and service areas, while cushioned anti-fatigue mats support people who stand for longer periods. Product suitability depends on the actual working environment.',
      benefit: 'Made for comfort, grip and demanding working environments',
      products: [
        ['Kitchen Mats','Drainage-conscious rubber mats for busy preparation, washing, and service areas.','Wet-area grip'],
        ['Anti-Fatigue Mats','Cushioned workstation mats that support standing comfort across longer shifts.','Standing comfort']
      ]
    },
    tiles: {
      number: '05', title: 'Rubber Floor Tiles', accent: 'Floor Tiles', image: 'assets/products/RubberFloorTiles/images/Rubber%20Floor%20Tiles.png',
      intro: 'Alpha Rubber provides modular rubber floor tiles for UAE commercial, garage, wet-area, fitness and multi-purpose interior applications. Available families include interlocking, garage, wet-area, SBR and EPDM tiles. The appropriate construction, thickness, colour and installation approach should be selected for the site and intended use.',
      benefit: 'Flexible modular flooring for projects of every scale',
      products: [
        ['Interlocking Tiles','Easy-to-place modular tiles for flexible installation and straightforward replacement.','Modular installation'],
        ['Garage Tiles','Robust floor tiles developed for utility areas, garages, and demanding workspaces.','Heavy-duty floors'],
        ['Wet Area Tiles','Grip-focused modular surfaces for moisture-prone and drainage-sensitive spaces.','Wet-area safety'],
        ['SBR Tiles','Modular SBR rubber tiles for flooring areas where cushioning and practical replacement matter.','Resilient foundation'],
        ['EPDM Tiles','Coloured EPDM rubber tiles that combine a resilient surface with design flexibility.','Colour performance']
      ]
    },
    stable: {
      number: '06', title: 'Stable & Animal Mats', accent: 'Mats', image: 'assets/products/StableAnimal%20Mats/images/Stable%20%26%20Animal%20Mats.png',
      intro: 'Alpha Rubber provides stable mats and cow mats for UAE equine and livestock environments, including stalls, aisles, walkways, wash areas and working agricultural facilities. Surface pattern, dimensions and installation requirements should be matched to the animal area, cleaning routine and existing base before an order is confirmed.',
      benefit: 'Supportive, practical surfaces made for animal environments',
      products: [
        ['Stable Mats','Durable cushioned flooring for stalls, aisles, wash bays, and equine facilities.','Equine comfort'],
        ['Cow Mats','Supportive livestock matting designed for comfort, grip, and easier daily care.','Livestock support']
      ]
    },
    specialty: {
      number: '07', title: 'Specialty Products', accent: 'Products', image: 'assets/products/Specialty%20Products/images/Specialty%20Products.png',
      intro: 'Alpha Rubber provides specialist surface products for UAE stairs, entrances, underfloor applications and children’s areas. The range includes stair treads, acoustic underlay, PVC coil mats, polypropylene mats and kids mats. Each product addresses a different application, so project conditions and required specifications should be reviewed before selection.',
      benefit: 'Purpose-led materials for specialist spaces and applications',
      products: [
        ['Stair Treads','Durable tread coverings that improve grip and protect high-use stair surfaces.','Step protection'],
        ['Acoustic Underlay','Resilient underfloor layers developed to support impact-sound control.','Sound management'],
        ['PVC Coil Mats','Flexible coil matting that captures dirt and moisture in entrance applications.','Entrance control','VC Coil Mats.png'],
        ['Polypropylene Mats','Lightweight, practical matting for commercial entrances and everyday floor protection.','Practical coverage'],
        ['Kids Mats','Cushioned, colourful mat surfaces for play, learning, and recreation spaces.','Playful protection']
      ]
    }
  };

  const main = document.getElementById('main');
  const data = collections[main.dataset.collection];
  if (!data) return;
  const imageFolders = {
    industrial: 'Industrial Mats', entrance: 'EntranceandDoorMats', kitchen: 'Anti-FatigueandKitchen',
    tiles: 'RubberFloorTiles', stable: 'StableAnimal Mats', specialty: 'Specialty Products'
  };
  const imageBase = `assets/products/${encodeURIComponent(imageFolders[main.dataset.collection])}/images`;
  const collectionLinks = [
    ['Gym & Fitness', 'gymandfitness.html', 'gym'], ['Industrial', 'industrailmats.html', 'industrial'],
    ['Entrance', 'Entranceanddoormats.html', 'entrance'], ['Kitchen', 'Anti-fatigueandkitchen.html', 'kitchen'],
    ['Floor Tiles', 'rubberfloortiles.html', 'tiles'], ['Animal Care', 'stableanimalmats.html', 'stable'],
    ['Specialty', 'specialtyproduct.html', 'specialty']
  ];
  const collectionNav = collectionLinks.map(([label, href, key]) =>
    `<a href="${href}"${key === main.dataset.collection ? ' aria-current="page"' : ''}>${label}</a>`
  ).join('');
  const subject = encodeURIComponent(`${data.title} Project`);
  const cards = data.products.map((product, index) => `
    <article class="type-card reveal${index % 3 ? ` delay-${index % 3}` : ''}">
      <div class="type-image product-photo"><img src="${imageBase}/${encodeURIComponent((product[3] || product[0]).replace(/\.png$/i, '') + '.webp')}" srcset="${imageBase}/${encodeURIComponent((product[3] || product[0]).replace(/\.png$/i, '') + '-768.webp')} 768w, ${imageBase}/${encodeURIComponent((product[3] || product[0]).replace(/\.png$/i, '') + '.webp')} 1536w" sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, (max-width: 1399px) 33vw, 25vw" alt="${product[0]} product in its intended application" width="1536" height="1024" loading="lazy" decoding="async"></div>
      <div class="type-copy"><span>${String(index + 1).padStart(2,'0')} / ${product[2]}</span><h3>${product[0]}</h3><p>${product[1]}</p><a href="mailto:info@alpharubberuae.com?subject=${encodeURIComponent(`Enquiry - ${product[0]}`)}">Enquire <i aria-hidden="true">↗</i></a></div>
    </article>`).join('');

  main.innerHTML = `
    <section class="category-hero"><div class="category-lines" aria-hidden="true"></div><div class="container-xxl">
      <div class="category-tools reveal"><a class="category-back" href="index.html#capabilities"><span aria-hidden="true">←</span> All collections</a><nav class="collection-switcher" aria-label="Product collections">${collectionNav}</nav></div>
      <nav class="seo-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">${data.title}</span></nav>
      <div class="category-heading"><div class="reveal"><p class="eyebrow"><span></span> Performance surfaces / Collection ${data.number}</p><h1>${data.title.slice(0, -(data.accent.length)).trim()}<br><em>${data.accent} UAE</em></h1></div><p class="category-intro reveal delay-1">${data.intro}</p></div>
      <figure class="category-hero-media reveal delay-2"><img src="${data.image.replace(/\.png$/i, '.webp')}" srcset="${data.image.replace(/\.png$/i, '-768.webp')} 768w, ${data.image.replace(/\.png$/i, '.webp')} 1536w" sizes="(max-width: 768px) 100vw, 90vw" alt="${data.title} products in an application setting" width="1536" height="1024" fetchpriority="high"><figcaption><span>${data.benefit}</span><b>UAE manufacturing</b></figcaption></figure>
    </div></section>
    <section class="product-types section-space" id="products"><div class="container-xxl">
      <div class="type-section-head reveal"><div><span>01</span><p>Explore the range</p></div><h2>Products for<br><em>real demands.</em></h2><p>Choose a product type, then refine dimensions, colour, format, finish, and performance requirements with our team.</p></div>
      <div class="type-grid">${cards}</div>
    </div></section>
    <section class="selection-section section-space"><div class="container-xxl selection-grid">
      <div class="selection-title reveal"><p class="eyebrow"><span></span> Made around your space</p><h2>Specify with<br><em>confidence.</em></h2></div>
      <div class="selection-list reveal delay-1"><div><span>01</span><h3>Application</h3><p>Tell us where the product will be used and the demands it needs to handle.</p></div><div><span>02</span><h3>Format</h3><p>Choose the dimensions and product format that best suit installation and upkeep.</p></div><div><span>03</span><h3>Finish</h3><p>Refine colour, texture, thickness, and performance priorities with our team.</p></div></div>
    </div></section>
    <section class="seo-faq section-space"><div class="container-xxl"><div class="section-label"><span>03</span> Buyer questions</div><h2>Frequently asked questions</h2><div class="faq-grid"><details><summary>How do I choose the right ${data.title.toLowerCase()} product?</summary><p>Start with the application, area, expected traffic or operating conditions, preferred format and maintenance needs. Alpha Rubber can then review the available product families and identify the specifications that still need to be confirmed.</p></details><details><summary>What sizes, thicknesses and colours are available?</summary><p>Options vary by product. Share the required dimensions, thickness, colour, quantity and finish in your enquiry so the team can confirm what is available for the project rather than relying on an assumed specification.</p></details><details><summary>Can I request ${data.title.toLowerCase()} for a UAE commercial project?</summary><p>Yes. Alpha Rubber accepts enquiries for commercial and project requirements in the United Arab Emirates. Include the project location, application, estimated area or quantity and any known technical requirements when requesting a quotation.</p></details></div></div></section>
    <section class="category-cta section-space"><div class="container-xxl"><div class="category-cta-panel reveal"><span>${data.title} / Alpha Rubber</span><h2>Let’s build the right<br><em>surface solution.</em></h2><p>Share the application, area, preferred format, and performance priorities. We’ll help define the next step.</p><a class="button button-gold" href="index.html?product=${encodeURIComponent(data.title)}#contact">Start your enquiry <span aria-hidden="true">↗</span></a></div></div></section>`;
})();
