import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleStyled = styled.div`
  --scale: 20px;
  position: relative;
  width: calc(var(--scale, 40px) * 1.5);
  height: var(--scale, 40px);
  background-color: var(--color-800);
  padding: 1px 2px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 24px;
  cursor: pointer;

  &[data-toggle="true"] {
    justify-content: flex-end;
    background-color: var(--color-200);
  }

  &::before {
    content: "";
    width: calc(var(--scale, 40px) - 4px);
    height: calc(var(--scale, 40px) - 4px);
    background-color: var(--color-100);
    border-radius: 50%;
  }
`;

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
