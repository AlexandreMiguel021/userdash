import Button from 'components/Button'
import { UserContext } from 'contexts/UserContext'
import { useContext } from 'react'
import { Filter as StyleFilter } from './styles'

export default function UsersFilter() {
	const { getUsers, setIsOpenModal, setSelectedUser } = useContext(UserContext)

	const listUsers = async () => {
		getUsers()
	}

	const handleCreate = () => {
		setSelectedUser('')
		setIsOpenModal(true)
	}

	return (
		<StyleFilter>
			<Button bgColor='primary' onClick={listUsers}>
				Listar usuários
			</Button>
			<Button bgColor='primary' onClick={handleCreate}>
				Criar
			</Button>
		</StyleFilter>
	)
}
