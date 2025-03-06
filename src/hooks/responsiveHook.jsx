import { useEffect, useState } from "react";

export const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 668);
    const [sidebarVisible, setSidebarVisible] = useState(false);
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 668);
      if (window.innerWidth > 668) {
        setSidebarVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return { isMobile, sidebarVisible, setSidebarVisible };
  };