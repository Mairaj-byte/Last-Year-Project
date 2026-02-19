import React, { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(0);
  const steps = ["Campaign Details", "Payment Info", "Review & Launch"];

  // Campaign Mock Data
  const campaignData = {
    title: "Summer Glow Skincare",
    influencers: 3,
    basePrice: 1200.00,
    platformFee: 50.00,
    total: 1250.00,
  };

  const nextStep = () => setStep((s) => Math.min(s + 2, s + 1));
  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans text-slate-900">
      
      {/* LEFT: ORDER SUMMARY (Influencer Platform Styled) */}
      <div className="w-full lg:w-[400px] bg-[#F8FAFC] border-r border-slate-200 p-8 lg:p-12">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">IM</div>
          <span className="text-lg font-bold tracking-tight">Influex.io</span>
        </div>

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Total Campaign Budget</p>
          <h2 className="text-4xl font-bold text-slate-900">${campaignData.total.toFixed(2)}</h2>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold">{campaignData.title}</p>
              <p className="text-xs text-slate-500">{campaignData.influencers} Influencers Selected</p>
            </div>
            <p className="text-sm font-medium">${campaignData.basePrice.toFixed(2)}</p>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold">Platform Service Fee</p>
              <p className="text-xs text-slate-500">Secure Escrow & Reporting</p>
            </div>
            <p className="text-sm font-medium">${campaignData.platformFee.toFixed(2)}</p>
          </div>

          <hr className="border-slate-200" />
          
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-bold">Total Due Now</span>
            <span className="text-lg font-bold text-indigo-600">${campaignData.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-12 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
          <p className="text-xs text-indigo-700 leading-relaxed">
            <strong>Note:</strong> Funds will be held in escrow and only released to influencers after content approval.
          </p>
        </div>
      </div>

      {/* RIGHT: MULTI-STEP FORM */}
      <div className="flex-1 p-8 lg:p-20 max-w-4xl">
        
        {/* Stepper Indicator */}
        <div className="flex items-center justify-between mb-16 max-w-md mx-auto lg:mx-0">
          {steps.map((label, idx) => (
            <div key={label} className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${idx <= step ? 'bg-indigo-600' : 'bg-slate-200'}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${idx === step ? 'text-indigo-600' : 'text-slate-400'}`}>
                {label}
              </span>
              {idx < steps.length - 1 && <div className="w-8 h-[1px] bg-slate-200 mx-2" />}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {step === 0 && <CampaignForm />}
          {step === 1 && <PaymentForm />}
          {step === 2 && <ReviewView data={campaignData} />}
        </div>

        {/* Navigation Actions */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
          <button 
            onClick={prevStep}
            className={`text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors ${step === 0 ? 'invisible' : 'visible'}`}
          >
            ← Back to {steps[step - 1]}
          </button>
          
          <button 
            onClick={nextStep}
            className="bg-slate-900 text-white px-10 py-3.5 rounded-xl font-bold text-sm hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 active:scale-95"
          >
            {step === 2 ? 'Confirm & Launch Campaign' : 'Continue to Payment →'}
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const CampaignForm = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
    <header>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Campaign Basics</h3>
      <p className="text-slate-500">Confirm the internal details for your marketing campaign.</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Campaign Name</label>
        <input type="text" defaultValue="Summer Glow Skincare" className="border-2 border-slate-100 rounded-lg p-3 focus:border-indigo-500 outline-none transition-all" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Target Platform</label>
        <select className="border-2 border-slate-100 rounded-lg p-3 focus:border-indigo-500 outline-none bg-white">
          <option>Instagram (Reels & Stories)</option>
          <option>TikTok (Short-form)</option>
          <option>YouTube (Dedicated)</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 md:col-span-2">
        <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Internal Campaign ID</label>
        <input type="text" placeholder="e.g. Q3-SKIN-01" className="border-2 border-slate-100 rounded-lg p-3 focus:border-indigo-500 outline-none" />
      </div>
    </div>
  </div>
);

const PaymentForm = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
    <header>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Payment Method</h3>
      <p className="text-slate-500">Choose how you'd like to fund this campaign's escrow account.</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border-2 border-indigo-600 bg-indigo-50 p-4 rounded-xl flex items-center gap-4 cursor-pointer">
        <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">💳</div>
        <span className="font-bold text-slate-900 text-sm">Credit / Debit Card</span>
      </div>
      <div className="border-2 border-slate-100 p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:border-slate-200">
        <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">🏦</div>
        <span className="font-bold text-slate-400 text-sm">Company Wire Transfer</span>
      </div>
    </div>
    <div className="space-y-4 pt-4">
       <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Cardholder Name</label>
          <input type="text" placeholder="JOHN SMITH" className="border-2 border-slate-100 rounded-lg p-3 focus:border-indigo-500 outline-none" />
       </div>
       <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Card Number</label>
          <div className="relative">
            <input type="text" placeholder="**** **** **** 1234" className="w-full border-2 border-slate-100 rounded-lg p-3 focus:border-indigo-500 outline-none" />
            <span className="absolute right-3 top-3.5 text-xs text-slate-400 font-bold tracking-tighter italic">VISA</span>
          </div>
       </div>
    </div>
  </div>
);

const ReviewView = ({ data }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
    <header>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Review & Launch</h3>
      <p className="text-slate-500">Everything looks ready. Review the summary before starting the campaign.</p>
    </header>
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Influencer Selection</p>
        <div className="flex -space-x-2">
           {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300" />)}
           <div className="pl-4 text-xs font-bold pt-1.5 text-slate-600">3 Creators Ready</div>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Billing Address</p>
        <p className="text-xs text-slate-600 font-medium">123 Influencer Way, Creators Park, San Francisco, CA</p>
      </div>
    </div>
  </div>
);

export default Checkout;