import styled from 'styled-components'
import theme from 'theme'

export const Form = styled.form`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	padding: ${theme.spacing.xs} ${theme.spacing.xxs};
	border-radius: ${theme.border.radius};
	gap: ${theme.spacing.xs};
	max-width: 71rem;
`
