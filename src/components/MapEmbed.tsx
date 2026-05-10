/**
 * Map Embed Component - GBP Ecosystem
 * 
 * Features:
 * - Google Maps embed
 * - Service area visualization
 * - Location trust signals
 * - Directions CTA
 * - Local landmarks reference
 */

import { MapPin, Navigation, ExternalLink, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

interface MapEmbedProps {
  variant?: "full" | "compact" | "minimal";
  showServiceArea?: boolean;
  locality?: string;
}

const EZDRY_LOCATION = {
  name: "EZDRY - Laundry & Dry Cleaning",
  address: "Narnaul, Mahendragarh District, Haryana 123001",
  lat: 28.0444, // Narnaul coordinates
  lng: 76.1083,
  phone: "+91 96718 69470",
  hours: "8:00 AM - 8:00 PM",
  mapsUrl: "https://maps.app.goo.gl/SSpHwo8K6fD5YKu1A",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28076.123456789!2d76.1083!3d28.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAyJzQwLjAiTiA3NsKwMDYnMzAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
};

export function MapEmbed({ variant = "full", showServiceArea = true, locality }: MapEmbedProps) {
  const handleDirections = () => {
    trackEvent("map_directions_click", { locality: locality || "general" });
    window.open(EZDRY_LOCATION.mapsUrl, "_blank");
  };

  const handleViewMap = () => {
    trackEvent("map_view_click");
    window.open(EZDRY_LOCATION.mapsUrl, "_blank");
  };

  if (variant === "minimal") {
    return (
      <button
        onClick={handleDirections}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
      >
        <MapPin className="w-4 h-4" />
        <span>Narnaul, Haryana</span>
        <ExternalLink className="w-3 h-3" />
      </button>
    );
  }

  if (variant === "compact") {
    return (
      <div className="bg-gray-50 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-1">{EZDRY_LOCATION.name}</h4>
            <p className="text-sm text-gray-500 mb-3">{EZDRY_LOCATION.address}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{EZDRY_LOCATION.hours}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Phone className="w-4 h-4" />
                <span>{EZDRY_LOCATION.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <Button 
          onClick={handleDirections}
          className="w-full mt-4 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Get Directions
        </Button>
      </div>
    );
  }

  // Full variant
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="p-8 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-1">Find EZDRY in Narnaul</h3>
            <p className="text-gray-500">{EZDRY_LOCATION.address}</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open Now
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-80 bg-gray-100">
        {/* Stylized Map Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Map styling */}
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Service Area Circle */}
          {showServiceArea && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-64 h-64 border-2 border-indigo-400/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-indigo-400/50 rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-indigo-400/70 rounded-full" />
              <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-indigo-600 font-bold whitespace-nowrap">
                15km Service Radius
              </p>
            </div>
          )}

          {/* Location Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="relative">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-indigo-600" />
            </div>
          </div>
        </div>

        {/* Overlay Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{EZDRY_LOCATION.hours}</p>
                  <p className="text-xs text-gray-500">Daily Service Hours</p>
                </div>
              </div>
              <Button 
                onClick={handleViewMap}
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Map
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Info & CTA */}
      <div className="p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-sm">Free Pickup</p>
              <p className="text-xs text-gray-500">All over Narnaul</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Navigation className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-sm">15km Radius</p>
              <p className="text-xs text-gray-500">Service coverage</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-bold text-sm">{EZDRY_LOCATION.phone}</p>
              <p className="text-xs text-gray-500">Call for pickup</p>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleDirections}
          className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold"
        >
          <Navigation className="w-5 h-5 mr-2" />
          Get Directions on Google Maps
        </Button>
      </div>
    </div>
  );
}

export default MapEmbed;
