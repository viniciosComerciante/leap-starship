import React, { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useDebounce } from '../hooks/useDebounce';

interface ISearchContext {
	setSearchText: React.Dispatch<React.SetStateAction<string>>;
	starships: StarshipType[];
	isLoading: boolean;
}

type StarshipType = {
	name: string;
	model: string;
	length: string;
};

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

function SearchProvider({ children }: { children: React.ReactNode }) {
	const [searchText, setSearchText] = useState('');
	const [starships, setStarships] = useState<StarshipType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const deboundedFunction = useDebounce(fetchStarships, 500);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		deboundedFunction();
	}, [searchText]);

	async function fetchStarships() {
		const url = searchText
			? `https://swapi.dev/api/starships/?search=${searchText}`
			: `https://swapi.dev/api/starships`;
		try {
			setIsLoading(true);
			const response = await axios.get<{ results: StarshipType[] }>(url);
			const { data } = response;
			const dataParsed = data.results.map((st: StarshipType) => {
				return {
					name: st.name,
					model: st.model,
					length: parseFloat(st.length).toFixed(3),
				};
			});
			if (dataParsed.length < 0) return;
			setStarships(dataParsed);
		} catch (e) {
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchStarships();
	}, []);

	return (
		<SearchContext.Provider value={{ setSearchText, starships, isLoading }}>
			{children}
		</SearchContext.Provider>
	);
}

function useSearch(): ISearchContext {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error('""');
	}
	return context;
}

export { SearchProvider, useSearch };
