import { Container, ImageYoda, Title } from './styles';
import StormTrooper from '../../../public/icons8-stormtrooper-240.png';

export function NotFound() {
	return (
		<Container>
			<ImageYoda src={StormTrooper}></ImageYoda>
			<Title>
				A nave que você procura ainda não foi avistada nesta galáxia :(
			</Title>
		</Container>
	);
}
