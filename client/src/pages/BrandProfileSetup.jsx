import React, { useEffect, useState } from "react";

const BrandProfileSetup = () => {
  const [formData, setFormData] = useState({
    brandName: "",
    industry: "",
    website: "",
    budgetRange: "",
  });

  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔹 Fetch existing profile (for update mode)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/brand/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();

        if (data.success) {
          setFormData({
            brandName: data.data.brandName || "",
            industry: data.data.industry || "",
            website: data.data.website || "",
            budgetRange: data.data.budgetRange || "",
          });

          if (data.data.logo) {
            setPreview(data.data.logo);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔹 Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const form = new FormData();
      form.append("brandName", formData.brandName);
      form.append("industry", formData.industry);
      form.append("website", formData.website);
      form.append("budgetRange", formData.budgetRange);
      if (logo) form.append("logo", logo);

      const res = await fetch("http://localhost:4000/api/brand", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        setMessage(data.message);
      } else {
        setMessage("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-25 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Brand Profile Setup
      </h2>

      {message && (
        <div className="mb-4 text-center text-green-600 font-medium">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Brand Name */}
        <div>
          <label className="block mb-1 font-medium">Brand Name</label>
          <input
            type="text"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Industry */}
        <div>
          <label className="block mb-1 font-medium">Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Website */}
        <div>
          <label className="block mb-1 font-medium">Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Budget Range */}
        <div>
          <label className="block mb-1 font-medium">Budget Range</label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select Budget</option>
            <option value="5k-10k">5k-10k</option>
            <option value="10k-50k">10k-50k</option>
            <option value="50k-100k">50k-100k</option>
            <option value="100k+">100k+</option>
          </select>
        </div>

        {/* Logo Upload */}
        <div>
          <label className="block mb-1 font-medium">Brand Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="w-full"
          />
        </div>

        {/* Logo Preview */}
        {preview && (
          <div className="mt-3">
            <img
              src={preview}
              alt="Logo Preview"
              className="h-24 rounded-lg shadow"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
};

export default BrandProfileSetup;
