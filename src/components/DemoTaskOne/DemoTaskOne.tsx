import { useFetch } from "../../shared/hooks/useFetch";
import { IPost } from "../../shared/types/api";

export const DemoTaskOne = () => {
	const { data, isLoading, error, refetch } = useFetch<IPost>(
		"https://jsonplaceholder.typicode.com/posts"
	);

	const onRefetch = () => {
		refetch({ params: { _limit: 3 } })
	}

	return (
		<div>
			<div>
				<button onClick={onRefetch}> Перезапросить </button>
			</div>
			{isLoading && "Загрузка..."}
			{error && "Произошла ошибка"}
			{data &&
				!isLoading &&
				data.map((item) => <div key={item.id}>{item.title}</div>)}
		</div>
	);
};
