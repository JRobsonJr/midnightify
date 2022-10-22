import type { FC, PropsWithChildren } from "react";
import { Flex, ThemeUIStyleObject } from "theme-ui";

const outerContainerStyle: ThemeUIStyleObject = {
  backgroundColor: "moonstoneBlue",
  backgroundImage: "linear-gradient(to right, #647B96, #81AAC0)",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
};

const containerStyle: ThemeUIStyleObject = {
  flexDirection: "column",
  alignItems: "center",
  paddingY: "4rem",
  paddingX: "8rem",
  justifyContent: "center",
  gap: "2rem",
  width: "fit-content",
  backgroundColor: "#FEFEFE",
};

const Container: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Flex sx={outerContainerStyle}>
    <Flex sx={containerStyle}>{children}</Flex>
  </Flex>
);

export default Container;
