(() => {
  'use strict';

  const collections = {
    industrial: {
      number: '02', title: 'Industrial Mats', accent: 'Mats', image: 'images/Industrial%20Mats.png',
      intro: 'Dependable matting and roll surfaces developed for workshops, production areas, service zones, and demanding workplaces.',
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
      number: '03', title: 'Entrance & Door Mats', accent: 'Mats', image: 'images/Entrance%20%26%20Door%20Mats.png',
      intro: 'First-line floor protection for commercial entrances, reception areas, doorways, and high-traffic circulation spaces.',
      benefit: 'Designed to capture dirt, manage moisture and elevate entrances',
      products: [
        ['Scraper Mats','Hard-wearing entrance mats that help remove dirt and debris from footwear.','Dirt control'],
        ['Door Mats','Practical everyday mats for cleaner, safer, and more welcoming thresholds.','Everyday entrances'],
        ['Logo Mats','Custom-branded entrance mats that combine visual identity with functional protection.','Brand presence'],
        ['Aluminium Entrance Mats','Premium entrance systems for high-footfall commercial and architectural settings.','Architectural performance']
      ]
    },
    kitchen: {
      number: '04', title: 'Anti-Fatigue & Kitchen', accent: 'Kitchen', image: 'images/Anti-Fatigue%20%26%20Kitchen.png',
      intro: 'Supportive rubber matting for kitchens, counters, production lines, and workstations where comfort and grip matter.',
      benefit: 'Made for comfort, grip and demanding working environments',
      products: [
        ['Kitchen Mats','Drainage-conscious rubber mats for busy preparation, washing, and service areas.','Wet-area grip'],
        ['Anti-Fatigue Mats','Cushioned workstation mats that support standing comfort across longer shifts.','Standing comfort']
      ]
    },
    tiles: {
      number: '05', title: 'Rubber Floor Tiles', accent: 'Floor Tiles', image: 'images/Rubber%20Floor%20Tiles.png',
      intro: 'Modular rubber flooring for commercial, garage, wet-area, fitness, and multi-purpose interior applications.',
      benefit: 'Flexible modular flooring for projects of every scale',
      products: [
        ['Interlocking Tiles','Easy-to-place modular tiles for flexible installation and straightforward replacement.','Modular installation'],
        ['Garage Tiles','Robust floor tiles developed for utility areas, garages, and demanding workspaces.','Heavy-duty floors'],
        ['Wet Area Tiles','Grip-focused modular surfaces for moisture-prone and drainage-sensitive spaces.','Wet-area safety'],
        ['SBR Tiles','Hard-wearing recycled-rubber tiles with dependable resilience and impact performance.','Resilient foundation'],
        ['EPDM Tiles','Premium coloured rubber tiles that unite resilient performance with design flexibility.','Colour performance']
      ]
    },
    stable: {
      number: '06', title: 'Stable & Animal Mats', accent: 'Mats', image: 'images/Stable%20%26%20Animal%20Mats.png',
      intro: 'Resilient rubber surfaces for stables, livestock areas, walkways, wash zones, and working agricultural facilities.',
      benefit: 'Supportive, practical surfaces made for animal environments',
      products: [
        ['Stable Mats','Durable cushioned flooring for stalls, aisles, wash bays, and equine facilities.','Equine comfort'],
        ['Cow Mats','Supportive livestock matting designed for comfort, grip, and easier daily care.','Livestock support']
      ]
    },
    specialty: {
      number: '07', title: 'Specialty Products', accent: 'Products', image: 'images/Specialty%20Products.png',
      intro: 'Focused surface solutions for stairs, sound control, entrances, children’s areas, and specialist project requirements.',
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
  const subject = encodeURIComponent(`${data.title} Project`);
  document.title = `${data.title} | Alpha Rubber Manufacturing`;
  document.querySelector('meta[name="description"]').content = `Explore ${data.title.toLowerCase()} from Alpha Rubber Manufacturing UAE.`;

  const cards = data.products.map((product, index) => `
    <article class="type-card reveal${index % 3 ? ` delay-${index % 3}` : ''}">
      <div class="type-image product-photo"><img src="images/${encodeURIComponent(product[3] || `${product[0]}.png`)}" alt="${product[0]}" loading="lazy" decoding="async"></div>
      <div class="type-copy"><span>${String(index + 1).padStart(2,'0')} / ${product[2]}</span><h3>${product[0]}</h3><p>${product[1]}</p><a href="mailto:info@alpharubberuae.com?subject=${encodeURIComponent(`Enquiry - ${product[0]}`)}">Enquire <i aria-hidden="true">↗</i></a></div>
    </article>`).join('');

  main.innerHTML = `
    <section class="category-hero"><div class="category-lines" aria-hidden="true"></div><div class="container-xxl">
      <a class="category-back reveal" href="../../../index.html#capabilities"><span aria-hidden="true">←</span> All collections</a>
      <div class="category-heading"><div class="reveal"><p class="eyebrow"><span></span> Performance surfaces / Collection ${data.number}</p><h1>${data.title.slice(0, -(data.accent.length)).trim()}<br><em>${data.accent}</em></h1></div><p class="category-intro reveal delay-1">${data.intro}</p></div>
      <figure class="category-hero-media reveal delay-2"><img src="${data.image}" alt="Alpha ${data.title} collection" width="1536" height="1024"><figcaption><span>${data.benefit}</span><b>UAE manufacturing</b></figcaption></figure>
    </div></section>
    <section class="product-types section-space" id="products"><div class="container-xxl">
      <div class="type-section-head reveal"><div><span>01</span><p>Explore the range</p></div><h2>Products for<br><em>real demands.</em></h2><p>Choose a product type, then refine dimensions, colour, format, finish, and performance requirements with our team.</p></div>
      <div class="type-grid">${cards}</div>
    </div></section>
    <section class="selection-section section-space"><div class="container-xxl selection-grid">
      <div class="selection-title reveal"><p class="eyebrow"><span></span> Made around your space</p><h2>Specify with<br><em>confidence.</em></h2></div>
      <div class="selection-list reveal delay-1"><div><span>01</span><h3>Application</h3><p>Tell us where the product will be used and the demands it needs to handle.</p></div><div><span>02</span><h3>Format</h3><p>Choose the dimensions and product format that best suit installation and upkeep.</p></div><div><span>03</span><h3>Finish</h3><p>Refine colour, texture, thickness, and performance priorities with our team.</p></div></div>
    </div></section>
    <section class="category-cta section-space"><div class="container-xxl"><div class="category-cta-panel reveal"><span>${data.title} / Alpha Rubber</span><h2>Let’s build the right<br><em>surface solution.</em></h2><p>Share the application, area, preferred format, and performance priorities. We’ll help define the next step.</p><a class="button button-gold" href="mailto:info@alpharubberuae.com?subject=${subject}">Start your enquiry <span aria-hidden="true">↗</span></a></div></div></section>`;
})();
