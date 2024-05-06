"use client";

import { useLocaleStorage } from "@/util/useLocaleStorge";
import {
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import logo from "images/maeei bg.png";
import Image from "next/image";

export default function NavBarLayout({ children, data }: any) {
  const { isOpen, onToggle } = useDisclosure();
  const { offlineStoreForm } = useLocaleStorage();
  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue("#213b4e", "#213b4e")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          align={"center"}
          justifyContent={"space-between"}
        >
          <Flex
            // flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            justifyContent={"space-between"}
          >
            <IconButton
              color="white"
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Image width={120} src={logo} alt="logo" />

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
          <Flex position="relative" display={{ base: "flex", md: "none" }}>
            {offlineStoreForm ? (
              <>
                <BellIcon fontSize="22" color="white" />
                <Badge
                  position="absolute"
                  top="10px"
                  left="12px"
                  width="14px"
                  height="14px"
                  display="flex"
                  fontSize="10px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  backgroundColor="red"
                  textColor="white"
                  borderRadius={"50%"}
                >
                  {offlineStoreForm.length}
                </Badge>
              </>
            ) : null}
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      {children}
    </>
  );
}

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "gray.500";
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { offlineStoreForm } = useLocaleStorage();

  return (
    <Stack alignItems="center" direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      {/* {offlineStoreForm.length && (
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                display="flex"
                alignItems="center"
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Text
                  mx="2"
                  bgColor={"white"}
                  color="red"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w={4}
                  h={4}
                  fontSize={12}
                  borderRadius="50%"
                >
                  {offlineStoreForm?.length}
                </Text>
                فرم ثبت نشده
              </Box>
            </PopoverTrigger>
          </Popover>
      )} */}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "/"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "ورود اطلاعات",
    href: "/doctor-register",
  },
  {
    label: "لیست اطلاعات دریافتی",
    href: "/list",
  },
];
