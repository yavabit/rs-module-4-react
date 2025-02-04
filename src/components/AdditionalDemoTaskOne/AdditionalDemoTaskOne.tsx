import { useWindowScroll } from "../../shared/hooks/useWindowScroll";

export const AdditionalDemoTaskOne = () => {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<div style={{position: "fixed", width: "500px"}}>
			<p>
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
		</div>
	);
};
