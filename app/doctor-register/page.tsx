/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { apiCreatePerson, deleteItem } from "@/api-request";
import TagGenerator from "@/components/TagGenerator/TagGenerator";
import { expertsList, provinceList } from "@/lib/Data";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Text,
  Textarea,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const borderColor = "gray.500";
  const titleColor = "gray.700";
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const position = useBreakpointValue({
    base: "top", // Default for smaller screens (mobile)
    md: "top", // Position on bottom-right for larger screens
  }) as any;
  const onSubmit = async (e: any) => {
    setLoading(true);
    apiCreatePerson(e)
      .then((data) => {
        setLoading(false);
        reset(),
          toast({
            description: "افزودن پزشک با موفیت انجام شد",
            status: "success",
            duration: 9000,
            isClosable: true,
            position,
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log("====================================");
        console.log(err);
        console.log("====================================");
        toast({
          description: "اتباط با سرور به خطا مواجه شد",
          status: "error",
          duration: 9000,
          isClosable: true,
          position,
        });
      });
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      
      {/* <Button onClick={deleteItem}>Rest</Button> */}
      <Flex
        height={{ base: "90vh", md: "89dvh" }}
        bg={"gray.100"}
        p={{ base: 0, md: 5 }}
        direction={"column"}
        alignItems="center"
      >
        <Flex
          p={3}
          mt={{ md: 2, base: 2 }}
          borderRadius={"4%"}
          border={"1px solid"}
          borderColor={"gray.300"}
          width={{ base: "90%", md: "60%" }}
          direction={"column"}
        >
          <Flex justify={"center"} mb={{ md: 8, base: 2 }}>
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
              <FormControl isInvalid={!!errors.name}>
                <Input
                  {...register("name", { required: true })}
                  _placeholder={{ color: "gray.600" }}
                  textColor={"black"}
                  borderColor={borderColor}
                  placeholder="وارد کنید"
                />
                  <FormErrorMessage>این فیلد اجباری است</FormErrorMessage>
                
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
              <FormControl isInvalid={!!errors.mobile}>
                <Input
                  {...register("mobile", { required: true })}
                  _placeholder={{ color: "gray.600" }}
                  textColor={"black"}
                  borderColor={borderColor}
                  placeholder="وارد کنید"
                />
                  <FormErrorMessage>این فیلد اجباری است</FormErrorMessage>
              </FormControl>
            </Box>

            {/* <Box m={2} width={"100%"}>
              <Text
                fontSize={12}
                fontWeight={"light"}
                color={titleColor}
                mb="2"
              >
                داروخانه لینک
              </Text>
              <FormControl>
                <TagGenerator control={control} name="pharmacy" />
              </FormControl>
            </Box> */}
          </Flex>

          <Flex mb="2" align={"center"} justifyContent={{ md: "center" }}>
            <Box m={2} width={"100%"}>
            <FormControl isInvalid={!!errors.province}>
              <Text
                fontSize={12}
                fontWeight={"light"}
                color={titleColor}
                mb="2"
              >
                استان
              </Text>
              <Select
                {...register("province", { required: true })}
                _placeholder={{ color: "gray.600" }}
                dir="rtl"
                borderColor={borderColor}
                placeholder="انتخاب کنید"
              >
                {provinceList.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.title}
                  </option>
                ))}
              </Select>
                <FormErrorMessage>این فیلد اجباری است</FormErrorMessage>
              </FormControl>
            </Box>
            <Box m={2} width={"100%"}>
              
              <Text fontSize={12} fontWeight={300} color={titleColor} mb="2">
                تخصص
              </Text>
              <FormControl isInvalid={!!errors.expertise}>
                <Select
                  {...register("expertise", { required: true })}
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
                  <FormErrorMessage>این فیلد اجباری است</FormErrorMessage>
              </FormControl>
            </Box>
          </Flex>

          <Flex mb="2" align={"center"} justifyContent={{ md: "center" }}>
            <Box m={2} width={"100%"}>
              <Text
                fontSize={12}
                fontWeight={"light"}
                color={titleColor}
                mb="2"
              >
                داروخانه لینک
              </Text>
              <FormControl>
                <TagGenerator control={control} name="pharmacy" />
              </FormControl>
            </Box>
          </Flex>

          <Flex
            align={"center"}
            justifyContent={{ md: "center" }}
            flexWrap={{ md: "nowrap", base: "wrap" }}
          >
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
            <Button
              isLoading={loading}
              type="submit"
              size="sm"
              colorScheme="blue"
            >
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
