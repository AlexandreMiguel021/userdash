import { UserContext } from 'contexts/UserContext'
import { XIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import { UserFormData } from 'types/user'
import { Close, Container, Overlay } from './styles'
import Form from 'components/Form'

type UserModalProps = {
	initialValues: UserFormData
}

const UsersModal = ({ initialValues }: UserModalProps) => {
	const { setIsOpenModal } = useContext(UserContext)

	const handleClose = () => {
		setIsOpenModal(false)
	}

	return (
		<Overlay>
			<Container>
				<div>
					<Close type='button' onClick={handleClose}>
						<XIcon />
					</Close>
					<Form initialValues={initialValues} />
				</div>
			</Container>
		</Overlay>
	)
}

export default UsersModal
