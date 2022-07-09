import { Direction, JustifyContent, Spacer } from 'types/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'theme'

type ColProps = {
	width?: number
	spacer?: Spacer
	direction?: Direction
	center?: boolean
	justifyContent?: JustifyContent
}

export default styled.div<ColProps>`
	${({ width, spacer = 'sm', direction, center, justifyContent }) => css`
		display: flex;
		flex-direction: ${direction ? direction : 'column'};
		gap: ${theme.spacing[spacer!]};
		max-width: ${width}rem;
		width: 100%;
		justify-content: ${justifyContent ? justifyContent : 'center'};
		margin: ${center && 'auto'};

		${media.lessThan('medium')`
      max-width: 100%;
    `}
	`}
`
