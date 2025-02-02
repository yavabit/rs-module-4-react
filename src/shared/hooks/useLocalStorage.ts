import { useState } from "react";
import { LocalStorageReturnValue, LocalStorageSetValue, UseLocalStorageType } from "../types/localStorage";

const getValueStorage = (key: string): LocalStorageReturnValue => {
	const savedValue = localStorage.getItem(key)

	if (savedValue) {
		return JSON.parse(savedValue)
	} else {
		return null
	}
}

export const useLocalStorage: UseLocalStorageType = (key: string) => {
	const [value, setValue] = useState<LocalStorageReturnValue>(() => getValueStorage(key))

	const setItem = (value: LocalStorageSetValue) => {
		localStorage.setItem(key, JSON.stringify(value));
		setValue(value);
	}

	const removeItem = () => {
		localStorage.removeItem(key);
		setValue(null);
	}

	return [
		value,
		{
			setItem,
			removeItem,
		},
	];
};
