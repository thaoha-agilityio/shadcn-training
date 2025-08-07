'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Card, CardContent } from '@/components/common/Card';

// Constants
import { WEEKLY_DATA } from '@/constants';

export const WeeklyTransactionChart = () => (
  <Card className="rounded-3xl border text-xs bg-card shadow-md w-full mt-4">
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={WEEKLY_DATA} className="gap-6" margin={{ left: -30 }}>
          <CartesianGrid
            stroke="#E5EAF2"
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis dataKey="day" stroke="#718EBF" tickLine={false} />
          <YAxis
            stroke="#718EBF"
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
            axisLine={false} // ❌ remove vertical axis line
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={12}
            wrapperStyle={{ paddingBottom: 20 }}
          />
          <Bar
            dataKey="withdraw"
            fill="#1814F3"
            name="Withdraw"
            radius={[10, 10, 10, 10]}
            barSize={10}
          />
          <Bar
            dataKey="deposit"
            fill="#16DBCC"
            name="Deposit"
            radius={[10, 10, 10, 10]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
