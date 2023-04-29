import styled from 'styled-components';

export const SearchContainer = styled.div`
	max-width: 408px;
	height: 53px;
	padding: 0 20px;
	margin-bottom: 1.5rem;
`;

export const StyledSearchBox = styled.input`
	position: relative;
	height: 100%;
	width: 100%;
	border: 1px solid #c1c1c1;
	color: #a19d9d;
	border-radius: 5px;
	padding: 0 1rem;
	font-size: 1rem;

	&::placeholder {
		font-size: 1rem;
		color: #a19d9d;
	}

	&:focus {
		outline: none;
		box-shadow: 0;
		border-color: #c1c1c1;
	}
`;
