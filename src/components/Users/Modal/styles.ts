import styled from 'styled-components'
import theme from 'theme/theme'

export const Overlay = styled.div`
	background: rgba(10, 10, 10, 0.6);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Close = styled.button`
	justify-content: center;
	background-color: transparent;
	align-items: center;
	position: absolute;
	cursor: pointer;
	display: flex;
	width: 3rem;
	height: 3rem;
	right: 0.5rem;
	top: 0.5rem;
	border: none;
	color: ${theme.colors.secondary};
`

export const Container = styled.div`
	background-color: #1a1a1a;
	width: 100%;
	max-width: 90rem;
	margin: auto;
	position: relative;
	border-radius: 0.8rem;
	padding: 2rem 0;
	z-index: ${theme.layers.modal};
`
