"use client";
import AddToHomeScreen from "@/components/AddToHomeScreen/AddToHomeScreen";
import useUserAgent from "@/util/useUserAgent";
import { Box, Flex, Text } from "@chakra-ui/react";
import logo from "images/maeei bg.png";
import Image from "next/image";

export default function Home() {

  
  return (
    <Flex
      direction="column"
      height={{ base: "92dvh", md: "92dvh" }}
      backgroundColor={"#335063 "}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <div className="">
        <Image src={logo} alt="logo" />
      </div>
      <Box w={"60%"}>
        <Text fontSize={12} color="white" textAlign={"center"}>
          تمام حقوق این محصول، از جمله اطلاعات و ویژگی های آن، متعلق به خانوم
          نیکو‌کار است.
        </Text>
      </Box>
      <AddToHomeScreen />
    </Flex>
  );
}
