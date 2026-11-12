/* ===================================================================
   config.js  -  settings for THIS company
   Upload it next to index.html and style.css
   =================================================================== */
const CFG = {
  url: 'YOUR_SUPABASE_PROJECT_URL',        // Supabase > Project Settings > API > Project URL     e.g. https://abcdxyz.supabase.co
  key: 'YOUR_SUPABASE_PUBLISHABLE_KEY',    // Supabase > Project Settings > API > publishable (anon) key
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
    // whyHead: 'WHY CHOOSE OUR COMPANY',
    phone: '',    // phone number used in the email text ({phone}); empty = use the number from the invoice editor
    email: '',    // email used in the email text ({email}); empty = use the invoice editor email
    // chequeName: 'Your Company (Pvt) Ltd',
    // about: 'Short paragraph about your company...',
    // why: 'Point one\nPoint two\nPoint three',
    // bank: { name:'Bank name', account:'Account name', number:'0000000000' },   // Accessories quotation - Bank Details block
    // accAbout: 'DISCOVER US text for the accessories quotation...',
    // banner: 'data:image/png;base64,...',   // optional bottom banner (or upload it in the Quotation editor)
    // logo: 'data:image/png;base64,....'   // letterhead logo (or just upload it in the Quotation editor)
  }
};
