import MainColumn from "../../global/Layout/MainColumn";
import { DesktopTabletView } from "./DesktopTabletView";
import { useIsMobile } from "./hooks";
import { MobileView } from "./MobileView";

export const WhyMedDAO = () => {
  const isMobile = useIsMobile();
  return (
    <MainColumn>
      {isMobile && <MobileView />}
      {!isMobile && <DesktopTabletView />}
    </MainColumn>
  );
};
