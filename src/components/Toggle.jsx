import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleStyled = styled.div`
  --scale: 24px;
  position: relative;
  width: calc(var(--scale, 40px) * 1.5);
  height: var(--scale, 40px);
  background-color: var(--color-800);
  padding: 1px;
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
    width: calc(var(--scale, 40px) - 5px);
    height: calc(var(--scale, 40px) - 5px);
    background-color: var(--color-100);
    border-radius: 50%;
  }
`;

export default function Toggle({ toggleFunction }) {
  const [isActive, setIsActive] = useState(false);
  const handleOnclick = () => {
    setIsActive(!isActive);
    toggleFunction((state) => !state);
  };
  return (
    <ToggleStyled
      as={motion.div}
      onClick={handleOnclick}
      data-toggle={isActive && isActive}
    />
  );
}
