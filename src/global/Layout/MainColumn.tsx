import { GridItem } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainColumn = ({ children }: Props) => {
  return (
    <>
      <GridItem gridColumn={1} />
      <GridItem gridColumn={2}>{children}</GridItem>
      <GridItem gridColumn={3} />
    </>
  );
};

export default MainColumn;
