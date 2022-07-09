import Users from 'components/Users'
import { UserContext } from 'contexts/UserContext'
import { useContext } from 'react'
import Loading from 'components/Loading'
import UsersFilter from 'components/Users/Filter'

export default function Home() {
	const { loading } = useContext(UserContext)
	return (
		<main>
			<UsersFilter />
			{loading ? <Loading /> : <Users />}
		</main>
	)
}
