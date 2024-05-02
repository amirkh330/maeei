/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { apiGetALL } from "@/api-request";
import { provinceList } from "@/lib/Data";
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
    }
  }, [password]);
  return <CustomTable Data={tableData} />;

  return !isValid ? (
    tableData.length ? (
      <CustomTable Data={tableData} />
    ) : (
      <Flex w={"100%"} justifyContent={"center"} mt={{ md: "220px" }}>
        <Spinner size="lg" emptyColor="gray.200" color="blue.500" />
      </Flex>
    )
  ) : (
    <PassWordConfirm password={password} setPassword={setPassword} />
  );
}

const CustomTable = ({ Data }: any) => {
  return (
    <Box w={"70%"} mt="20" mx="auto" border={1} borderColor={"gray.500"}>
      <Flex
        w="100"
        justifyContent={"space-between"}
        alignItems={"center"}
        my="4"
      >
        <Text fontSize={20}>اطلاعات وارد شده تا این لحظه</Text>
        <Button
          rightIcon={<DownloadIcon />}
          colorScheme="green"
          size={"sx"}
          fontSize={"12"}
          py="2"
          px={"4"}
        >
          دانلود اطلاعات
        </Button>
      </Flex>
      <Divider />
      <TableContainer>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr >
              <Th fontFamily={"YekanBakh"} >نام پزشک</Th>
              <Th fontFamily={"YekanBakh"} >شماره نظام پزشکی</Th>
              <Th fontFamily={"YekanBakh"} >شماره تلفن</Th>
              <Th fontFamily={"YekanBakh"} >شهر</Th>
              <Th fontFamily={"YekanBakh"} >داروخانه</Th>
            </Tr>
          </Thead>
          <Tbody>
           
           
            {Data.map((row: any, index: number) => {
              return (
                <Tr key={index}>
                  <Td fontFamily={"YekanBakh"} >{row.name}</Td>
                  <Td fontFamily={"YekanBakh"} >{row.serialize_number}</Td>
                  <Td fontFamily={"YekanBakh"} >{row.mobile}</Td>
                  <Td fontFamily={"YekanBakh"} >{provinceList.find((i:any)=>i.id === row.province)?.title}</Td>
                  <Td fontFamily={"YekanBakh"} >
                    {row.pharmacy?.map((ph: any, index: number) => {
                      return `${index !== 0 && "-"} ${ph}`;
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

  return (
    <Modal isOpen={true} onClose={() => {}}>
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
