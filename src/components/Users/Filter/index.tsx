import Button from 'components/_ui/Button'
import Input from 'components/_ui/Input'
import { UserContext } from 'contexts/UserContext'
import { FormEvent, useContext, useState } from 'react'
import { Filter as StyleFilter } from './styles'

const UsersFilter = () => {
	const [filter, setFilter] = useState('')
	const { filterUsers, setIsOpenModal, setSelectedUser } =
		useContext(UserContext)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		filterUsers(filter)
	}

	const handleCreate = () => {
		setSelectedUser('')
		setIsOpenModal(true)
	}

	return (
		<StyleFilter onSubmit={handleSubmit}>
			<Input
				as='input'
				type='text'
				value={filter}
				placeholder={'Filtrar usuários...'}
				onChange={(e) => setFilter(e.target.value)}
			/>
			<Button bgColor='primary' type='submit'>
				Filtrar
			</Button>
			<Button bgColor='primary' type='button' onClick={handleCreate}>
				Criar
			</Button>
		</StyleFilter>
	)
}

export default UsersFilter
