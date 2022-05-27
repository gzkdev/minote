import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToggleStyled } from "../styled";

export default function Toggle({ toggleFunction }) {
  const [isActive, setIsActive] = useState(() => {
    return JSON.parse(localStorage.getItem("toggle")) || false;
  });

  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(isActive));
  }, [isActive]);

  const handleOnclick = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
    toggleFunction((state) => !state);
  };
  return (
    <ToggleStyled
      as={motion.div}
      transition={{ duration: 1 }}
      layout
      onClick={handleOnclick}
      data-toggle={isActive && isActive}
    />
  );
}
