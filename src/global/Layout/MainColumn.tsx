import { GridItem } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  id?: string;
};

const MainColumn = ({ children, id }: Props) => {
  return (
    <>
      <GridItem gridColumn={1} />
      <GridItem gridColumn={2} id={id}>
        {children}
      </GridItem>
      <GridItem gridColumn={3} />
    </>
  );
};

export default MainColumn;
