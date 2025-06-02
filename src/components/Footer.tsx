
const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Sustainability', href: '#' }
    ],
    'Customer Service': [
      { name: 'Contact', href: '#' },
      { name: 'Shipping & Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'Care Instructions', href: '#' }
    ],
    Connect: [
      { name: 'Instagram', href: '#' },
      { name: 'Pinterest', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Facebook', href: '#' }
    ]
  };

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-neutral-900 mb-4">
              LUXORA
            </h3>
            <p className="font-inter text-neutral-600 leading-relaxed mb-6">
              Elevating your style with curated collections of premium fashion, accessories, and lifestyle products.
            </p>
            <div className="flex space-x-4">
              {footerLinks.Connect.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="w-5 h-5 bg-neutral-400 rounded"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).slice(0, -1).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-inter font-semibold text-neutral-900 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-inter text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-neutral-500 text-sm">
              © 2024 LUXORA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-inter text-neutral-500 hover:text-neutral-900 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-neutral-500 hover:text-neutral-900 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-neutral-500 hover:text-neutral-900 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
