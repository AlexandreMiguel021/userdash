import { UserContext } from 'contexts/UserContext'
import { FormEvent, useContext, useState } from 'react'
import S from './styles.module.scss'

const Filter = () => {
	const [filter, setFilter] = useState('')
	const { filterUsers } = useContext(UserContext)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		filterUsers(filter)
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
