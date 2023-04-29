import { useSearch } from '../../context/SearchContext';
import { SearchContainer, StyledSearchBox } from './styles';

export function SearchBox() {
	const { setSearchText } = useSearch();

	return (
		<SearchContainer>
			<StyledSearchBox
				placeholder="Pesquisar"
				onChange={(e) => {
					setSearchText(e.target.value);
				}}
			></StyledSearchBox>
		</SearchContainer>
	);
}
