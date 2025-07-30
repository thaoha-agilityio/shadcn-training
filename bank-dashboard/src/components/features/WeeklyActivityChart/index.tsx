'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent } from '@/components/ui/Card';

const data = [
  { day: 'Sat', deposit: 230, withdraw: 470 },
  { day: 'Sun', deposit: 110, withdraw: 330 },
  { day: 'Mon', deposit: 260, withdraw: 330 },
  { day: 'Tue', deposit: 370, withdraw: 480 },
  { day: 'Wed', deposit: 220, withdraw: 140 },
  { day: 'Thu', deposit: 240, withdraw: 410 },
  { day: 'Fri', deposit: 310, withdraw: 400 },
];

export function WeeklyTransactionChart() {
  return (
    <Card className="rounded-2xl border bg-white shadow-md w-[487px] mt-4">
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} className="gap-6">
            <XAxis dataKey="day" stroke="#718EBF" />
            <YAxis stroke="#718EBF" />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={12}
              wrapperStyle={{ paddingBottom: 20 }}
            />
            <Bar
              dataKey="deposit"
              fill="#16DBCC"
              name="Deposit"
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="withdraw"
              fill="#1814F3"
              name="Withdraw"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
