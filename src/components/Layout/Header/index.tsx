import { H1 } from 'components/Typography'
import { memo } from 'react'
import { Header as StyleHeader } from './styles'

function Header() {
	return (
		<StyleHeader>
			<H1>UserDash</H1>
		</StyleHeader>
	)
}

export default memo(Header)
