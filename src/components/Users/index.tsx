import { memo } from 'react'
import { User as UserType } from 'types/user'
import User from 'components/User'

type UsersProps = {
	users: UserType[]
}

const Users = ({ users }: UsersProps) => {
	return (
		<ul>
			{users.map(({ id, name, email, birthdate, address, phone }) => (
				<User
					key={id}
					id={id}
					name={name}
					email={email}
					birthdate={birthdate}
					address={address}
					phone={phone}
				/>
			))}
		</ul>
	)
}

export default memo(Users)
