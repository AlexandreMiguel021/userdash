import Image from 'next/image'
import { memo, useContext } from 'react'
import { User as UserProps } from 'types/user'
import { UserContext } from 'contexts/UserContext'
import { Address, Card, Info } from './styles'
import { H2, Span } from 'components/Typography'
import Button, { ButtonGroup } from 'components/Button'
import { UserProfileIcon } from 'assets/icons'

function User({ _id, name, email, image, phone, address }: UserProps) {
	const {
		selectedUser,
		setSelectedUser,
		deleteUser,
		setUserFormDefaultValues,
		setIsOpenModal
	} = useContext(UserContext)

	const updateUserModal = () => {
		const editValues = {
			name,
			email,
			phone,
			country: address.country,
			state: address.state,
			street: address.street,
			number: String(address.number),
			avatar: image
		}
		setUserFormDefaultValues(editValues)
		setIsOpenModal(true)
	}

	return (
		<Card active={selectedUser === _id} onClick={() => setSelectedUser(_id)}>
			<Info>
				{image ? (
					<Image
						src={image}
						alt={`${name} avatar`}
						width={70}
						height={70}
						priority
					/>
				) : (
					<UserProfileIcon />
				)}

				<div>
					<H2>{name}</H2>
					<Span>
						<strong>Email:</strong> {email}
					</Span>
					<br />
					<Span>
						<strong>Cel:</strong> {phone}
					</Span>
				</div>
				{selectedUser === _id && (
					<ButtonGroup
						style={{ position: 'absolute', top: '1rem', right: '1rem' }}
					>
						<Button size='sm' bgColor='primary' onClick={updateUserModal}>
							Editar
						</Button>
						<Button size='sm' bgColor='primary' onClick={deleteUser}>
							Deletar
						</Button>
					</ButtonGroup>
				)}
			</Info>
			<Address>
				<div>
					<Span>País:</Span>
					{address.country}
				</div>
				<div>
					<Span>Estado:</Span>
					{address.state}
				</div>
				<div>
					<Span>Endereço:</Span>
					{address.street}
				</div>
			</Address>
		</Card>
	)
}

export default memo(User)
