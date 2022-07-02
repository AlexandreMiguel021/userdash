import styled, { css } from 'styled-components'
import theme from 'theme/theme'

type Props = {
	error: string
}

export const TextField = styled.div<Props>`
	${({ error }) => css`
		flex-direction: column;
		display: flex;

		span {
			transition: all 0.6s ease;
			font-size: 1.2rem;
			padding: 0.2rem 0;
			color: ${theme.colors.error};
			opacity: 0;
		}

		span {
			opacity: ${error && '1'};
		}

		input {
			border: ${error && `0.1rem solid ${theme.colors.error}`};
		}

		label {
			font-size: 1.4rem;
			margin-top: 1rem;
		}

		label {
			color: ${error && theme.colors.error};
		}
	`}
`
