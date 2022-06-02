import { GridItem } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FullBleed = ({ children }: Props) => {
  return <GridItem colSpan={3}>{children}</GridItem>;
};

export default FullBleed;
