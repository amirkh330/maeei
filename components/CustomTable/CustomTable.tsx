/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { deleteAll } from "@/api-request";
import { expertsList, provinceList } from "@/util/Data";
import Link from "next/link"
import { deleteItem } from "@/util/api-request";
import { renderExcel } from "@/util/render-exel";
import { DeleteIcon, DownloadIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const renderDeleteAction = (id:any) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isDeleting, setIsDeleting] = useState(false); // Example hook

  const handleDelete = async(id: string) => {
    setIsDeleting(true); // Set loading state or handle deletion logic here
    await deleteItem(id).then(() => {
      setIsDeleting(false);
      onClose();
      
    });
  };

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Tooltip label="حذف">
          <DeleteIcon onClick={onToggle} color="red" cursor="pointer" />
        </Tooltip>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverBody>آیا از حذف این آیتم مطمئن هستید?</PopoverBody>
        <PopoverFooter display="flex" justifyContent="flex-start">
          <ButtonGroup size="sm">
            <Button
              fontSize="12"
              fontWeight="thin"
              size="sm"
              variant="outline"
              onClick={onClose}
            >
              لغو
            </Button>
            <Button
              fontSize="12"
              fontWeight="thin"
              size="sm"
              colorScheme="red"
              isLoading={isDeleting}
              onClick={() => handleDelete(id)}
            >
              حذف
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

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
          <Button
              fontWeight="thin"
              fontSize={{ base: 8, md: 10 }}
              py={{ base: 1, md: 2 }}
              px={{ base: 2, md: 4 }}
              size={"sx"}
              onClick={deleteAll}
            >
              Rest
            </Button>
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
                    <Flex alignItems="center" gap={"2"}>
                      <Tooltip label="ویرایش" >
                        <Link href={`/doctor-register?id=${row.id}`} >
                        <EditIcon color="green" cursor="pointer" />
                        </Link>
                      </Tooltip>
                      {renderDeleteAction(row.id)}
                    </Flex>
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

export default CustomTable;
