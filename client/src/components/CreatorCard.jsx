import React from "react";
import { useNavigate } from "react-router-dom";

const CreatorCard = ({ creator }) => {
  const navigate = useNavigate();

  const {
    _id,
    username,
    bio,
    niche,
    followersCount,
    engagementRate,
    location,
    pricePerPost,
    profileImage,
    socialLinks,
  } = creator;

  return (
    <div
      onClick={() => navigate(`/profile/${_id}`)}

      className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border"
    >
      {/* Profile Image */}
      <div className="flex items-center gap-4">
        <img
          src={
            profileImage ||
            "https://ui-avatars.com/api/?name=" + username
          }
          alt={username}
          className="w-16 h-16 rounded-full object-cover border"
        />

        <div>
          <h2 className="text-lg font-semibold">{username}</h2>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-4 text-sm text-gray-600 line-clamp-2">
        {bio || "No bio available"}
      </p>

      {/* Stats */}
      <div className="flex justify-between text-sm mt-5">
        <div>
          <p className="font-medium">{followersCount?.toLocaleString()}</p>
          <p className="text-gray-500">Followers</p>
        </div>

        <div>
          <p className="font-medium">{engagementRate}%</p>
          <p className="text-gray-500">Engagement</p>
        </div>

        <div>
          <p className="font-medium">₹{pricePerPost}</p>
          <p className="text-gray-500">Per Post</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
          {niche}
        </span>

        <div className="flex gap-3">
          {socialLinks?.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-black"
            >
              Instagram
            </a>
          )}
          {socialLinks?.youtube && (
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-black"
            >
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
