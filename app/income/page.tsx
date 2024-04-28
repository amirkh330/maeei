import { Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

export default function page  ()  {
  return (
    <Flex bg={"gray.100"}  p={5} direction={"column"} alignItems="center">
      <Text>ورود اطلاعات پزشک</Text>

      <Flex border={"1px solid gray.500"} p={3} direction={"column"}>
        <Flex align={"center"} justifyContent={{ md: "center" }}>
          <Input placeholder="نام دکتر" />
          <Input placeholder="شماره نظام پزشکی" />
        </Flex>
        <Flex align={"center"} justifyContent={{ md: "center" }}>
          <Input placeholder="شماره موبایل" />
          <Input placeholder="شماره مطب" />
        </Flex>
        <Flex align={"center"} justifyContent={{ md: "center" }}>
          <Select placeholder="تخصص" />
        </Flex>
        <Flex align={"center"} justifyContent={{ md: "center" }}>
          <Input placeholder="آدرس" />
        </Flex>
        <Flex>
          <Button>ذخیره اطلاعات</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
