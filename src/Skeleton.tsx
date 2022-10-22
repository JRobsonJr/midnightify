import type { FC } from "react";
import { css, keyframes } from "@emotion/react";
import { Box } from "theme-ui";
import type { ThemeUIStyleObject } from "theme-ui";

const loadingAnimation = keyframes(`
  0%, 100% {
    background-color: #EBEBEF;
  }
  50% {
    background-color: #CBCBCF;
  }
`);

type Dimension = number | string | Array<number | string>;

export const setSkeletonDimensions = (
  height: Dimension,
  width: Dimension
): ThemeUIStyleObject => ({
  width,
  height,
  minWidth: width,
  minHeight: height,
  maxWidth: width,
  maxHeight: height,
});

interface Props {
  count?: number;
  sx?: ThemeUIStyleObject;
  height?: Dimension;
  width?: Dimension;
}

const Skeleton: FC<Props> = ({
  count = 1,
  height = "auto",
  width = "auto",
  sx = {},
}) => {
  const skeleton = [...Array(count)].map((_, index) => (
    <Box
      key={index}
      css={css`
        animation: ${loadingAnimation} 1.5s ease-in-out infinite;
      `}
      sx={{
        ...setSkeletonDimensions(height, width),
        ...sx,
      }}
    />
  ));

  return <>{skeleton}</>;
};

export default Skeleton;
