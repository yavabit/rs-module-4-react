import { MutableRefObject, useEffect } from "react";

export const useEventListener = (
	type: string, 
	listener: EventListener, 
	target: MutableRefObject<HTMLElement | null>, 
	...options: AddEventListenerOptions[]
) => {
	useEffect(() => {
		if(target.current) {
			target.current.addEventListener(type, listener, ...options);
		}
		return () => {
			if(target.current) {
				target.current.removeEventListener(type, listener, ...options);
			}
		};
	}, [target, type, listener, options]);
};
