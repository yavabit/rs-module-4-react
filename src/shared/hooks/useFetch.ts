import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { apiParams } from "../types/api";

export const useFetch = <T>(url: string) => {

	const [data, setData] = useState<T[] | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const getParamsStringify = (params?: apiParams) => {
		if(!params) {
			return ""
		}
		if(params && params._limit) {
			return `?_limit=${params._limit}`
		}
	}

	const sendRequest = useCallback(({params}: {params?: apiParams} = {}) => {
		setIsLoading(true)
		setData(null);
		setError(null);

		axios.get(url + getParamsStringify(params))
			.then(res => {
				if(res.data) {
					setData(res.data);
				}
			})
			.catch(err => {
				setError(err.message)
			})
			.finally(() => setIsLoading(false))
	}, [url])

	const refetch = sendRequest

	useEffect(() => {
		sendRequest()
	}, [url])

	return { data, isLoading, error, refetch };
};
