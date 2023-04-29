import { StyledHeader } from './styles';
import Logo from '../../../public/leapfone-logo-DBG.png';
export function Header() {
	return (
		<StyledHeader>
			<div>
				<img src={Logo} alt="logo"></img>
			</div>
		</StyledHeader>
	);
}
