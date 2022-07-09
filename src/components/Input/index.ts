import styled from 'styled-components'
import theme from 'theme'

export default styled.input`
	border: 0.1rem solid ${theme.colors.primary};
	background: transparent;
	padding: ${theme.spacing.xxs};
	border-radius: 0.5rem;
	outline: none;
	color: white;
	font-family: 'Poppins', sans-serif;
	font-size: 1.6rem;
	width: 100%;
	opacity: 1;
	flex-grow: 3;

	&:focus {
		opacity: 0.8;
	}

	&::placeholder {
		color: white;
		opacity: 0.8;
		font-weight: 300;
	}
`
