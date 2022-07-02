import styled from 'styled-components'
import theme from 'theme/theme'
import InputMask from 'react-input-mask'

export default styled(InputMask)`
	border: 0.1rem solid ${theme.colors.primary};
	background: transparent;
	padding: 1rem;
	border-radius: 0.5rem;
	outline: none;
	color: white;
	font-family: 'Poppins', sans-serif;
	font-size: 1.6rem;
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
