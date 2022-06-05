import { memo, useState } from 'react'
import { User as UserType } from 'types/user'
import User from 'components/User'
import S from './styles.module.scss'

type UsersProps = {
	users: UserType[]
}

const Users = ({ users }: UsersProps) => {
	const [selectedUser, setSelectedUser] = useState(-1)

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
					selectedUser={selectedUser}
					setSelectedUser={setSelectedUser}
				/>
			))}
		</ul>
	)
}

export default memo(Users)
