import React from "react";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
    departement:
      "Glovo",
    status: "active",
  },
  {
    name: "Albert Rösti",
    Role: "Federal Councillor",
    departement:
      "Yandex Food",
    status: "active",
  },
  {
    name: "Beat Jans",
    Role: "Federal Councillor",
    departement: "Namba Food",
    status: "active",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "Glovo",
    status: "active",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
    departement: "Yandex Food",
    status: "active",
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
    departement:
      "Namba Food",
    status: "active",
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "Glovo",
    status: "active",
  },
];

function TableComponent() {
  return (
    <Card className="mt-4">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        List of Active/Non-Active Delivery Couriers
      </h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Delivery Company</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.Role}</TableCell>
              <TableCell>{item.departement}</TableCell>
              <TableCell>
                <Badge color="emerald">
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default TableComponent;
