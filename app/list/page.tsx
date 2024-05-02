"use client";
import { apiGetALL } from "@/api-request";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tableData, setTableData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    apiGetALL()
      .then((data) => setTableData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors appropriately, e.g., display error message to user
      });
  }, []);

  return tableData.length ? (
    <CustomTable Data={tableData} />
  ) : (
    <Flex w={"100%"} justifyContent={"center"} mt={{ md: "220px" }}>
      <Spinner size="lg" emptyColor="gray.200" color="blue.500" />
    </Flex>
  );
}

const CustomTable = ({ Data }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>نام پزشک</Th>
            <Th>شماره نظام پزشکی</Th>
            <Th>شماره تلفن</Th>
            <Th>شهر</Th>
            <Th>داروخانه</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Data.map((row: any, index: number) => {
            return (
              <Tr key={index}>
                <Td>{row.name}</Td>
                <Td>{row.serialize_number}</Td>
                <Td>{row.mobile}</Td>
                <Td>{row.city}</Td>
                <Td>
                  {row.pharmacy?.map((ph: any, index: number) => {
                    return `${index !== 0 && "-" } ${ph}`;
                  })}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
