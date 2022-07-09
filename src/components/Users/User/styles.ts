import styled, { css } from 'styled-components'
import theme from 'theme'

type CardProps = {
	active: boolean
}

export const Card = styled.li<CardProps>`
	${({ active }) => css`
		width: 100%;
		max-width: 38rem;
		border-radius: 1rem;
		cursor: pointer;
		background-color: #00000018;
		display: flex;
		border-bottom: solid 0.7rem transparent;
		flex-direction: column;
		gap: 2.4rem;
		padding: 1.4rem;
		word-break: break-all;
		position: relative;
		color: white;
		border-bottom: ${active && `solid 0.7rem ${theme.colors.primary}`};
		justify-self: center;
		margin: 0 ${theme.spacing.sm};
		box-shadow: 2px 2px 10px ${theme.colors.bgSecondary};
	`}
`

export const Info = styled.section`
	display: flex;
	gap: 1.6rem;
	align-items: center;

	svg {
		width: 6rem;
		height: 6rem;
	}
`

export const Address = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-size: 1.4rem;

		span {
			color: #c7c7c7;
			font-size: 1.2rem;
		}
	}
`
