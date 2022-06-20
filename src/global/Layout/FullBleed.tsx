import { GridItem } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  id?: string;
};

const obj = {
  thing: {
    second: "here",
  },
};

const FullBleed = ({ children, id }: Props) => {
  return (
    <GridItem colSpan={3} id={id}>
      {children}
    </GridItem>
  );
};

export default FullBleed;
