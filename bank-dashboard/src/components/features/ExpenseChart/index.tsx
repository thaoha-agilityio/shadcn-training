'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { EXPENSE_DATA } from '@/constants';
interface RenderLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  name?: string;
  value?: number;
}
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: RenderLabelProps) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const percentage = `${Math.round(percent * 100)}%`;
  const name = EXPENSE_DATA[index].name;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontWeight="bold"
    >
      <tspan x={x} dy="-0.6em" fontSize={10}>
        {percentage}
      </tspan>
      <tspan x={x} dy="1.2em" fontSize={10}>
        {name}
      </tspan>
    </text>
  );
};

export const ExpensePieChart = () => (
  <div className="w-full h-[350px] bg-card rounded-2xl mt-4 ">
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={EXPENSE_DATA}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          dataKey="value"
        >
          {EXPENSE_DATA.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              stroke="#fff"
              strokeWidth={6}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);
