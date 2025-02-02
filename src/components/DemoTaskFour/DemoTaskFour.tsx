import { useViewportSize } from "../../shared/hooks/useViewportSize";

export const DemoTaskFour = () => {
	const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};
