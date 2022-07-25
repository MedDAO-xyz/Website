import React, { useRef } from "react";
import MainColumn from "../../global/Layout/MainColumn";
import { DesktopTabletView } from "./DesktopTabletView";
import { useIsMobile } from "./hooks";
import { MobileView } from "./MobileView";

export const WhyMedDAO = () => {
  const isMobile = useIsMobile();
  const whySection = useRef<Element>();

  return (
    <MainColumn id="why">
      {isMobile && <MobileView />}
      {!isMobile && <DesktopTabletView />}
    </MainColumn>
  );
};
