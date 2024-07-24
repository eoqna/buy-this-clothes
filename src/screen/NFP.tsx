import { useEffect } from "react";
import { CommonProps } from "../navigation";

const NFP = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  useEffect(() => {
    navigation("/");
  }, []);

  return (
    <div></div>
  );
};

export default NFP;