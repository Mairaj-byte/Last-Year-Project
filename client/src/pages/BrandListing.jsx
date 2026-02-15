import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandListing = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/brand/list");
        const brand = await res.json();
        if (brand.success) {
          setBrands(brand.data);  
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrands();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-16 mt-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Partner Brands</h1>
        <p className="text-slate-500 mt-2">Explore industry leaders looking for creators.</p>
      </div>

      {/* 4 Cards per row on XL screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div
            key={brand._id}
            onClick={() => navigate(`/brand/${brand._id}`)}
            className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Logo Container */}
            <div className="relative h-44 overflow-hidden bg-slate-50">
              {brand.logo && brand.logo.startsWith("http") ? (
                <img
                  src={brand.logo}
                  alt={brand.brandName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold italic">
                  {brand.brandName.charAt(0)}
                </div>
              )}
              <div className="absolute top-3 right-3">
                <span className="bg-white/80 backdrop-blur-sm text-[10px] font-bold text-blue-700 px-2 py-1 rounded shadow-sm border border-blue-50">
                  {brand.industry}
                </span>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {brand.brandName}
                </h2>
                <div className="flex items-center gap-1 mt-1 text-slate-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="text-xs uppercase tracking-wider font-medium">{brand.industry}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">
                  {brand.budgetRange}
                </span>
                <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandListing;