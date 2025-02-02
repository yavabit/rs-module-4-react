import { useRef, useState } from "react";
import { useEventListener } from "./useEventListener";

export const useHover = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [hovered, setHovered] = useState(false);

	useEventListener("mouseover", () => setHovered(true), ref)
	useEventListener("mouseout", () => setHovered(false), ref)

	return { hovered, ref };
};
