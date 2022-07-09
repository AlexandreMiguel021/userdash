import styled, { css, DefaultTheme } from 'styled-components'
import theme from 'theme'

type Props = {
	bgColor: 'primary' | 'secondary'
	size?: 'sm' | 'default'
}

const buttonSizeModifier = {
	sm: (theme: DefaultTheme) => css`
		padding: ${theme.spacing.xxs};
		font-size: ${theme.font.sizes.xs};
	`,
	default: (theme: DefaultTheme) => css`
		padding: ${theme.spacing.xs} ${theme.spacing.lg};
		font-size: ${theme.font.sizes.md};
	`
}

export default styled.button<Props>`
	${({ bgColor = 'primary', size = 'default' }) => css`
		border: 0.1rem solid transparent;
		border-radius: ${theme.border.radius};
		background-color: ${theme.colors[bgColor]};
		color: ${theme.colors.white};
		font-weight: 500;

		font-family: ${theme.font.family}
		font-size: ${theme.font.sizes.md};
		${!!size && buttonSizeModifier[size](theme)}

		&:hover {
			transition: all 0.3s ease;
			opacity: 0.7;
			cursor: pointer;
		}
	`}
`

export const ButtonGroup = styled.div`
	display: flex;
	gap: ${theme.spacing.xxs};
`
