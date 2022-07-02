import styled, { keyframes } from 'styled-components'
import theme from 'theme/theme'

const Anim = keyframes`
	0% {
		opacity: 0.3;
		transform: translateY(-2px);
	}

	100% {
		opacity: 1;
		transform: translateY(2px);
	}
`

export const Loading = styled.div`
	padding: 1rem;
	font-size: 1.8rem;
	color: ${theme.colors.secondary};
	animation: ${Anim} 0.8s infinite alternate;
	background: rgba(10, 10, 10, 0.6);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: fade 0.3s;
`
