import { Flex, ThemeUIStyleObject } from "theme-ui";
import type { FC } from "react";

import SearchInput from "./SearchInput";
import OptionButton from "./OptionButton";
import { Option } from "../../typings/options";

const buttonGroupStyle: ThemeUIStyleObject = {
  flexDirection: "column",
  gap: ".25rem",
};

interface Props {
  query: string;
  setQuery: (query: string) => void;
  searchData: (option: Option) => void;
  setOption: (option: Option) => void;
  option?: Option;
}

const OptionButtonList: FC<Props> = ({
  option,
  setOption,
  query,
  setQuery,
  searchData,
}) => (
  <Flex sx={buttonGroupStyle}>
    <OptionButton
      option="ALBUM"
      handleClick={setOption}
      selectedOption={option}
    >
      Album version
    </OptionButton>
    <OptionButton
      option="ARTIST"
      handleClick={setOption}
      selectedOption={option}
    >
      Artist version
    </OptionButton>
    {(option === "ALBUM" || option === "ARTIST") && (
      <SearchInput
        query={query}
        setQuery={setQuery}
        option={option}
        searchData={searchData}
      />
    )}
    <OptionButton
      option="TOP_SHORT"
      handleClick={searchData}
      selectedOption={option}
    >
      Top tracks (short term) version
    </OptionButton>
    <OptionButton
      option="TOP_MEDIUM"
      handleClick={searchData}
      selectedOption={option}
    >
      Top tracks (medium term) version
    </OptionButton>
    <OptionButton
      option="TOP_LONG"
      handleClick={searchData}
      selectedOption={option}
    >
      Top tracks (long term) version
    </OptionButton>
  </Flex>
);

export default OptionButtonList;
