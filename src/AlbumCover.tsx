import { Flex, Grid, Text, ThemeUIStyleObject } from "theme-ui";

import type { FC } from "react";

import Skeleton from "./Skeleton";

type Palette =
  | "moonstoneBlue"
  | "jadeGreen"
  | "bloodMoon"
  | "mahogany"
  | "lavender";

const albumTitleStyle: ThemeUIStyleObject = {
  fontWeight: "bold",
  fontSize: "4.5rem",
  letterSpacing: "-3px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const containerStyle: ThemeUIStyleObject = {
  transform: "scale(.5)",
  transformOrigin: "top left",
  position: "absolute",
};

const gridStyle: ThemeUIStyleObject = {
  height: "960px",
  width: "960px",
  backgroundColor: "album",
  gridTemplateColumns: "2.4fr 7.6fr",
  gridTemplateRows: "2.8fr 7.2fr",
  gridGap: 0,
};

const titleContainer: ThemeUIStyleObject = {
  gridColumn: 2,
  alignItems: "flex-end",
  marginBottom: ".5rem",
};

const tracklistContainer: ThemeUIStyleObject = {
  gridColumn: 1,
  gridRow: 2,
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "1.5rem",
  gap: "1px",
};

const trackTitleStyle: ThemeUIStyleObject = {
  fontSize: "1.25rem",
  fontWeight: 500,
  letterSpacing: "-1px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const imageContainerStyle: ThemeUIStyleObject = {
  gridColumn: 2,
  gridRow: 2,
};

const imageStyle: ThemeUIStyleObject = {
  alignItems: "flex-end",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

interface Props {
  palette?: Palette;
  title?: string;
  trackList?: string[];
  imageUrl?: string;
  loading?: boolean;
}

const AlbumCover: FC<Props> = ({
  loading = false,
  palette = "moonstoneBlue",
  title = "Example Album",
  trackList = [
    "Track One",
    "Track Two",
    "Track Three",
    "Track Four",
    "Track Five",
    "Track Six",
    "Track Seven",
    "Track Eight",
    "Track Nine",
    "Track Ten",
    "Track Eleven",
    "Track Twelve",
    "Track Thirteen",
  ],
  imageUrl = "bebe.png",
}) => (
  <Flex sx={containerStyle}>
    <Grid sx={gridStyle} color={palette}>
      <Flex sx={titleContainer}>
        {loading ? (
          <Skeleton height={87.5} width="75%" />
        ) : (
          <Text variant={palette} sx={albumTitleStyle}>
            {title}
          </Text>
        )}
      </Flex>
      <Flex sx={tracklistContainer}>
        {loading ? (
          <Skeleton count={13} height={24.5} width="100%" />
        ) : (
          trackList.slice(0, 13).map((trackTitle) => (
            <Text variant={palette} sx={trackTitleStyle}>
              {trackTitle}
            </Text>
          ))
        )}
      </Flex>
      <Flex sx={imageContainerStyle}>
        {loading ? (
          <Skeleton height="100%" width="100%" />
        ) : (
          <Flex
            sx={{
              ...imageStyle,
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        )}
      </Flex>
    </Grid>
  </Flex>
);

export default AlbumCover;
