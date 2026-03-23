"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RevenueChartItem {
  monthName: string;
  revenue: number;
}

interface RevenueChartProps {
  data: RevenueChartItem[];
}


export default function RevenueChart({ data }: RevenueChartProps) {
  // 🔥 Calculate total revenue dynamically
  const totalRevenue =
    data?.reduce((sum, item) => sum + (item.revenue || 0), 0) || 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Total Revenue $
        {totalRevenue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          {/* Use monthName instead of month number */}
          <XAxis dataKey="monthName" stroke="#6b7280" />

          {/* Auto scale Y axis */}
          <YAxis stroke="#6b7280" />

          {/* 🔥 Custom Tooltip */}
          <Tooltip
            content={({ active, payload }: { active: boolean, payload: any }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;

                return (
                  <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-md text-xs">
                    <p className="font-semibold text-sm mb-1">
                      {item.monthName}
                    </p>
                    <p>
                      Revenue: $
                      {item.revenue.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: "#3b82f6", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
