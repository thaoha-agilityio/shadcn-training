'use client';

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';

// Constants
import { BALANCE_HISTORY_DATA } from '@/constants';

export const BalanceHistoryChart = () => (
  <div className="w-full h-[300px] rounded-xl bg-card p-4 pl-0 mt-4 shadow-sm">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={BALANCE_HISTORY_DATA}
        margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1814F3" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#1814F3" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#E5EAF2"
        />
        <XAxis
          dataKey="month"
          tick={{ fill: '#718EBF', fontSize: 12 }}
          axisLine={false}
        />
        <YAxis
          domain={[0, 800]}
          tick={{ fill: '#718EBF', fontSize: 12 }}
          axisLine={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="balance"
          stroke="#1814F3"
          strokeWidth={3}
          fill="url(#colorBalance)"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
