"use client";

import { useCallback, useEffect, useState } from "react";
import { TbArrowNarrowUp } from "react-icons/tb";
import { Button } from "../Button";

export const BackToTop = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-20">
      <Button onClick={scrollToTop} className="shadow-lg shadow-rose/20">
        <TbArrowNarrowUp size={20} />
      </Button>
    </div>
  );
};
