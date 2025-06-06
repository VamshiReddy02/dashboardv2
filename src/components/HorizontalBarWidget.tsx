import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from "recharts";
import WidgetWrapper from "./WidgetWrapper";

interface BarItem {
  name: string;
  value: number;
  color: string;
}

interface Props {
  id: number;
  title: string;
  total: number;
  data: BarItem[];
  unitLabel: string;
}

const HorizontalBarWidget = ({ id, title, total, data, unitLabel }: Props) => {
  // prepare format for recharts
  const chartData = [
    data.reduce((acc, cur) => {
      acc[cur.name] = cur.value;
      return acc;
    }, {} as Record<string, number>)
  ];
  const barKeys = data.map((d) => d.name);

  return (
    <WidgetWrapper id={id} title={title}>
      <div>
        <div className="text-xl font-semibold">
          {total}{" "}
          <span className="text-sm font-normal text-gray-500">
            {unitLabel}
          </span>
        </div>

        <div className="mt-3 h-5 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" hide />
                {barKeys.map((key, index) => {
                const isFirst = index === 0;
                const isLast = index === barKeys.length - 1;

                let radius: [number, number, number, number] = [0, 0, 0, 0];

                if (barKeys.length === 1) {
                    radius = [10, 10, 10, 10]; // only one segment
                } else if (isFirst) {
                    radius = [10, 0, 0, 10];
                } else if (isLast) {
                    radius = [0, 10, 10, 0];
                }

                return (
                    <Bar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    radius={radius}
                    isAnimationActive={false}
                    >
                    <Cell fill={data[index].color} />
                    </Bar>
                );
                })}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-sm mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.name} ({item.value})
            </div>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default HorizontalBarWidget;
