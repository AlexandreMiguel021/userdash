import Button from 'components/_ui/Button'
import { UserContext } from 'contexts/UserContext'
import { FormEvent, useContext } from 'react'
import { Filter as StyleFilter } from './styles'

const UsersFilter = () => {
	const { getUsers, setIsOpenModal, setSelectedUser } = useContext(UserContext)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		getUsers()
	}

	const handleCreate = () => {
		setSelectedUser('')
		setIsOpenModal(true)
	}

	return (
		<StyleFilter onSubmit={handleSubmit}>
			<Button bgColor='primary' type='submit'>
				Listar usuários
			</Button>
			<Button bgColor='primary' type='button' onClick={handleCreate}>
				Criar
			</Button>
		</StyleFilter>
	)
}

export default UsersFilter
