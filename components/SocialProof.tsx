import { Star } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg text-gray-600">
            PingGenius transformed our outreach. We went from 18% to 40% response rates in our first month.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Sarah Chen, Founder of TechFlow (YC S23)
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <Stat label="Active Users" value="100+" />
          <Stat label="Messages Sent" value="1K+" />
          <Stat label="Avg Response Rate" value="40%" />
          <Stat label="User Rating" value="4.9/5" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-gray-500">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}
