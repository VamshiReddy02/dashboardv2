import { PieChart, Pie, Cell } from "recharts";
import WidgetWrapper from "./WidgetWrapper";

interface ChartItem {
  name: string;
  value: number;
  color: string;
}

const CloudRiskWidget = ({
  id,
  title,
  data,
}: {
  id: number;
  title: string;
  data: ChartItem[];
}) => {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <WidgetWrapper id={id} title={title}>
      <div className="flex items-center justify-between">
        <div className="relative w-[140px] h-[140px]">
          <PieChart width={140} height={140}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={45}
              outerRadius={60}
              paddingAngle={2}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          {/* Centered total text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-xl font-semibold">{total}</div>
            <div className="text-sm text-gray-500">Total</div>
          </div>
        </div>

        {/* Legend */}
        <ul className="text-sm space-y-1 pl-4">
          {data.map((item) => (
            <li key={item.name}>
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              {item.name} ({item.value})
            </li>
          ))}
        </ul>
      </div>
    </WidgetWrapper>
  );
};

export default CloudRiskWidget;
