import { MapPin } from "lucide-react";
import { Link } from "wouter";

const LOCALITIES = [
  { name: "Adarsh Nagar", href: "/adarsh-nagar-laundry" },
  { name: "Mahendragarh Road", href: "/mahendragarh-road-laundry" },
  { name: "Koriawas", href: "/laundry-near-me-narnaul" },
  { name: "Shastri Nagar", href: "/laundry-service-narnaul" },
  { name: "Nasibpur", href: "/dry-cleaning-narnaul" },
  { name: "Kailash Nagar", href: "/laundry-near-me-narnaul" },
  { name: "Old Narnaul", href: "/laundry-service-narnaul" },
  { name: "New Colony", href: "/dry-cleaning-narnaul" },
  { name: "Mandi Area", href: "/laundry-near-me-narnaul" },
  { name: "Sadar Bazar", href: "/laundry-service-narnaul" },
  { name: "Housing Board", href: "/dry-cleaning-narnaul" },
  { name: "Haryana Colony", href: "/laundry-near-me-narnaul" },
];

export function LocalAreaSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Areas We Serve in Narnaul</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            EZDRY provides premium doorstep laundry and dry cleaning services across all major localities in Narnaul. 
            We pick up and deliver directly to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {LOCALITIES.map((area) => (
            <Link 
              key={area.name} 
              href={area.href}
              className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-500 hover:shadow-md transition-all group"
            >
              <MapPin className="w-5 h-5 text-indigo-500 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 font-medium group-hover:text-indigo-600">{area.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Don't see your area? We're likely covering it. 
            <Link href="/contact" className="text-indigo-600 font-semibold ml-1 hover:underline">Contact us to verify</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
