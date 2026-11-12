/* ===================================================================
   config.js  -  settings for THIS company
   Upload it next to index.html and style.css
   =================================================================== */
const CFG = {
  url: 'https://shmvpsxmwiejyrkbvefk.supabase.co',        // Supabase > Project Settings > API > Project URL     e.g. https://abcdxyz.supabase.co
  key: 'sb_publishable_mMx1BUj4FQUCbjyzNbCgWg_meWU0vHG',    // Supabase > Project Settings > API > publishable (anon) key
  emailDomain: '@yourcompany.app',         // usernames are stored as username@yourcompany.app  (any made-up domain; do NOT change after users exist)
  theme: { accent: '#6d5dd3' },   // main colour of the whole look (buttons, menu, highlights). Example: '#0b6e8a' teal, '#e8731a' orange
  modules: {                                                  // true = show, false = hide this module everywhere (menu, pages, user permissions)
    invoice:true,    // New invoice (+ Invoice editor)
    invoices:true,   // Invoices list / reprint
    reports:true,    // Sales report
    stock:true,      // Stock check
    serial:true,     // Serial number check
    grn:true,        // GRN
    items:true,      // Items & Categories
    customers:true,  // Customers
    suppliers:true,  // Suppliers
    reps:true,       // Sales reps
    jobs:true,       // Job notes (+ Job note editor)
    quotes:true,     // Quotations (+ Quotation editor)
    setoff:true,     // Supplier set-off + Purchases
    staff:true       // Staff management & salary (+ Salary slip editor)
  },
  quote: {                                 // OPTIONAL - default texts of the quotation (everything can also be edited in the Quotation editor)
    // whyHead: 'WHY CHOOSE OUR LAPTOPONE PVT LTD',
    phone: '+94 77 005 9929',    // phone number used in the email text ({phone}); empty = use the number from the invoice editor
    email: 'info@laptopone.lk',    // email used in the email text ({email}); empty = use the invoice editor email
    chequeName: 'Laptopone (Pvt) Ltd',
    about: "Laptopone.lk stands proudly as one of the leading laptop resellers in Sri Lanka, offering a carefully curated and unique collection of Brand New laptops to suit every need and budget. Whether you are a student, business professional, creative designer, or gamer, we provide high-performance devices from globally recognized brands, ensuring reliability, durability, and value for money.\nAt Laptopone.lk, customer satisfaction is at the heart of everything we do. We are committed to delivering top-notch service to our valued customers, guiding you to find the perfect laptop that matches your requirements.\nWhat sets us apart is our Dedicated service center, located right next to our showroom. Our experienced technicians are always ready to provide professional repairs, upgrades, and maintenance services, ensuring your device performs at its best long after your purchase.\nWith a strong reputation built on trust, quality, and exceptional after-sales support, Laptopone.lk continues to be a preferred choice for customers across Sri Lanka seeking dependable laptops and expert service under one roof.\nOur commitment is simple: Quality • Trust • Customer Satisfaction",
    why: "Genuine Products with Warranty\nCompetitive Market Pricing\nDedicated Service Center in-house\nReliable After-Sales Support",
    // bank: { name:'Bank name', account:'Account name', number:'0000000000' },   // Accessories quotation - Bank Details block
    accAbout: 'At Laptopone.lk, we take pride in offering a comprehensive range of high-quality laptop-related accessories and genuine parts to meet the diverse needs of modern users. We stock a wide variety of products from leading global brands, including laptop chargers, batteries, keyboards, SSDs, RAM modules, cooling pads, docking stations, adapters, cables, and much more. Every product in our inventory is selected with a strong focus on reliability, performance, and compatibility, ensuring seamless integration with your laptop.',
    // banner: 'data:image/png;base64,...',   // optional bottom banner (or upload it in the Quotation editor)
    // logo: 'data:image/png;base64,....'   // letterhead logo (or just upload it in the Quotation editor)
  }
};
