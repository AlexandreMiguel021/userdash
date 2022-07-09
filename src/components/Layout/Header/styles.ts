import styled from 'styled-components'
import theme from 'theme'

export const Header = styled.header`
	padding: 1rem 2rem;
	height: 10rem;
	background-color: ${theme.colors.bgSecondary};
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	width: 100%;
	justify-content: space-between;

	a {
		color: ${theme.colors.secondary};
	}
`
export const Nav = styled.nav`
	padding: 0 ${theme.spacing.xxl};
`
