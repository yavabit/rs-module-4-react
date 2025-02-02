import { useEffect, useRef, useState } from "react";

export const useThrottle = (value: unknown, interval = 500) => {
	const [throttledValue, setThrottledValue] = useState(value);
	const lastExecuted = useRef(Date.now());

	useEffect(() => {
		if(Date.now() >= lastExecuted.current + interval) {
			lastExecuted.current = Date.now();
			setThrottledValue(value)
		} else {
			const timer = setTimeout(() => {
				lastExecuted.current = Date.now();
				setThrottledValue(value)
			}, interval)

			return () => clearInterval(timer)
		}
	}, [value, interval])

	return throttledValue
};
