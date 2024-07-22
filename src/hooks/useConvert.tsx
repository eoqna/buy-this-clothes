import { useCallback } from "react";

const useConvert = () => {
  const convNumberFormat = useCallback((value: number) => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  return {
    convNumberFormat,
  }
};

export default useConvert;