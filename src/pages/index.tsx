import Filter from 'components/Filter'
import Header from 'components/Header'
import Users from 'components/Users'
import type { NextPage } from 'next'
import { useState } from 'react'
import { User } from 'types/user'

const Home: NextPage = () => {
	const [users, setUsers] = useState<User[]>([])

	return (
		<div>
			<Header />
			<Filter setUsers={setUsers} />
			<Users users={users} />
		</div>
	)
}

export default Home
