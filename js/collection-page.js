(() => {
  'use strict';

  const collections = {
    industrial: {
      number: '02', title: 'Industrial Mats', accent: 'Mats', image: 'assets/products/Industrial%20Mats/images/Industrial%20Mats.png',
      heading: 'Industrial Rubber<br><em>Matting UAE</em>',
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
      heading: 'Entrance Mats &<br><em>Aluminium Matting UAE</em>',
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
      heading: 'Anti-Fatigue Floor<br><em>& Kitchen Mats UAE</em>',
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
      heading: 'Stable & Animal<br><em>Rubber Mats UAE</em>',
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
  const faqLead = {
    industrial: ['What is industrial rubber matting used for?', 'Industrial rubber matting is used in workshops, production areas, service zones, workstations and circulation routes where practical floor protection, grip or standing comfort is required. The suitable pattern and format depend on the operating conditions.'],
    entrance: ['What is an aluminium entrance matting system?', 'An aluminium entrance matting system uses durable aluminium profiles with matting inserts to manage dirt and moisture at high-traffic commercial entrances. The entrance dimensions, expected footfall and required finish should be reviewed before selection.'],
    kitchen: ['What are anti-fatigue floor mats used for?', 'Anti-fatigue floor mats provide a cushioned standing surface at workstations, counters and production areas. Kitchen mat selection should also consider moisture, drainage, cleaning and the actual working environment.'],
    tiles: ['Where can rubber floor tiles be used?', 'Rubber floor tiles can suit gyms, garages, wet areas, commercial rooms and multi-purpose interiors. Product construction, thickness and installation method should be matched to the intended application and subfloor.'],
    stable: ['How do I choose rubber mats for horse stables?', 'Consider whether the mats will be used in stalls, aisles, walkways or wash areas, then review the base, cleaning routine, surface pattern, dimensions and installation requirements before ordering.'],
    specialty: ['What are specialty rubber surface products?', 'Specialty products address specific applications such as stair grip, impact-sound control, entrance dirt management and cushioned children’s areas. Selection depends on the project conditions and required specification.']
  }[main.dataset.collection];
  const extraFaqs = {
    industrial: [
      ['Which industrial rubber mat format suits wet or debris-prone areas?', 'Open-pattern and grid-style rubber matting can support drainage and allow debris to pass away from the standing surface. The correct profile depends on liquids, debris, cleaning routines and site conditions.'],
      ['What details are needed for an industrial mat quotation?', 'Share the application, project location, dimensions or area, expected traffic, wet or dry conditions, required format and any known thickness or performance requirements.']
    ],
    tiles: [
      ['What is the difference between SBR and EPDM rubber tiles?', 'SBR and EPDM are different rubber material families. Product construction, colour, intended environment, thickness and technical requirements should be reviewed for the specific project before selection.'],
      ['Are interlocking rubber tiles suitable for existing floors?', 'Interlocking tiles can provide a modular installation format, but suitability depends on the existing subfloor, levels, intended load, moisture conditions and edge treatment. The site conditions should be reviewed before ordering.']
    ],
    entrance: [
      ['Where are aluminium entrance mats used?', 'Aluminium entrance matting systems are commonly considered for high-traffic commercial entrances such as offices, hotels, retail buildings and reception areas. Dimensions, footfall, moisture and the entrance recess should be reviewed before selection.'],
      ['What is the difference between an entrance mat and a scraper mat?', 'Entrance matting is a broad category for managing tracked-in dirt and moisture. Scraper mats use a more aggressive surface to remove debris from footwear and may form one stage of a wider entrance mat system.']
    ],
    kitchen: [
      ['How should I choose a mat for a wet kitchen area?', 'Review drainage, grease or moisture exposure, cleaning chemicals, movement routes, edges and the existing floor. Product suitability should be confirmed for the actual kitchen or service environment.'],
      ['Are all anti-fatigue mats suitable for barefoot areas?', 'No. Do not assume that every anti-fatigue mat is intended for barefoot use. Tell Alpha Rubber how and where the mat will be used so an appropriate available product can be reviewed.']
    ],
    stable: [
      ['Where can stable rubber mats be installed?', 'Stable mats may be considered for stalls, aisles, walkways and wash areas. The base, drainage, joints, cleaning routine and animal use should be reviewed before dimensions and installation are confirmed.'],
      ['Are cow mats and horse stable mats the same?', 'They serve related animal-care applications but should not automatically be treated as identical. Surface pattern, cushioning, dimensions and installation should be selected for the animal area and facility conditions.']
    ]
  }[main.dataset.collection] || [];
  const faqs = [
    faqLead,
    [`How do I choose the right ${data.title.toLowerCase()} product?`, `Start with the application, area, expected traffic or operating conditions, preferred format and maintenance needs. Alpha Rubber can then review the available product families and identify the specifications that still need to be confirmed.`],
    [`Can I request ${data.title.toLowerCase()} for a UAE commercial project?`, `Yes. Alpha Rubber accepts enquiries for commercial and project requirements in the United Arab Emirates. Include the project location, application, estimated area or quantity and any known technical requirements when requesting a quotation.`],
    ...extraFaqs
  ];
  const faqHtml = faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join('');
  const guides = {
    industrial: {
      label: 'Industrial matting guide',
      heading: 'Industrial rubber matting for UAE workplaces',
      intro: 'Industrial rubber mats help protect defined work areas and provide a practical surface for standing, circulation and service zones. Select the format around the actual environment rather than relying on one mat type for every application.',
      items: [
        ['Workshops and production areas', 'Review machinery, foot traffic, oils, debris, cleaning methods and the condition of the existing floor.'],
        ['Wet and drainage-sensitive zones', 'Open grid, hollow and patterned formats may suit areas where liquids or debris need to move away from the standing surface.'],
        ['Standing workstations', 'Comfort-focused rubber matting can provide a cushioned surface for counters, assembly points and longer standing tasks.'],
        ['Rolls or individual mats', 'Roll matting covers longer runs and larger zones, while individual mats can target specific workstations and service points.']
      ]
    },
    tiles: {
      label: 'Rubber tile guide',
      heading: 'Modular rubber floor tiles for UAE projects',
      intro: 'Rubber floor tiles provide a modular surface for fitness, commercial, garage, wet-area and multi-purpose spaces. The best tile depends on the intended use, subfloor, expected load, moisture, appearance and maintenance plan.',
      items: [
        ['Interlocking rubber tiles', 'A modular format for flexible layouts, easier handling and replacement of individual floor sections.'],
        ['SBR rubber tiles', 'A practical resilient tile family for projects where cushioning, durability and modular installation are priorities.'],
        ['EPDM rubber tiles', 'A coloured rubber tile option for projects that need resilient performance with greater visual flexibility.'],
        ['Wet-area and garage tiles', 'Select surface profile, drainage approach, load requirements and installation details around the actual site conditions.']
      ]
    },
    entrance: {
      label: 'Entrance matting guide',
      heading: 'Aluminium entrance matting systems for UAE buildings',
      intro: 'Commercial entrance matting helps manage tracked-in dirt and moisture before it reaches interior floors. The right system depends on entrance dimensions, expected footfall, exposure to weather, cleaning routines and the required architectural finish.',
      items: [
        ['Aluminium entrance systems', 'Profile-based entrance matting for high-traffic commercial entrances, reception areas, offices, hotels and retail buildings.'],
        ['Commercial entrance zones', 'Plan mat dimensions around door movement, walking direction, available recess depth and the transition to surrounding flooring.'],
        ['Scraper mats', 'A textured first-line surface intended to help remove heavier dirt and debris from footwear at access points.'],
        ['Logo and door mats', 'Branded or practical mat formats for identity, everyday dirt control and defined doorway protection.']
      ]
    },
    kitchen: {
      label: 'Workplace mat guide',
      heading: 'Anti-fatigue and kitchen mats for UAE workplaces',
      intro: 'Anti-fatigue mats and kitchen mats serve different working conditions. Selection should reflect standing duration, moisture, drainage, cleaning, movement, edges and the existing floor rather than relying on a generic mat description.',
      items: [
        ['Standing workstations', 'Cushioned anti-fatigue mats can support defined standing positions at counters, assembly points and service stations.'],
        ['Commercial kitchens', 'Kitchen mat selection should account for wet preparation areas, washing zones, food-service routes and cleaning routines.'],
        ['Workshops and service areas', 'Review oils, debris, tools, footwear, traffic and surface grip requirements before choosing a workplace mat.'],
        ['Product suitability', 'Not every anti-fatigue mat suits barefoot, wet or food-service use; confirm the actual environment before ordering.']
      ]
    },
    stable: {
      label: 'Animal flooring guide',
      heading: 'Stable and animal rubber flooring for UAE facilities',
      intro: 'Rubber animal flooring can support stalls, aisles, livestock areas, walkways and wash zones. Product choice depends on the animal area, existing base, drainage, cleaning routine, joints and required surface pattern.',
      items: [
        ['Horse stable mats', 'Plan stable mat dimensions and surface pattern around stalls, aisles, movement, cleaning and the condition of the base.'],
        ['Cow and livestock mats', 'Review the livestock area, daily care routine, grip, cushioning, joints and maintenance requirements.'],
        ['Agricultural flooring', 'Match rubber flooring to the specific animal-care or agricultural zone instead of treating every facility as the same application.'],
        ['Wash areas and walkways', 'Consider water movement, drainage, edges, transitions and cleaning access before confirming the installation approach.']
      ]
    }
  };
  const guide = guides[main.dataset.collection];
  const guideHtml = guide ? `<section class="collection-guide section-space" aria-labelledby="collection-guide-title"><div class="container-xxl"><div class="collection-guide-head"><p class="eyebrow"><span></span>${guide.label}</p><h2 id="collection-guide-title">${guide.heading}</h2><p>${guide.intro}</p></div><div class="collection-guide-grid">${guide.items.map(([title,copy])=>`<article><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></div></section>` : '';
  const cards = data.products.map((product, index) => {
    const whatsappMessage = encodeURIComponent(`Hello Alpha Rubber, I am interested in ${product[0]}. ${product[1]} Please share availability, specifications and a quotation.`);
    return `
    <article class="type-card reveal${index % 3 ? ` delay-${index % 3}` : ''}">
      <div class="type-image product-photo"><img src="${imageBase}/${encodeURIComponent((product[3] || product[0]).replace(/\.png$/i, '') + '.webp')}" srcset="${imageBase}/${encodeURIComponent((product[3] || product[0]).replace(/\.png$/i, '') + '-768.webp')} 768w, ${imageBase}/${encodeURIComponent((product[3] || product[0]).replace(/\.png$/i, '') + '.webp')} 1536w" sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, (max-width: 1399px) 33vw, 25vw" alt="${product[0]} product in its intended application" width="1536" height="1024" loading="lazy" decoding="async"></div>
      <div class="type-copy"><span>${String(index + 1).padStart(2,'0')} / ${product[2]}</span><h3>${product[0]}</h3><p>${product[1]}</p><a class="card-enquire" href="mailto:info@alpharubberuae.com?subject=${encodeURIComponent(`Enquiry - ${product[0]}`)}" aria-label="Email enquiry about ${product[0]}">Enquire <i aria-hidden="true">↗</i></a><a class="product-whatsapp" href="https://wa.me/971542264421?text=${whatsappMessage}" target="_blank" rel="noopener" aria-label="Ask about ${product[0]} on WhatsApp"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.3 8.1c.4 3.5 2.2 5.3 5.7 5.7l1.1-1.1c.2-.2.5-.3.8-.2l2 .7v2.3c0 .4-.3.7-.7.7A10.4 10.4 0 0 1 5.9 4.9c0-.4.3-.7.7-.7h2.3l.7 2c.1.3 0 .6-.2.8L8.3 8.1Z"/></svg><span>WhatsApp</span></a></div>
    </article>`;
  }).join('');

  main.innerHTML = `
    <section class="category-hero"><div class="category-lines" aria-hidden="true"></div><div class="container-xxl">
      <div class="category-tools reveal"><a class="category-back" href="index.html#capabilities"><span aria-hidden="true">←</span> All collections</a><nav class="collection-switcher" aria-label="Product collections">${collectionNav}</nav></div>
      <nav class="seo-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">${data.title}</span></nav>
      <div class="category-heading"><div class="reveal"><p class="eyebrow"><span></span> Performance surfaces / Collection ${data.number}</p><h1>${data.heading || `${data.title.slice(0, -(data.accent.length)).trim()}<br><em>${data.accent} UAE</em>`}</h1></div><p class="category-intro reveal delay-1">${data.intro}</p></div>
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
    ${guideHtml}
    <section class="seo-faq section-space"><div class="container-xxl"><div class="section-label"><span>03</span> Buyer questions</div><h2>Frequently asked questions</h2><div class="faq-grid">${faqHtml}</div></div></section>
    <section class="category-cta section-space"><div class="container-xxl"><div class="category-cta-panel reveal"><span>${data.title} / Alpha Rubber</span><h2>Let’s build the right<br><em>surface solution.</em></h2><p>Share the application, area, preferred format, and performance priorities. We’ll help define the next step.</p><a class="button button-gold" href="index.html?product=${encodeURIComponent(data.title)}#contact">Start your enquiry <span aria-hidden="true">↗</span></a></div></div></section>`;

  const canonical = document.querySelector('link[rel="canonical"]')?.href || location.href.split('#')[0];
  const schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {'@type':'CollectionPage','@id':`${canonical}#page`,url:canonical,name:document.title,description:data.intro,isPartOf:{'@id':'https://alpharubberuae.com/#website'},about:{'@id':'https://alpharubberuae.com/#organization'},mainEntity:{'@id':`${canonical}#products`}},
      {'@type':'ItemList','@id':`${canonical}#products`,name:`${data.title} products`,numberOfItems:data.products.length,itemListElement:data.products.map((product,index)=>({'@type':'ListItem',position:index+1,name:product[0],description:product[1]}))},
      {'@type':'BreadcrumbList','@id':`${canonical}#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://alpharubberuae.com/'},{'@type':'ListItem',position:2,name:data.title,item:canonical}]},
      {'@type':'FAQPage','@id':`${canonical}#faq`,mainEntity:faqs.map(([question,answer])=>({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}))}
    ]
  });
  document.head.appendChild(schema);
})();
