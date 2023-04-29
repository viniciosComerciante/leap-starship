import { Header } from './components/Header';
import { SearchBox } from './components/SearchBox';
import { StarshipSection } from './components/StarshipSection';
import GlobalStyle from './config/globalStyle';
import { SearchProvider } from './context/SearchContext';

function App() {
	return (
		<>
			<SearchProvider>
				<div>
					<Header />
					<SearchBox />
					<StarshipSection />
				</div>
			</SearchProvider>
			<GlobalStyle />
		</>
	);
}

export default App;
