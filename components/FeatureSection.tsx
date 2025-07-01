import FeatureCard from "./FeatureCard";
import { Brain, Clock, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Founders Choose PingGenius
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built specifically for busy entrepreneurs who need high-converting outreach without the time investment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-7 h-7 text-white" />}
            title="AI-Powered Personalization"
            description="Our AI Agents analyzes prospects LinkedIn profiles, recent posts, and company data to craft messages that feel genuinely personal—not templated."
            points={[
              "Analyzes 50+ data points per prospect",
              "Adapts tone based on industry",
            ]}
          />
          <FeatureCard
            icon={<Clock className="w-7 h-7 text-white" />}
            title="10x Faster Than Manual Writing"
            description="Generate compelling, personalized messages in under 10 seconds. What used to take 30 minutes of research and writing now happens instantly with better results."
            points={[
              "Bulk generation for multiple prospects",
              "Export to any platform",
            ]}
          />
          <FeatureCard
            icon={<TrendingUp className="w-7 h-7 text-white" />}
            title="3x Higher Response Rates"
            description="Our users report 40-60% response rates compared to 15-20% with generic outreach. Personalized messages simply work better—and PingGenius makes them effortless."
            points={[
              "Built-in A/B testing",
              "Performance analytics",
            ]}
          />
        </div>
      </div>
    </section>
  );
}