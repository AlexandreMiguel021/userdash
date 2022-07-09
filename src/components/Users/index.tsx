import { memo, useContext } from 'react'
import User from 'components/Users/User'
import { UserContext } from 'contexts/UserContext'
import { Wrapper } from './styles'

function Users() {
	const { users } = useContext(UserContext)

	return (
		<Wrapper>
			{users.map((user) => (
				<User key={user._id} {...user} />
			))}
		</Wrapper>
	)
}

export default memo(Users)
