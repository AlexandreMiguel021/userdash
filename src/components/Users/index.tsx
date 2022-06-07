import { memo, useContext } from 'react'
import User from 'components/User'
import S from './styles.module.scss'
import { UserContext } from 'contexts/UserContext'

const Users = () => {
	const { users } = useContext(UserContext)

	return (
		<ul className={S.Wrapper}>
			{users.map(({ id, name, email, address, phone, image }) => (
				<User
					key={id}
					id={id}
					name={name}
					email={email}
					address={address}
					phone={phone}
					image={image}
				/>
			))}
		</ul>
	)
}

export default memo(Users)
