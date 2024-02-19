'use client';
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GenderChart = ({ gender }: { gender: { gender: string }[] }) => {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    if (gender && gender.length > 0) {
      const calculateGenderCounts = () => {
        let maleCount = 0;
        let femaleCount = 0;

        gender.map((user) => {
          if (user.gender.toLowerCase() === "male") {
            maleCount++;
          } else if (user.gender.toLowerCase() === "female") {
            femaleCount++;
          }
        });

        setMaleCount(maleCount);
        setFemaleCount(femaleCount);
      };

      calculateGenderCounts();
    }
  }, [gender]);

  return (
    <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-4">
      <h2 className="text-xl text-customSuccess font-bold">Gender Occurrences</h2>
      <BarChart
        width={500}
        height={500}
        data={[
          { gender: "Male", count: maleCount },
          { gender: "Female", count: femaleCount },
        ]}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="gender" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#31766f" />
      </BarChart>
    </div>
  );
};

export default GenderChart;
