import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Sales
      </p>
      <BadgeDelta deltaType="moderateIncrease">+12.6%</BadgeDelta>
      </Flex>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        $14.764
      </p>
    </Card>
  );
};

export default CardItem;
