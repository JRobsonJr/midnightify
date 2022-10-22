import { FC, PropsWithChildren } from "react";
import { Flex, Link, Text, ThemeUIStyleObject } from "theme-ui";

import AlbumCover from "./AlbumCover";

const buildAuthUrl = () => {
  const params = {
    client_id: "client_id",
    response_type: "token",
    redirect_uri: "http://localhost:3000/auth",
    scope: "user-top-read",
  };
  return `https://accounts.spotify.com/authorize?${encodeQueryParams(params)}`;
};

const encodeQueryParams = (params: any) =>
  Object.keys(params)
    .map(
      (param) =>
        `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`
    )
    .join("&");

const pageTitleStyle: ThemeUIStyleObject = {
  fontWeight: "bold",
  fontSize: "4.5rem",
  letterSpacing: "-3px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const descriptionStyle: ThemeUIStyleObject = { fontSize: "1.5rem" };

const footerStyle: ThemeUIStyleObject = {
  borderTop: "2px solid lavender",
  paddingTop: "2rem",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const footerTextStyle: ThemeUIStyleObject = {
  ...pageTitleStyle,
  fontSize: "1.5rem",
  letterSpacing: "-1px",
};

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

const coverContainerStyle: ThemeUIStyleObject = {
  height: "480px",
  width: "480px",
  marginY: "1.5rem",
};

const Container: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Flex sx={outerContainerStyle}>
    <Flex sx={containerStyle}>{children}</Flex>
  </Flex>
);

const App = () => (
  <Container>
    <Text variant="moonstoneBlue" sx={pageTitleStyle}>
      Midnightify
    </Text>
    <Text sx={descriptionStyle}>
      Generate your own Midnights-themed album cover!
    </Text>
    <Flex sx={{ gap: "1rem" }}>
      <Link href={buildAuthUrl()} variant="button">
        Login with Spotify
      </Link>
      <Link
        target="_blank"
        href="https://taylor.lnk.to/taylorswiftmidnights"
        variant="button"
      >
        Stream Midnights
      </Link>
    </Flex>
    <Flex sx={coverContainerStyle}>
      <AlbumCover palette="moonstoneBlue" />
    </Flex>
    <Flex sx={footerStyle}>
      <Text variant="lavender" sx={footerTextStyle}>
        Created by Robson Junior
      </Text>
    </Flex>
  </Container>
);

export default App;
