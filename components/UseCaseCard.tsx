import { ReactNode } from "react";

interface UseCaseCardProps {
  icon: ReactNode;
  color: string;
  title: string;
  subtitle: string;
  message: string;
  result: string | ReactNode;
}

export default function UseCaseCard({
  icon,
  color,
  title,
  subtitle,
  message,
  result,
}: UseCaseCardProps) {
  return (
    <div className="bg-white p-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-md border-l-4" style={{ borderColor: color.split(' ')[1] }}>
        <p className="text-sm text-gray-700 italic">"{message}"</p>
      </div>
      <div className="mt-4 flex items-center text-sm text-green-600">
        {result}
      </div>
    </div>
  );
}