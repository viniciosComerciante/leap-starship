import styled from 'styled-components';

export const StarshipContainer = styled.div`
	max-width: 1468px;
	height: 104px;
	padding: 0 1.25rem;
	margin: 0 auto;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02),
		0px 1px 12px rgba(0, 0, 0, 0.12);
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
`;

export const StarshipDescription = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StarshipTitle = styled.span`
	font-size: 22px;
	margin-bottom: 17px;
	color: #a19d9d;
`;

export const StarshipSubtitle = styled.span`
	font-size: 16px;
	color: #a19d9d;
`;

export const StarshipPrice = styled.span`
	font-size: 24px;
	color: #a19d9d;
`;
