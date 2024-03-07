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
          if (user.gender === "Male") {
            maleCount++;
          } else if (user.gender === "Female") {
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
    <div className="w-[400px] h-full bg-white rounded-lg">
      <h2>Gender Occurrences</h2>
      <BarChart
        width={400}
        height={400}
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
