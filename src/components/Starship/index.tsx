import {
	StarshipContainer,
	StarshipDescription,
	StarshipPrice,
	StarshipSubtitle,
	StarshipTitle,
} from './styles';
interface StarshipProps {
	title: string;
	subtitle: string;
	length: string;
}

export function Starship({ length, subtitle, title }: StarshipProps) {
	return (
		<StarshipContainer>
			<StarshipDescription>
				<StarshipTitle>{title}</StarshipTitle>
				<StarshipSubtitle>{subtitle}</StarshipSubtitle>
			</StarshipDescription>
			<div>
				<StarshipPrice>{length}</StarshipPrice>
			</div>
		</StarshipContainer>
	);
}
