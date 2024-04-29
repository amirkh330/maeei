/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const borderColor = "gray.500";
  const titleColor = "gray.700";
  const expertsList = [
    { id: 1, title: "انکولوژی" },
    { id: 2, title: "هماتولوژی" },
    { id: 3, title: "جراحی سرطان" },
    { id: 4, title: "کاردیولوژی" },
    { id: 5, title: "جراحی قلب" },
    { id: 6, title: "پزشک قلب اطفال" },
    { id: 7, title: "تولید مثل و ناباروری" },
    { id: 8, title: "آندرولوژی" },
    { id: 9, title: "جراحی زنان" },
    { id: 10, title: "نفرولوژی" },
    { id: 11, title: "پزشکی فشار خون بالا" },
    { id: 12, title: "پیوند کلیه" },
    { id: 13, title: "غدد اطفال" },
    { id: 14, title: "غدد درون ریز" },
    { id: 15, title: "ژنتیک" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <form style={{width:"100%"}} onSubmit={handleSubmit(onSubmit)}>
      <Flex
        height={{ base: "90vh", md: "89dvh" }}
        bg={"gray.100"}
        p={{ base: 0, md: 5 }}
        direction={"column"}
        alignItems="center"
      >
        <Flex
          p={3}
          mt={{ md: 2, base: 5 }}
          borderRadius={"4%"}
          border={"1px solid"}
          borderColor={"gray.300"}
          width={{ base: "90%", md: "60%" }}
          direction={"column"}
        >
          <Flex justify={"center"} mb="8">
            <Text fontSize={20} fontWeight={500}>
              ورود اطلاعات پزشک
            </Text>
          </Flex>

          <Flex
            mb="2"
            align={"center"}
            justifyContent={{ md: "space-between" }}
            width={"full"}
            flexWrap={{ md: "nowrap", base: "wrap" }}
          >
            <Box m={2} width={"100%"}>
              <Text
                fontSize={12}
                fontWeight={"light"}
                color={titleColor}
                mb="2"
              >
                نام دکتر
              </Text>
              <FormControl>
                <Input
                  {...register("name")}
                  _placeholder={{ color: "gray.600" }}
                  textColor={"black"}
                  borderColor={borderColor}
                  placeholder="وارد کنید"
                />
              </FormControl>
            </Box>
            <Box m={2} width={"100%"}>
              <Text
                fontSize={12}
                fontWeight={"light"}
                color={titleColor}
                mb="2"
              >
                شماره نظام پزشکی
              </Text>
              <FormControl>
                <Input
                  {...register("serialize_number")}
                  _placeholder={{ color: "gray.600" }}
                  textColor={"black"}
                  borderColor={borderColor}
                  placeholder="وارد کنید"
                />
              </FormControl>
            </Box>
          </Flex>

          <Flex
            mb="2"
            align={"center"}
            width={"full"}
            justifyContent={{ md: "space-between" }}
            flexWrap={{ md: "nowrap", base: "wrap" }}
          >
            <Box m={2} width={"100%"}>
              <Text
                fontSize={12}
                fontWeight={"light"}
                color={titleColor}
                mb="2"
              >
                شماره موبایل
              </Text>
              <FormControl>
                <Input
                  {...register("mobile")}
                  _placeholder={{ color: "gray.600" }}
                  textColor={"black"}
                  borderColor={borderColor}
                  placeholder="وارد کنید"
                />
              </FormControl>
            </Box>
            <Box m={2} width={"100%"}>
              <Text
                fontSize={12}
                fontWeight={"light"}
                color={titleColor}
                mb="2"
              >
                شماره مطب
              </Text>
              <FormControl>
                <Input
                  {...register("office_number")}
                  _placeholder={{ color: "gray.600" }}
                  textColor={"black"}
                  borderColor={borderColor}
                  placeholder="وارد کنید"
                />
              </FormControl>
            </Box>
          </Flex>

          <Flex mb="2" align={"center"} justifyContent={{ md: "center" }}>
            <Box m={2} width={"100%"}>
              <Text fontSize={12} fontWeight={300} color={titleColor} mb="2">
                تخصص
              </Text>
              <FormControl>
                <Select
                  {...register("expertise")}
                  _placeholder={{ color: "gray.600" }}
                  dir="rtl"
                  borderColor={borderColor}
                  placeholder="انتخاب کنید"
                >
                  {expertsList.map((ex) => (
                    <option key={ex.id} value={ex.id}>
                      {ex.title}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Flex>

          <Flex align={"center"} justifyContent={{ md: "center" }}>
            <Box m={2} width={"100%"}>
              <Text fontSize={12} fontWeight={300} color={titleColor} mb="2">
                آدرس
              </Text>
              <FormControl>
                <Textarea
                  {...register("address")}
                  fontSize="12px"
                  _placeholder={{ color: "gray.600" }}
                  borderColor={borderColor}
                  placeholder=" آدرس را وارد کنید"
                />
              </FormControl>
            </Box>
          </Flex>

          <Flex justify={"flex-end"} mx="2" mt={{ base: 5, md: 10 }}>
            <Button type="submit" size="sm" colorScheme="blue">
              <Text fontSize={12} fontWeight={300}>
                ذخیره اطلاعات
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
}
