import logo from "../assets/logo-DenxwkUa.svg";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 pt-10 text-gray-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
      <div>

        <div>
          <img
            src={logo}
            alt="Blogify"
            className="w-32"
          />

          <p className="mt-5 max-w-md text-sm leading-6"></p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>Home</li>
              <li>Best Sellers</li>
              <li>Offers & Deals</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Need Help?
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>Delivery Information</li>
              <li>Return & Refund Policy</li>
              <li>Payment Methods</li>
              <li>Track your Order</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Follow Us
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 py-5 text-center text-xs dark:border-gray-800">
        Copyright 2026 © Blogify GreatStack - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;