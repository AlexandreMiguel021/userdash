import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'theme'

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
	max-width: 75rem;
	position: relative;
	display: flex;
	justify-content: center;
	border-radius: 0.8rem;
	z-index: ${theme.layers.modal};
	margin: 2rem;

	${media.lessThan('medium')`
		max-height: 45rem;
		overflow-y: scroll;
	`}
`
