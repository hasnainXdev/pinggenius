import { Users, Target, Mail, TrendingUp } from "lucide-react";
import UseCaseCard from "./UseCaseCard";

export default function UseCasesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect For Every Outreach Scenario
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're raising funding, finding customers, or building partnerships—PingGenius adapts to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon={<Users className="w-6 h-6 text-white" />}
            color="bg-gradient-to-br from-purple-500 to-purple-700"
            title="Startup Founders"
            subtitle="Investor & Partner Outreach"
            message={`Hi Jhon, I noticed your recent investment in [X Company] and your focus on B2B SaaS. Our AI-powered sales tool is seeing 40% month-over-month growth with similar portfolio companies like [X Company]. Would love to share our Series A deck—do you have 15 minutes this week?`}
            result={<><TrendingUp className="w-4 h-4 mr-1" /> 73% response rate for fundraising</>}
          />

          <UseCaseCard
            icon={<Target className="w-6 h-6 text-white" />}
            color="bg-gradient-to-br from-green-500 to-green-700"
            title="Indie Hackers"
            subtitle="Customer Acquisition"
            message={`Hey David, saw your tweet about struggling with [Pain Point]. I built [Product Name] specifically to solve this—it's helped 200+ indie makers like yourself save 10+ hours per week. Mind if I send over a quick demo?`}
            result={<><TrendingUp className="w-4 h-4 mr-1" /> 58% response rate for customer outreach</>}
          />

          <UseCaseCard
            icon={<Mail className="w-6 h-6 text-white" />}
            color="bg-gradient-to-br from-blue-500 to-blue-700"
            title="Sales Teams"
            subtitle="B2B Prospecting"
            message={`Hi Sarah, I noticed [Company] just expanded to [Location] and is likely scaling your [Department] team. Companies similar to yours typically see 30% cost savings with our Solution. Worth a quick 10-minute conversation?`}
            result={<><TrendingUp className="w-4 h-4 mr-1" /> 45% response rate for B2B sales</>}
          />
        </div>
      </div>
    </section>
  );
}
