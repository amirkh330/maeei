import useUserAgent from "@/util/useUserAgent";
import { Flex } from "@chakra-ui/react";
import { getCookie, setCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AddToMobileChrome = dynamic(() => import("./AddToMobileChrome"));


const COOKIE_NAME = "addToHomeScreenPrompt";

export default function AddToHomeScreen() {
  const { isMobile } = useUserAgent();
  const [visible, setVisible] = useState(false);

  const closePrompt = () => {
    setVisible(false);
  };

  useEffect(() => {
    const addToHomeScreenPromptCookie = getCookie(COOKIE_NAME);
    !addToHomeScreenPromptCookie  && setVisible(true);
  }, [isMobile]);

  const handleInstalled = () => {
    setCookie(COOKIE_NAME, true);
    setVisible(false);
  };

  return (
    <>
      {isMobile && (
      <AddToMobileChrome
        visible={visible}
        closePrompt={closePrompt}
        handleInstalled={handleInstalled}
      />
      )} 
    </>
  );
}
