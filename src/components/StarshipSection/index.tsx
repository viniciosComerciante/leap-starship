import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Starship } from '../Starship';
import { useSearch } from '../../context/SearchContext';
import { SectionContainer } from './styles';
import { NotFound } from '../NotFound';

export function StarshipSection() {
	const { starships, isLoading } = useSearch();

	return (
		<SectionContainer>
			{isLoading ? (
				<Skeleton
					count={10}
					height={104}
					style={{ maxWidth: '1468px', marginBottom: '1.5rem' }}
					borderRadius={4}
				/>
			) : starships.length ? (
				starships.map((st) => (
					<Starship
						key={st.model}
						title={st.name}
						subtitle={st.model}
						length={st.length}
					></Starship>
				))
			) : (
				<NotFound></NotFound>
			)}
		</SectionContainer>
	);
}
