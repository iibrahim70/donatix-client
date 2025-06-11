import React, { useState, useEffect } from "react";

// --- Reusable Components ---

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg m-4 transform transition-transform duration-300 scale-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const CampaignCard = ({ imgSrc, title, org, raised, goal, onDonateClick }) => {
  const progress = Math.round((raised / goal) * 100);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          By <span className="font-semibold text-indigo-600">{org}</span>
        </p>
        <div className="bg-gray-200 rounded-full h-2.5 mb-2">
          <div
            className="bg-green-400 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center text-sm mb-4">
          <p>
            <span className="font-bold text-gray-800">
              ${raised.toLocaleString()}
            </span>{" "}
            raised
          </p>
          <p className="text-gray-500">of ${goal.toLocaleString()}</p>
        </div>
        <button
          onClick={() => onDonateClick(title)}
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

const OrgSignUpForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const navigate = (direction) => {
    // Simple validation could be added here
    setStep((prev) => prev + direction);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle final submission
    setStep(4); // Go to confirmation step
  };

  const resetForm = () => {
    setStep(1);
    setFormData({});
  };

  const StepIndicator = ({ num, currentStep }) => {
    let stateClass = "bg-gray-200 text-gray-500";
    let content = num;
    if (currentStep > num) {
      stateClass = "bg-green-400 text-white";
      content = <i className="fas fa-check"></i>;
    } else if (currentStep === num) {
      stateClass = "bg-indigo-600 text-white";
    }

    return (
      <div
        className={`step ${stateClass} rounded-full w-8 h-8 flex items-center justify-center font-bold transition-all duration-300`}
      >
        {content}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Step Progress Bar */}
      <div className="flex items-center mb-8 w-full">
        <StepIndicator num={1} currentStep={step} />
        <div
          className={`flex-grow h-0.5 transition-colors duration-300 ${
            step > 1 ? "bg-green-400" : "bg-gray-200"
          }`}
        ></div>
        <StepIndicator num={2} currentStep={step} />
        <div
          className={`flex-grow h-0.5 transition-colors duration-300 ${
            step > 2 ? "bg-green-400" : "bg-gray-200"
          }`}
        ></div>
        <StepIndicator num={3} currentStep={step} />
      </div>

      {/* Steps Content */}
      {step === 1 && (
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Step 1: Organization Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="orgName"
                className="block text-sm font-medium text-gray-700"
              >
                Organization Name*
              </label>
              <input
                type="text"
                id="orgName"
                required
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="orgWebsite"
                className="block text-sm font-medium text-gray-700"
              >
                Website*
              </label>
              <input
                type="url"
                id="orgWebsite"
                required
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3 className="font-semibold text-lg mb-4">Step 2: Verification</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="orgEin"
                className="block text-sm font-medium text-gray-700"
              >
                Tax ID / EIN*
              </label>
              <input
                type="text"
                id="orgEin"
                required
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="orgProof"
                className="block text-sm font-medium text-gray-700"
              >
                Proof of Status (e.g., 501c3)*
              </label>
              <input
                type="file"
                id="orgProof"
                required
                className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Step 3: Create Your Account
          </h3>
          <div className="mb-4">
            <label
              htmlFor="orgEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Email*
            </label>
            <input
              type="email"
              id="orgEmail"
              required
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="orgPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Create Password*
            </label>
            <input
              type="password"
              id="orgPassword"
              required
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="text-center py-8">
          <div className="text-green-500 text-5xl mb-4">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className="font-semibold text-xl mb-2">Application Submitted!</h3>
          <p className="text-gray-600">
            Thank you. Our team will review your application and get back to you
            within 2-3 business days.
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      {step < 4 && (
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition ${
              step === 1 ? "hidden" : ""
            }`}
          >
            Back
          </button>
          {step < 3 && (
            <button
              type="button"
              onClick={() => navigate(1)}
              className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition ml-auto"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition ml-auto"
            >
              Submit Application
            </button>
          )}
        </div>
      )}
    </form>
  );
};

// --- Main App Component ---

export default function App() {
  const [modal, setModal] = useState({ type: null, props: {} });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingTab, setPricingTab] = useState("donors");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const openModal = (type, props = {}) => setModal({ type, props });
  const closeModal = () => setModal({ type: null, props: {} });

  // Campaign Data
  const campaigns = [
    {
      id: 1,
      imgSrc: "https://placehold.co/600x400/34d399/ffffff?text=Education+Drive",
      title: "Build a School for Rural Children",
      org: "Hope Foundation",
      raised: 15000,
      goal: 20000,
    },
    {
      id: 2,
      imgSrc: "https://placehold.co/600x400/fbbf24/ffffff?text=Animal+Shelter",
      title: "Save Our Strays: New Shelter",
      org: "Paws & Whiskers",
      raised: 4500,
      goal: 10000,
    },
    {
      id: 3,
      imgSrc: "https://placehold.co/600x400/60a5fa/ffffff?text=Clean+Water",
      title: "Clean Water for Everyone",
      org: "AquaLife Org",
      raised: 27600,
      goal: 30000,
    },
  ];

  // Pricing Data
  const prices = {
    donor: { monthly: 5, yearly: 50 },
    orgPro: { monthly: 49, yearly: 490 },
    orgPremium: { monthly: 99, yearly: 990 },
  };

  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      {/* Custom Styles for Toggle */}
      <style>{`
                .toggle-checkbox:checked {
                    right: 0;
                    border-color: #4f46e5;
                    transform: translateX(100%);
                }
                .toggle-checkbox:checked + .toggle-label {
                    background-color: #4f46e5;
                }
            `}</style>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">
            Givify
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#campaigns"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Find a Cause
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Pricing
            </a>
            <a
              href="#for-orgs"
              className="font-semibold text-gray-700 hover:text-indigo-600 transition"
            >
              For Non-Profits
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => openModal("signIn")}
              className="hidden sm:block text-gray-600 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg transition"
            >
              Sign In
            </button>
            <button
              onClick={() => openModal("signUp")}
              className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm"
            >
              Sign Up
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl text-gray-600"></i>
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <a
              href="#campaigns"
              className="block px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              Find a Cause
            </a>
            <a
              href="#pricing"
              className="block px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              Pricing
            </a>
            <a
              href="#for-orgs"
              className="block px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              For Non-Profits
            </a>
            <button
              onClick={() => {
                openModal("signIn");
                setMobileMenuOpen(false);
              }}
              className="w-full text-left block px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              Sign In
            </button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center text-white py-20 md:py-32"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(165, 55, 253, 0.9) 100%), url('https://placehold.co/1920x1080/e2e8f0/334155?text=Community+Impact')",
          }}
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Powering Generosity, Connecting Communities
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              The trusted platform for donors and non-profits to create lasting
              impact. Discover causes you're passionate about and make a
              difference today.
            </p>
            <div className="flex justify-center">
              <a
                href="#campaigns"
                className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg"
              >
                Explore Campaigns
              </a>
            </div>
          </div>
        </section>

        {/* Campaigns Section */}
        <section id="campaigns" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Campaigns
              </h2>
              <p className="text-gray-600 mt-2">
                Support a cause that matters to you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.id}
                  {...campaign}
                  onDonateClick={(title) =>
                    openModal("donate", { campaignTitle: title })
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Choose Your Plan
              </h2>
              <p className="text-gray-600 mt-2">
                Flexible subscriptions for both donors and organizations.
              </p>
            </div>
            <div className="flex justify-center items-center mb-10 space-x-4">
              <span className="font-medium">Monthly</span>
              <label
                htmlFor="billing-cycle-toggle"
                className="relative inline-flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="billing-cycle-toggle"
                  className="sr-only peer"
                  onChange={(e) =>
                    setBillingCycle(e.target.checked ? "yearly" : "monthly")
                  }
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
              <span className="font-medium">
                Yearly{" "}
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
            <div className="flex justify-center mb-10">
              <div className="bg-indigo-100 rounded-full p-1 flex items-center">
                <button
                  onClick={() => setPricingTab("donors")}
                  className={`font-semibold py-2 px-6 rounded-full transition-colors duration-300 ${
                    pricingTab === "donors"
                      ? "bg-indigo-600 text-white"
                      : "text-indigo-600"
                  }`}
                >
                  For Donors
                </button>
                <button
                  onClick={() => setPricingTab("orgs")}
                  className={`font-semibold py-2 px-6 rounded-full transition-colors duration-300 ${
                    pricingTab === "orgs"
                      ? "bg-indigo-600 text-white"
                      : "text-indigo-600"
                  }`}
                >
                  For Organizations
                </button>
              </div>
            </div>
            <div>
              {pricingTab === "donors" && (
                <div className="flex justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border-2 border-indigo-500">
                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      Givify+ Donor
                    </h3>
                    <p className="text-center text-gray-500 mt-2">
                      Supercharge your giving.
                    </p>
                    <p className="text-5xl font-bold text-center my-6">
                      ${prices.donor[billingCycle]}
                      <span className="text-lg font-medium text-gray-500">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </p>
                    <ul className="space-y-4 text-gray-600 mb-8">
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>{" "}
                        0% platform fees on all donations
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>{" "}
                        Special "Givify+" badge on your profile
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>{" "}
                        Consolidated annual donation receipts
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>{" "}
                        Early access to new campaigns
                      </li>
                    </ul>
                    <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
                      Become a Givify+ Donor
                    </button>
                  </div>
                </div>
              )}
              {pricingTab === "orgs" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Basic
                      </h3>
                      <p className="text-5xl font-bold my-4">Free</p>
                      <p className="text-gray-500 mb-6">
                        For new organizations getting started.
                      </p>
                      <ul className="space-y-3 text-gray-600 mb-6">
                        <li>Up to 2 active campaigns</li>
                        <li>5% platform fee</li>
                        <li>Basic analytics</li>
                        <li>Email support</li>
                      </ul>
                    </div>
                    <button className="w-full bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition">
                      Current Plan
                    </button>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-500 relative flex flex-col">
                    <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-4">
                      MOST POPULAR
                    </span>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                      <p className="text-5xl font-bold my-4">
                        ${prices.orgPro[billingCycle]}
                        <span className="text-lg font-medium text-gray-500">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </p>
                      <p className="text-gray-500 mb-6">
                        For growing organizations ready to scale.
                      </p>
                      <ul className="space-y-3 text-gray-600 mb-6">
                        <li>Unlimited campaigns</li>
                        <li>2% platform fee</li>
                        <li>Advanced analytics & reports</li>
                        <li>Custom branding options</li>
                        <li>Priority support</li>
                      </ul>
                    </div>
                    <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
                      Upgrade to Pro
                    </button>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Premium
                      </h3>
                      <p className="text-5xl font-bold my-4">
                        ${prices.orgPremium[billingCycle]}
                        <span className="text-lg font-medium text-gray-500">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      </p>
                      <p className="text-gray-500 mb-6">
                        For established organizations with high volume.
                      </p>
                      <ul className="space-y-3 text-gray-600 mb-6">
                        <li>Everything in Pro</li>
                        <li>0% platform fee</li>
                        <li>Dedicated account manager</li>
                        <li>API access</li>
                      </ul>
                    </div>
                    <button className="w-full bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition">
                      Contact Sales
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* For Orgs Section */}
        <section id="for-orgs" className="bg-indigo-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Amplify Your Impact?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join Givify to reach a wider audience, manage your campaigns with
              powerful tools, and connect with passionate donors. It's free to
              get started.
            </p>
            <button
              onClick={() => openModal("orgSignUp")}
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg"
            >
              Start Fundraising Today
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Givify</h3>
              <p className="text-gray-400">
                Connecting communities, one donation at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Donors</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#campaigns" className="hover:text-white transition">
                    Find a Cause
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => openModal("signIn")}
                    className="hover:text-white transition"
                  >
                    My Account
                  </button>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Givify+
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Organizations</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => openModal("orgSignUp")}
                    className="hover:text-white transition"
                  >
                    Start Fundraising
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Organization Login
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Plans & Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Givify. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Rendering */}
      <Modal
        isOpen={modal.type === "donate"}
        onClose={closeModal}
        title="Make a Donation"
      >
        <p className="text-gray-600 mb-4">
          To: <span className="font-semibold">{modal.props.campaignTitle}</span>
        </p>
        {/* ... Donation form fields ... */}
        <button className="w-full mt-4 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition">
          Proceed to Payment
        </button>
        <p className="text-xs text-center text-gray-500 mt-4">
          You can donate anonymously or{" "}
          <button
            onClick={() => openModal("signIn")}
            className="text-indigo-600 hover:underline"
          >
            sign in
          </button>{" "}
          to track your impact.
        </p>
      </Modal>

      <Modal
        isOpen={modal.type === "signIn"}
        onClose={closeModal}
        title="Sign In"
      >
        <form>
          <div className="mb-4">
            <label
              htmlFor="signInEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="signInEmail"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="signInPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="signInPassword"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => openModal("signUp")}
            className="text-indigo-600 hover:underline font-medium"
          >
            Sign Up
          </button>
        </p>
      </Modal>

      <Modal
        isOpen={modal.type === "signUp"}
        onClose={closeModal}
        title="Create Your Account"
      >
        <form>
          <div className="mb-4">
            <label
              htmlFor="signUpName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="signUpName"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="signUpEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="signUpEmail"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="signUpPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="signUpPassword"
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <button
            onClick={() => openModal("signIn")}
            className="text-indigo-600 hover:underline font-medium"
          >
            Sign In
          </button>
        </p>
      </Modal>

      <Modal
        isOpen={modal.type === "orgSignUp"}
        onClose={closeModal}
        title="Register Your Organization"
      >
        <OrgSignUpForm />
      </Modal>
    </div>
  );
}
