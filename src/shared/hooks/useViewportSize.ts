import { useState } from "react";
import { useThrottle } from "./useThrottle";
import { useWindowEvent } from "./useWindowEvent";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

export const useViewportSize = () => {
	const [windowDimensions, setWindowDimensions] = useState(() => getWindowDimensions());

	useWindowEvent("resize", () => setWindowDimensions(getWindowDimensions()))
	const throttleWindowDimensions = useThrottle(windowDimensions, 1000);

	return throttleWindowDimensions as {width: number; height: number};
};
