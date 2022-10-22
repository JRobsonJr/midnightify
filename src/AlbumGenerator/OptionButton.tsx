import { FC, PropsWithChildren } from "react";
import { Button } from "theme-ui";

import { Option } from "../../typings/options";

interface OptionButtonProps extends PropsWithChildren {
  option: Option;
  handleClick: (option: Option) => void;
  selectedOption?: Option;
}

const OptionButton: FC<OptionButtonProps> = ({
  option,
  handleClick,
  children,
  selectedOption,
}) => (
  <Button
    sx={{
      width: "100%",
      backgroundColor: selectedOption === option ? "black" : "moonstoneBlue",
    }}
    onClick={() => handleClick(option)}
  >
    {children}
  </Button>
);

export default OptionButton;
