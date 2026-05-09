import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";

const REVIEWS = [
  {
    name: "Sandeep Kumar",
    location: "Adarsh Nagar, Narnaul",
    text: "Finally a professional dry cleaning service in Narnaul. Their pick-up was on time and the quality of my suit cleaning was excellent. Highly recommended for people who care about their clothes.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Priyanka Yadav",
    location: "Housing Board, Narnaul",
    text: "EZDRY is a lifesaver for working professionals. No more searching for dhobis or worrying about laundry on weekends. Their app is easy to use and delivery is always crisp and clean.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Rajesh Saini",
    location: "Mandi Area, Narnaul",
    text: "Used their blanket cleaning service recently. Very impressed with the packaging and the fresh smell. The prices are fixed which I really like — no bargaining needed.",
    rating: 5,
    date: "3 weeks ago"
  }
];

export function ReviewsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-gray-900 font-black ml-2">4.9/5 Average Rating</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Trusted by <span className="text-indigo-600">5,000+</span> <br />Narnaul Households
            </h2>
          </div>
          <div className="bg-neutral-50 border border-gray-100 p-6 rounded-[2rem] flex items-center gap-4">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" className="w-6 h-6" alt="Google" />
             </div>
             <div>
                <p className="text-sm font-black text-gray-900">Verified Reviews</p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Via Google Maps Narnaul</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 border border-gray-100 p-10 rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-indigo-600/10 group-hover:text-indigo-600/20 transition-colors" />
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-black text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-gray-900 font-black tracking-tight flex items-center gap-2">
                    {review.name} <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                  </h3>
                  <p className="text-xs text-gray-400 font-bold">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
