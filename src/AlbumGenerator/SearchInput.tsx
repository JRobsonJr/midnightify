import { Button, Flex, Input, ThemeUIStyleObject } from "theme-ui";
import { Option } from "../../typings/options";

import type { FC } from "react";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  searchData: (option: Option) => void;
  option?: Option;
}

const searchInputStyle: ThemeUIStyleObject = {
  justifyContent: "space-between",
  gap: ".25rem",
};

const SearchInput: FC<Props> = ({ query, setQuery, searchData, option }) => (
  <Flex sx={searchInputStyle}>
    <Input
      placeholder="Search"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
    <Button onClick={() => searchData(option as Option)}>Search</Button>
  </Flex>
);

export default SearchInput;
