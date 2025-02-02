import { useEffect } from "react";

export const useWindowEvent = (type: string, listener: EventListener, options?: AddEventListenerOptions) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener(type, listener, options);
			return () => window.removeEventListener(type, listener, options);
		}
	}, [type, listener]);
};
