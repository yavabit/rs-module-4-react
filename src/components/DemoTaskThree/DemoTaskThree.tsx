import { useHover } from "../../shared/hooks/useHover";

export const DemoTaskThree = () => {
	const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
};
