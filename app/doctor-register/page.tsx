/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { deleteAll } from "@/api-request";
import TagGenerator from "@/components/TagGenerator/TagGenerator";
import { expertsList, provinceList } from "@/util/Data";
import { apiCreatePerson } from "@/util/api-request";
import { useLocaleStorage } from "@/util/useLocaleStorge";
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
import { useEffect, useState } from "react";
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

  const { offlineStoreForm, offlineStore_NAME } = useLocaleStorage();
  console.log("offlineStoreForm: ", offlineStoreForm)
  console.log("offlineStore_NAME: ", offlineStore_NAME)

  const onSubmit = async (e: any) => {
    if (navigator.onLine) {
      await submitOnline(e);
    } else {
      setLoading(false);
      reset();
      toast({
        title: "OFFLINE",
        description:
          "شما افلاین هستید، ولی فرم شما ثبت شده  در صورت انلاین شدن فرم ارسال میشود",
        status: "loading",
        duration: 2000,
        isClosable: true,
        position,
      });
      const DB = offlineStoreForm?.length ? offlineStoreForm : [];
      DB.push(e);
      localStorage.setItem(offlineStore_NAME, JSON.stringify(DB));
    }
  };


  useEffect(() => {  
    if (navigator.onLine && offlineStoreForm?.length > 0) {
      const submitOfflineForm = async (formIndex: number) => {
        const formToSubmit = offlineStoreForm[formIndex];
        await apiCreatePerson(formToSubmit)
          .then((data) => {            
            offlineStoreForm.splice(formIndex, 1);
            localStorage.setItem(
              offlineStore_NAME,
              JSON.stringify(offlineStoreForm)
            );
            
            setLoading(false);
            reset(),
              toast({
                description: "افزودن پزشک با موفیت انجام شد",
                status: "success",
                duration: 2000,
                isClosable: true,
                position,
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            toast({
              description: "ارتباط با سرور با خطا مواجه شد",
              status: "error",
              duration: 2000,
              isClosable: true,
              position,
            });
          });
      };

      offlineStoreForm?.length > 0 && submitOfflineForm(0);
    }
  }, [offlineStoreForm]);

  const submitOnline = async (e: any) => {
    setLoading(true);
    apiCreatePerson(e)
      .then((data) => {
        setLoading(false);
        reset(),
          toast({
            description: "افزودن پزشک با موفیت انجام شد",
            status: "success",
            duration: 2000,
            isClosable: true,
            position,
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast({
          description: "ارتباط با سرور با خطا مواجه شد",
          status: "error",
          duration: 2000,
          isClosable: true,
          position,
        });
      });
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Flex
        height={{ base: "92vh", md: "92dvh" }}
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
                نام پزشک
              </Text>
              <FormControl isInvalid={!!errors.name}>
                <Input
                  {...register("name", { required: false })}
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
                  {...register("mobile", { required: false })}
                  _placeholder={{ color: "gray.600" }}
                  textColor={"black"}
                  borderColor={borderColor}
                  placeholder="وارد کنید"
                />
                <FormErrorMessage>این فیلد اجباری است</FormErrorMessage>
              </FormControl>
            </Box>
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
                  {...register("province", { required: false })}
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
                  {...register("expertise", { required: false })}
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
