import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallNowPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Show popup when component mounts (website opens/refreshes)
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  const handleCall = () => {
    window.location.href = "tel:8444498598";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Phone Icon */}
          <div className="mb-4 flex justify-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <Phone size={32} className="text-blue-600" />
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Call Now</h3>

          {/* Description Text */}
          <p className="text-gray-600 mb-6 text-sm">
            Get in touch with our team today. Call us now for special offers and assistance.
          </p>

          {/* Phone Number Display */}
          <div className="mb-6">
            <p className="text-gray-500 text-xs mb-2">Our Phone Number</p>
            <p className="text-3xl font-bold text-blue-600">(844) 449-8598</p>
          </div>

          {/* Call Button */}
          <Button
            onClick={handleCall}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Call Now
          </Button>

          {/* Optional: Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallNowPopup;
