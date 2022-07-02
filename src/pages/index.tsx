import Users from 'components/Users'
import type { NextPage } from 'next'
import { UserContext } from 'contexts/UserContext'
import { useContext } from 'react'
import Loading from 'components/_ui/Loading'
import UsersFilter from 'components/Users/Filter'

const Home: NextPage = () => {
	const { loading } = useContext(UserContext)
	return (
		<main>
			<UsersFilter />
			{loading ? <Loading /> : <Users />}
		</main>
	)
}

export default Home
