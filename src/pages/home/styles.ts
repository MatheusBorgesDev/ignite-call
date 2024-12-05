import { styled, Heading, Text } from "@ignite-ui/react";

export const Render = styled("div", {
  marginLeft: "auto",
  padding: "0 0 0 $10",

  maxWidth: "calc(100vw - (100vw - 1160px) / 2)",
  height: "100vh",

  display: "flex",
  alignItems: "center",
  gap: "$20",
});

export const Hero = styled("div", {
  maxWidth: "480px",

  [`> ${Heading}`]: {
    "@media(max-width: 600px)": {
      fontSize: "$6xl",
    },
  },

  [`> ${Text}`]: {
    marginTop: "$2",
    color: "$gray200",
  },

  "@media(max-width: 600px)": {
    padding: "0 $10 0 0",
  },
});

export const Preview = styled("div", {
  paddingRight: "$8",
  overflow: "hidden",

  "@media(max-width: 600px)": {
    display: "none",
  },
});
