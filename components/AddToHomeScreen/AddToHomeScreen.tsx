import useUserAgent from "@/util/useUserAgent";
import { getCookie, setCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AddToMobileChrome = dynamic(() => import("./AddToMobileChrome"));


const COOKIE_NAME = "addToHomeScreenPrompt";
const COOKIE_EXPIRE_DAYS = 30; // Expire cookie in 30 days
export default function AddToHomeScreen() {
  const { isMobile } = useUserAgent();
  const [visible, setVisible] = useState(false);

  const closePrompt = () => {
    setVisible(false);
    setCookie(COOKIE_NAME, true, {
      expires: new Date(Date.now() + COOKIE_EXPIRE_DAYS * 24 * 60 * 60 * 1000), // Set expiry in milliseconds
    });
  };

  useEffect(() => {
    const addToHomeScreenPromptCookie = getCookie(COOKIE_NAME);
    if (!addToHomeScreenPromptCookie || isCookieExpired(addToHomeScreenPromptCookie)) {
      setVisible(true);
    }
  }, [isMobile]);

  const handleInstalled = () => {
    setCookie(COOKIE_NAME, true);
    setVisible(false);
  };

  const isCookieExpired = (cookieValue:any) => {
    // Check if cookie expiry is present and valid
    const expiryString = cookieValue?.split(';')?.find((part:any) => part.trim().startsWith('expires='));
    if (!expiryString) return false; // No expiry specified, assume not expired

    const expiryDate = new Date(expiryString.split('=')[1]);
    return expiryDate < new Date(); // Check if expiry date has passed
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
