import React from "react";
import { BarList, Card } from "@tremor/react";

const data = [
  {
    name: "KFC",
    value: 456,
    href: "https://www.kfc.kg/",
  },
  {
    name: "Faiza",
    value: 314,
    href: "https://faiza.kg/",
  },
  {
    name: "PapaJohns",
    value: 254,
    href: "https://papajohns.kg/",
  },
  {
    name: "Dodo",
    value: 121,
    href: "https://dodopizza.kg/bishkek",
  },
  {
    name: "Sushivesla",
    value: 85,
    href: "https://sushivesla.kg/",
  },
];

const Analytics = () => {
  return (
    <Card className="mx-auto max-w-full my-4">
      <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
        Food Delivery Analytics
      </h3>
      <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
        <span>Source</span>
        <span>Orders</span>
      </p>
      <BarList data={data} className="mt-2" />
    </Card>
  );
};

export default Analytics;
