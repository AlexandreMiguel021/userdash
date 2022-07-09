import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'theme'
import { NumberCol, Spacer } from 'types/styles'

export type GridProps = {
	gridWidth?: number
	gridSpacer?: Spacer
	gridCol?: NumberCol
}

const gridColModifier = {
	one: () => css`
		grid-template-columns: 1fr;
	`,
	two: () => css`
		grid-template-columns: 1fr 1fr;
	`,
	three: () => css`
		grid-template-columns: 1fr 1fr 1fr;
		${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
	`
}

export default styled.div<GridProps>`
	${({ gridWidth, gridSpacer = 'xs', gridCol = 'two' }) => css`
		display: grid;
		gap: ${theme.spacing[gridSpacer!]};
		max-width: ${gridWidth}rem;

		${gridColModifier[gridCol]}
		${media.lessThan('small')`
      grid-template-columns: 1fr;
    `}
	`}
`
