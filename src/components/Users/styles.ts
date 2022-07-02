import styled from 'styled-components'
import theme from 'theme/theme'

export const Wrapper = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(38rem, 1fr));
	gap: 1rem;
	width: 100%;
	margin: ${theme.spacing.sm} auto;
	max-width: ${theme.grid.container};

	@media screen and (max-width: 400px) {
		grid-template-columns: 100%;
	}
`
