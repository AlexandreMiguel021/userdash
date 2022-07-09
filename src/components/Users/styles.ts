import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'theme'

export const Wrapper = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(38rem, 1fr));
	gap: 1rem;
	width: 95%;
	margin: ${theme.spacing.sm} auto;
	max-width: ${theme.grid.container};

	${media.lessThan('small')`
		grid-template-columns: 100%;
	`}
`
