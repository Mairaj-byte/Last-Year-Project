import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Footer = () => {
  const { token, identity } = useContext(ShopContext);

  return (
    <footer className="mt-24 border-t border-gray-200">
      {/* Gradient top glow */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Influexa</h2>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Connecting brands with the right creators to build authentic,
            high-impact collaborations.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link to="/brandlist" className="hover:text-indigo-600 transition">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/influlist" className="hover:text-indigo-600 transition">
                Creators
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-indigo-600 transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-indigo-600 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {!token && (
              <li>
                <Link to="/signinpage" className="hover:text-blue-600 transition">
                  Sign In
                </Link>
              </li>
            )}

            {token && identity === "brand" && (
              <li>
                <Link to="/influlist" className="hover:text-blue-600 transition">
                  Find Creators
                </Link>
              </li>
            )}

            {token && identity === "creator" && (
              <li>
                <Link to="/brandlist" className="hover:text-blue-600 transition">
                  Find Brands
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-900">
            Ready to collaborate?
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Start discovering meaningful partnerships today.
          </p>
          <Link
            to={token ? (identity === "brand" ? "/influlist" : "/brandlist") : "/signinpage"}
            className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Influexa. All rights reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/" className="hover:text-blue-600">Privacy</Link>
            <Link to="/" className="hover:text-blue-600">Terms</Link>
            <Link to="/" className="hover:text-blue-600">Support</Link>
            <Link to="/aboutus" className="hover:text-blue-600">About Us</Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
