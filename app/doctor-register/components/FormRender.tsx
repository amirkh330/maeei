"use client";
import TagGenerator from "@/components/TagGenerator/TagGenerator";
import { doctorsList, expertsList, provinceList } from "@/util/Data";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Spinner,
  Text,
  Textarea,
  theme,
} from "@chakra-ui/react";
import usePage from "../page.biz";
import CreatableSelect from "react-select/creatable";
import { useController } from "react-hook-form";
import { useEffect } from "react";

export const FormRender = () => {
  const borderColor = "gray.500";
  const titleColor = "gray.700";
  const {
    loading,
    onSubmit,
    handleSubmit,
    errors,
    register,
    control,
    editPerson,
    id,
    getValues,
    setValue,
  } = usePage();
  // const { field, fieldState, formState } = useController({control, "family"});
  const {
    field: { value, onChange },
    fieldState,
    formState,
  } = useController({
    name: "family", // Use "name" instead of the string "family"
    control,
  });
  
  const familyValue = getValues("family"); // "test-input"
  
  

  const Loading = () => (
    <Flex width="w-full" justifyContent="center" mt="10">
      <Spinner size="lg" emptyColor="gray.200" color="blue.500" />
    </Flex>
  );

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: theme.colors.gray[100], // Use Chakra UI theme colors (optional)
      // border: "1px solid",
      borderColor: theme.colors.gray[500], // Use Chakra UI theme colors (optional)
      borderRadius: "6px",
      fontSize: "12px",
      height: "32px",
      minHeight: "32px",
      // padding: "10px",
      ":hover": {
        borderColor: theme.colors.gray[400], // Use Chakra UI theme colors (optional)
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "0 8px",
      bottom: "3px",
    }),
    Input: (provided: any) => ({
      color: theme.colors.gray[100],
      background: "red",
    }),
    // Override other styles like dropdownIndicator, menu, etc.
  };

  const formRender = () => (
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
                نام
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
                نام خانوادگی
              </Text>
              <FormControl isInvalid={!!errors.family}>
                <CreatableSelect
                  onChange={({ value }: any) => {
                    return  setValue("family", value);
                    // return register("family", {
                    //   onChange: () => value
                    // });
                  }}
                  value={{ label: familyValue, value: familyValue }}
                  placeholder="وارد کنید"
                  styles={customStyles}
                  options={doctorsList.map((i: any) => ({
                    ...i,
                    value: i.label,
                  }))}
                />
                <FormErrorMessage>این فیلد اجباری است</FormErrorMessage>
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

  return id ? (!editPerson ? Loading() : formRender()) : formRender();
};
function getValues(arg0: string) {
  throw new Error("Function not implemented.");
}
