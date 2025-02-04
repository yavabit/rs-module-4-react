import { useCallback, useReducer } from "react";

type ToggleAction = {
    payload?: string;
    arr: string[];
};

type UseToggle = [string, (payload?: string) => void]

const reducer = (state: string, action: ToggleAction) => {
	if(action.payload) {
		const elem = action.arr.find(item => item === action.payload)
		return elem ?? action.arr[0]
		
	} else {
		const index = action.arr.indexOf(state)
		return index < action.arr.length - 1 ? action.arr[index + 1] : action.arr[0]
	}
}

export const useToggle = (initialState: string[]): UseToggle => {
	const [state, dispatch] = useReducer(reducer, initialState[0]);

	const toggle = useCallback((payload?: string) => {
		dispatch({
			payload: payload,
			arr: initialState
		});
	}, [initialState]);

	return [state, toggle];
};
