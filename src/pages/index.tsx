import Users from 'components/Users'
import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { api } from 'services/api'
import { User } from 'types/user'

const Home: NextPage = () => {
	const [filter, setFilter] = useState('')
	const [users, setUsers] = useState<User[]>([])

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		const res = await api.get(`/users?q=${filter}`)
		const data = await res.data
		setUsers(data)
	}

	return (
		<header>
			<h1>Usuários</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
				&nbsp;
				<button type='submit'>Buscar</button>
			</form>

			<Users users={users} />
		</header>
	)
}

export default Home
