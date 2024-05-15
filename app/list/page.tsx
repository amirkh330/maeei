/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CustomTable from "@/components/CustomTable/CustomTable";
import { apiGetALL } from "@/util/api-request";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function page() {
  const [tableData, setTableData] = useState([]);
  const toast = useToast();

  const getData = () => {
    return apiGetALL()
      .then((data) => setTableData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors appropriately, e.g., display error message to user
      });
  };

  useEffect(() => {
    getData();
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

  return !isValid ? (
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
