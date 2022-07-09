import { UserContext } from 'contexts/UserContext'
import { XIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import { UserFormData } from 'types/user'
import { Close, Container, Overlay } from './styles'
import CreateUserForm from 'components/_Forms/CreateUser'

type UserModalProps = {
	initialValues: UserFormData
}

export default function UsersModal({ initialValues }: UserModalProps) {
	const { setIsOpenModal } = useContext(UserContext)

	const handleClose = () => {
		setIsOpenModal(false)
	}

	return (
		<Overlay>
			<Container>
				<Close onClick={handleClose}>
					<XIcon />
				</Close>
				<CreateUserForm initialValues={initialValues} />
			</Container>
		</Overlay>
	)
}
