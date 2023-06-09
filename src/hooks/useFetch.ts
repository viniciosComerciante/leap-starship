import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url: string) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		setData(null);
		setError(null);
		const source = axios.CancelToken.source();
		axios
			.get(url, { cancelToken: source.token })
			.then((res) => {
				setLoading(false);
				setData(res.data);
			})
			.catch((err) => {
				setLoading(false);
				setError('An error occurred. Awkward..');
			});
		return () => {
			source.cancel();
		};
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
