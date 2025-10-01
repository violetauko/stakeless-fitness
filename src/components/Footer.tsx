import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      {/* Footer Content Side with Background */}
      <div className="flex-1 bg-black text-white py-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 pt-8 text-center">
             <p className="text-gray-400">
                  <span>info@stacklessfitness.com</span>
                  </p>
                  <p className="text-gray-400">
                  <span>Nairobi, Kenya</span>
                  </p>
            <p className="text-gray-400">
              © 2025 Stackless Fitness. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;