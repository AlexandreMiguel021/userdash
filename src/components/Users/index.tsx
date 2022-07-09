import { memo, useContext } from 'react'
import User from 'components/Users/User'
import { UserContext } from 'contexts/UserContext'
import { Wrapper } from './styles'
import { useApi } from 'hooks/useApi'

function Users() {
	const { users, setUsers } = useContext(UserContext)

	const { data } = useApi('users')
	setUsers(data)

	return (
		<Wrapper>
			{users?.map((user) => (
				<User key={user._id} {...user} />
			))}
		</Wrapper>
	)
}

export default memo(Users)
