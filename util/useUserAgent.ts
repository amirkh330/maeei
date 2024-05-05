import React, { useEffect, useState } from "react";

export default function useUserAgent() {
  
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (window) {
      const userAgentString = window.navigator.userAgent;

      const isIOS = userAgentString.match(/iPhone|iPad|iPod/i);
      const isAndroid = userAgentString.match(/Android/i);

      const isMobile = isIOS || isAndroid;
      setIsMobile(!!isMobile);
    }
  }, []);

  return { isMobile };
}
