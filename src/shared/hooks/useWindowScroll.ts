import { useCallback, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

interface ScrollPosition {
	x: number;
	y:number;
}

type UseWindowScrollReturn  = [
	ScrollPosition, (position: Partial<ScrollPosition>) => void
]

export const useWindowScroll = (): UseWindowScrollReturn => {

	const [scrollPosition, setScrollPosition] = useState<{x: number, y:number}>({x: 0, y: 0})

	useWindowEvent('scroll', () => {
		setScrollPosition({x: window.scrollX, y: window.scrollY})
	})

	const scrollToPosition = useCallback(({x, y}: Partial<ScrollPosition>) => {
        window.scrollTo({
            top: y !== undefined ? y : window.scrollY,
            left: x !== undefined ? x : window.scrollX,
            behavior: 'smooth'
        });
    }, []);

	return [scrollPosition, scrollToPosition];
};
