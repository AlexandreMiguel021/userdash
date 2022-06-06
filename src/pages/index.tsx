import Filter from 'components/Filter'
import Header from 'components/Header'
import Users from 'components/Users'
import type { NextPage } from 'next'
import { useState } from 'react'
import { User } from 'types/user'
import S from 'styles/Home.module.scss'

const Home: NextPage = () => {
	const [users, setUsers] = useState<User[]>([])

	return (
		<>
			<Header />
			<main className={S.main}>
				<Filter setUsers={setUsers} />
				<Users users={users} />
			</main>
		</>
	)
}

export default Home
