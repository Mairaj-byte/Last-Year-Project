import React from "react";

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-2xl shadow p-4">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-semibold">{value}</h2>
  </div>
);

const CampaignItem = ({ brand, status, budget }) => (
  <div className="flex justify-between items-center border-b py-3">
    <div>
      <p className="font-medium">{brand}</p>
      <p className="text-sm text-gray-500">Status: {status}</p>
    </div>
    <p className="font-semibold">₹{budget}</p>
  </div>
);

const InfluencerDash = () => {
  return (
    <div className="p-15">
      <div className="min-h-screen bg-gray-100 p-6 mt-5">
      <h1 className="text-3xl font-bold mb-6">Influencer Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Profile Views" value="1,245" />
        <StatCard title="Active Campaigns" value="3" />
        <StatCard title="Total Earnings" value="₹42,000" />
        <StatCard title="Engagement Rate" value="4.6%" />
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaigns */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-4">Active Campaigns</h2>
          <CampaignItem brand="Nike" status="Live" budget="12,000" />
          <CampaignItem brand="Boat" status="Pending" budget="8,000" />
          <CampaignItem brand="Mamaearth" status="Completed" budget="10,000" />
        </div>

        {/* Profile */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-xl font-semibold mb-4">Profile Status</h2>
          <p className="text-gray-600 mb-2">Completion</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "80%" }} />
          </div>
          <p className="text-sm text-gray-500 mb-4">80% completed</p>
          <button className="w-full bg-black text-white py-2 rounded-xl">
            Complete Profile
          </button>
        </div>
      </div>

      {/* Earnings Section */}
      <div className="bg-white rounded-2xl shadow p-5 mt-8">
        <h2 className="text-xl font-semibold mb-4">Earnings Overview</h2>
        <div className="flex justify-between text-gray-600">
          <p>This Month</p>
          <p className="font-semibold">₹15,000</p>
        </div>
        <div className="flex justify-between text-gray-600 mt-2">
          <p>Pending Payments</p>
          <p className="font-semibold">₹5,000</p>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default InfluencerDash;
