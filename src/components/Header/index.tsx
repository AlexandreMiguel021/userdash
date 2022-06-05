import { memo } from 'react'
import S from './styles.module.scss'

const Header = () => {
	return (
		<header className={S.header}>
			<h1>UserDash</h1>
		</header>
	)
}

export default memo(Header)
