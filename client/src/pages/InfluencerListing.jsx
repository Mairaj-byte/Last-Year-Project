import React, { useEffect, useState } from "react";
import CreatorCard from "../components/CreatorCard";

const InfluencerListing = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/profile/list");
        const data = await res.json();

        if (data.success) {
          setCreators(data.profiles);
        }
      } catch (error) {
        console.error("Failed to fetch creators", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Loading creators...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-8">
        Discover Creators
      </h1>

      {creators.length === 0 ? (
        <p className="text-gray-500">No creators found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <CreatorCard key={creator._id} creator={creator} />
          ))}

        </div>
      )}
    </div>
  );
};

export default InfluencerListing;
