import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Neue Montreal';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/neue/Medium.otf') format("opentype");
      }
      /* latin */
      @font-face {
        font-family: 'Neue Montreal';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/neue/Bold.otf') format("opentype");
      }
      /* latin */
      @font-face {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/ibm/Regular.ttf') format("truetype");
      }
      `}
  />
);

export default Fonts;
