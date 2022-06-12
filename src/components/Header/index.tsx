import { UserContext } from 'contexts/UserContext'
import { memo, useContext } from 'react'
import S from './styles.module.scss'

const Header = () => {
	const { statusMessage } = useContext(UserContext)
	return (
		<header className={S.header}>
			<h1>UserDash</h1>
			{statusMessage && (
				<div>
					<span>{statusMessage}</span>
				</div>
			)}
		</header>
	)
}

export default memo(Header)
