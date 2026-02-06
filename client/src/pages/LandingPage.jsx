import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600">Influexa</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-indigo-600">Brands</a>
          <a href="#" className="hover:text-indigo-600">Creators</a>
          <a href="#" className="hover:text-indigo-600">Pricing</a>
          <a href="#" className="hover:text-indigo-600">Login</a>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
            Connect Brands with <span className="text-indigo-600">Influencers</span> That Convert
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Discover creators, manage campaigns, and track ROI — all in one
            influencer marketing platform.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-indigo-700">
              For Brands
            </button>
            <button className="border border-gray-300 px-8 py-4 rounded-xl text-lg hover:border-indigo-600 hover:text-indigo-600">
              For Creators
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl h-96 flex items-center justify-center text-indigo-600 text-2xl font-bold">
          Campaign Analytics Preview
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-4xl font-bold">Why Influexa?</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Built for performance-driven influencer marketing.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Smart Matching",
                desc: "AI-powered creator discovery tailored to your brand niche.",
              },
              {
                title: "Campaign Management",
                desc: "Chat, contracts, payments, and approvals in one dashboard.",
              },
              {
                title: "Real-Time Analytics",
                desc: "Track engagement, conversions, and ROI instantly.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h3 className="text-4xl font-bold text-center">How It Works</h3>

        <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-indigo-600 text-4xl font-bold mb-4">1</div>
            <h4 className="text-xl font-semibold">Create a Campaign</h4>
            <p className="text-gray-600 mt-2">
              Define goals, budget, and audience.
            </p>
          </div>

          <div>
            <div className="text-indigo-600 text-4xl font-bold mb-4">2</div>
            <h4 className="text-xl font-semibold">Collaborate</h4>
            <p className="text-gray-600 mt-2">
              Match and communicate with top creators.
            </p>
          </div>

          <div>
            <div className="text-indigo-600 text-4xl font-bold mb-4">3</div>
            <h4 className="text-xl font-semibold">Measure Results</h4>
            <p className="text-gray-600 mt-2">
              Track performance and scale winners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-24 text-center text-white">
        <h3 className="text-4xl font-bold">
          Ready to Scale with Influencer Marketing?
        </h3>
        <p className="mt-4 text-lg opacity-90">
          Join brands and creators growing together on Influexa.
        </p>
        <button className="mt-8 bg-white text-indigo-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100">
          Start Free Today
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500">
        © {new Date().getFullYear()} Influexa. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
