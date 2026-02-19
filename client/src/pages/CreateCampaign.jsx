import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateCampaign = () => {

  const { id } = useParams(); // ✅ must be inside component

  const initialState = {
    influencerId: id,
    title: "",
    description: "",
    platform: "Instagram",
    totalBudget: 0,
    advanceAmount: 0,
    finalAmount: 0,
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Number(form.advanceAmount) + Number(form.finalAmount) !==
      Number(form.totalBudget)
    ) {
      return alert("Advance + Final must equal Total Budget");
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "/api/campaign/create",
        {
          influencerId: id,
          title: form.title,
          description: form.description,
          platform: form.platform,
          totalBudget: form.totalBudget,
          advanceAmount: form.advanceAmount,
          finalAmount: form.finalAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("🚀 Campaign Created Successfully!");
      setForm(initialState);
    } catch (error) {
      alert(
        "Error: " +
        (error.response?.data?.message || "Something went wrong.")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-10">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Campaign
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in the details to launch your campaign
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Campaign Title */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Campaign Title
            </label>
            <input
              name="title"
              required
              value={form.title}
              onChange={handleChange}
              placeholder="Enter campaign title"
              className="px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Platform */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Platform
            </label>
            <select
              name="platform"
              value={form.platform}
              onChange={handleChange}
              className="px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition bg-white"
            >
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="TikTok">TikTok</option>
              <option value="Twitter/X">Twitter/X</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              required
              rows="4"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your campaign goals, deliverables, etc."
              className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-none"
            />
          </div>

          {/* Budget Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Budget Details
            </h3>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Total Budget
            </label>
            <input
              type="number"
              name="totalBudget"
              required
              value={form.totalBudget}
              onChange={handleChange}
              placeholder="₹ 0.00"
              className="px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Advance Amount
            </label>
            <input
              type="number"
              name="advanceAmount"
              required
              value={form.advanceAmount}
              onChange={handleChange}
              placeholder="₹ 0.00"
              className="px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Final Amount
            </label>
            <input
              type="number"
              name="finalAmount"
              required
              value={form.finalAmount}
              onChange={handleChange}
              placeholder="₹ 0.00"
              className="px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Launch Campaign"}
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default CreateCampaign;



