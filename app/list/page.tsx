/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { deleteAll } from "@/api-request";
import { apiGetALL } from "@/util/api-request";
import { expertsList, provinceList } from "@/util/Data";
import { renderExcel } from "@/util/render-exel";
import { DownloadIcon } from "@chakra-ui/icons";
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
  Modal,
  PinInput,
  PinInputField,
  HStack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useToast,
  Box,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const [tableData, setTableData] = useState([]);
  const toast = useToast();
  useEffect(() => {
    apiGetALL()
      .then((data) => setTableData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors appropriately, e.g., display error message to user
      });
  }, []);

  const [isValid, setIsValid] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (password.length == 4) {
      if (password == "1373") {
        toast({
          title: "با موفقیت وارد شدید",
          description: "لطفا چند لحظه صبر کنید",
          status: "success",
          duration: 2500,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => setIsValid(true), 1500);
      } else {
        toast({
          description: "رمز ورود اشتباه است",
          status: "error",
          duration: 2500,
          isClosable: true,
          position: "top",
        });
      }
    }
  }, [password]);

  return isValid ? (
    tableData.length ? (
      <CustomTable Data={tableData} />
    ) : (
      <Flex
        w={"100%"}
        justifyContent={"center"}
        mt={{ base: "200px", md: "220px" }}
      >
        <Spinner size="lg" emptyColor="gray.200" color="blue.500" />
      </Flex>
    )
  ) : (
    <PassWordConfirm password={password} setPassword={setPassword} />
  );
}

const CustomTable = ({ Data }: any) => {
  const fontSizeHeader = 12;
  const fontSizeTitle = 12;
  return (
    <Box
      w={{ base: "100%", md: "70%" }}
      mt="20"
      mx="auto"
      border={1}
      borderColor={"gray.500"}
    >
      <Flex
        w="100"
        justifyContent={"space-between"}
        alignItems={"center"}
        my="4"
      >
        <Text fontSize={{ base: 14, md: 20 }}>
          اطلاعات وارد شده تا این لحظه
        </Text>
        <Flex margin={"mx-1"} gap={2}>
          {/* <Button
            fontWeight="thin"
            fontSize={{ base: 8, md: 10 }}
            py={{ base: 1, md: 2 }}
            px={{ base: 2, md: 4 }}
            size={"sx"}
            onClick={deleteAll}
          >
            Rest
          </Button> */}
          <Button
            onClick={() => renderExcel(Data)}
            rightIcon={<DownloadIcon />}
            colorScheme="green"
            fontWeight="medium"
            size={"sx"}
            fontSize={{ base: 10, md: 12 }}
            py={{ base: 1, md: 2 }}
            px={{ base: 2, md: 4 }}
          >
            دانلود اطلاعات
          </Button>
        </Flex>
      </Flex>
      <Divider />
      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th fontSize={fontSizeHeader} fontFamily={"YekanBakh"}></Th>
              <Th fontSize={fontSizeHeader} fontFamily={"YekanBakh"}>
                نام
              </Th>
              <Th fontSize={fontSizeHeader} fontFamily={"YekanBakh"}>
                نام خانوادگی
              </Th>
              <Th fontSize={fontSizeHeader} fontFamily={"YekanBakh"}>
                شماره تلفن
              </Th>
              <Th fontSize={fontSizeHeader} fontFamily={"YekanBakh"}>
                شهر
              </Th>
              <Th fontSize={fontSizeHeader} fontFamily={"YekanBakh"}>
                تخصص
              </Th>
              <Th fontSize={fontSizeHeader} fontFamily={"YekanBakh"}>
                داروخانه
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Data.map((row: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td fontSize={fontSizeTitle} fontFamily={"YekanBakh"}>
                    {index + 1}
                  </Td>
                  <Td fontSize={fontSizeTitle} fontFamily={"YekanBakh"}>
                    {row.name}
                  </Td>
                  <Td fontSize={fontSizeTitle} fontFamily={"YekanBakh"}>
                    {row.family}
                  </Td>
                  <Td fontSize={fontSizeTitle} fontFamily={"YekanBakh"}>
                    {row.mobile}
                  </Td>
                  <Td fontSize={fontSizeTitle} fontFamily={"YekanBakh"}>
                    {provinceList.find((i: any) => i.id == row.province)?.title}
                  </Td>
                  <Td fontSize={fontSizeTitle} fontFamily={"YekanBakh"}>
                    {expertsList.find((i: any) => i.id == row.expertise)?.title}
                  </Td>
                  <Td fontSize={fontSizeTitle} fontFamily={"YekanBakh"}>
                    {row.pharmacy?.map((ph: any, index: number) => {
                      return `${index !== 0 ? "-" : ""} ${ph}`;
                    })}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const PassWordConfirm = ({ password, setPassword }: any) => {
  const handlePinChange = (index: any, value: any) => {
    setPassword(
      (prevPin: any) =>
        prevPin.slice(0, index) + value + prevPin.slice(index + 1)
    );
  };
  const router = useRouter();
  return (
    <Modal isOpen={true} onClose={() => router.push("/")}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Text fontSize={12}>برای مشاهده نتایج لطفا وارد شوید</Text>
        </ModalHeader>
        <ModalBody>
          <Flex dir="ltr" w={"100%"} justifyContent={"space-around"} my="20">
            <PinInput>
              <PinInputField
                value={password.slice(0, 1)}
                onChange={(e) => handlePinChange(0, e.target.value)}
              />
              <PinInputField
                value={password.slice(1, 2)}
                onChange={(e) => handlePinChange(1, e.target.value)}
              />
              <PinInputField
                value={password.slice(2, 3)}
                onChange={(e) => handlePinChange(2, e.target.value)}
              />
              <PinInputField
                value={password.slice(3, 4)}
                onChange={(e) => handlePinChange(3, e.target.value)}
              />
            </PinInput>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
