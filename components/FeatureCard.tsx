import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    points: string[];
}

export default function FeatureCard({ icon, title, description, points }: FeatureCardProps) {
    return (
        <div className="group hover:shadow-xl transition-all duration-300 p-8 rounded-md border border-gray-100 hover:border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                {icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <ul className="space-y-2">
                {points.map((point, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}