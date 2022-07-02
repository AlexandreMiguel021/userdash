import { H1 } from 'components/Typography'
import Link from 'next/link'
import { memo } from 'react'
import { Header as StyleHeader, Nav } from './styles'

const Header = () => (
	<StyleHeader>
		<H1>UserDash</H1>
	</StyleHeader>
)

export default memo(Header)
