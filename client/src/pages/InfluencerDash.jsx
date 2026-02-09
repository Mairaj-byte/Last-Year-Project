import React from "react";
import { useNavigate } from "react-router-dom";

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
    <p className="text-gray-400 text-xs mb-1">{title}</p>
    <h2 className="text-xl font-semibold text-gray-800">{value}</h2>
  </div>
);

const CampaignItem = ({ brand, status, budget }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-b-0">
    <div>
      <p className="text-sm font-medium text-gray-800">{brand}</p>
      <p className="text-xs text-gray-400">Status: {status}</p>
    </div>
    <p className="text-sm font-semibold text-gray-700">₹{budget}</p>
  </div>
);

const InfluencerDash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 sm:px-6 py-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Influencer Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard title="Profile Views" value="1,245" />
        <StatCard title="Campaigns" value="3" />
        <StatCard title="Earnings" value="₹42k" />
        <StatCard title="Engagement" value="4.6%" />
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Campaigns */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Active Campaigns
          </h2>
          <CampaignItem brand="Nike" status="Live" budget="12,000" />
          <CampaignItem brand="Boat" status="Pending" budget="8,000" />
          <CampaignItem brand="Mamaearth" status="Completed" budget="10,000" />
        </div>

        {/* Profile Status */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Profile Status
          </h2>

          <p className="text-xs text-gray-500 mb-1">Completion</p>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "80%" }}
            />
          </div>

          <p className="text-xs text-gray-400 mb-4">80% completed</p>

          <button
            onClick={() => navigate("/profilesetup")}
            className="w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Complete Profile
          </button>
        </div>
      </div>

      {/* Earnings */}
      <div className="bg-white rounded-xl shadow-sm p-4 mt-6 max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Earnings Overview
        </h2>

        <div className="flex justify-between text-sm text-gray-600">
          <p>This Month</p>
          <p className="font-semibold text-gray-800">₹15,000</p>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <p>Pending</p>
          <p className="font-semibold text-gray-800">₹5,000</p>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDash;
