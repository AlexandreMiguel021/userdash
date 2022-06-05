import { FormEvent, useState } from 'react'
import { api } from 'services/api'
import { User } from 'types/user'
import S from './styles.module.scss'

type FilterProps = {
	setUsers: (data: User[]) => void
}

const Filter = ({ setUsers }: FilterProps) => {
	const [filter, setFilter] = useState('')
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		const res = await api.get(`/users?q=${filter}`)
		const data = await res.data
		setUsers(data)
	}

	return (
		<form className={S.form} onSubmit={handleSubmit}>
			<input
				type='text'
				value={filter}
				placeholder={'Filtrar usuários...'}
				onChange={(e) => setFilter(e.target.value)}
			/>
			&nbsp;
			<button type='submit'>Filtrar</button>
		</form>
	)
}

export default Filter
