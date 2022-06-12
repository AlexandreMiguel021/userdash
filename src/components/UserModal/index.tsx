import { UserContext } from 'contexts/UserContext'
import { XIcon } from '@heroicons/react/outline'
import { FormEvent, useContext } from 'react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import S from './styles.module.scss'

const UserModal = () => {
	const {
		setIsOpenModal,
		selectedUser,
		updateUser,
		createUser,
		formName,
		setFormName,
		formEmail,
		setFormEmail,
		formPhone,
		setFormPhone,
		formCountry,
		setFormCountry,
		formState,
		setFormState,
		formStreet,
		setFormStreet,
		formNumber,
		setFormNumber,
		formAvatar,
		setFormAvatar
	} = useContext(UserContext)

	const handleClose = () => {
		setIsOpenModal(false)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		setIsOpenModal(false)
		if (selectedUser !== -1) {
			updateUser()
		} else {
			createUser()
		}

		window.location.reload()
	}
	console.log(selectedUser)
	return (
		<div className={S.overlay}>
			<div className={S.container}>
				<div>
					<h2>Criar usuário</h2>
					<button className={S.buttonClose} type='button' onClick={handleClose}>
						<XIcon />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<main>
						<TextField
							label='Nome'
							htmlFor='name'
							type='text'
							value={formName}
							onChange={(e) => setFormName(e.target.value)}
						/>
						<TextField
							label='Email'
							htmlFor='email'
							type='text'
							value={formEmail}
							onChange={(e) => setFormEmail(e.target.value)}
						/>
						<TextField
							label='Telefone'
							htmlFor='phone'
							type='text'
							value={formPhone}
							onChange={(e) => setFormPhone(e.target.value)}
						/>
						<TextField
							label='País'
							htmlFor='country'
							type='text'
							value={formCountry}
							onChange={(e) => setFormCountry(e.target.value)}
						/>
						<TextField
							label='Estado'
							htmlFor='state'
							type='text'
							value={formState}
							onChange={(e) => setFormState(e.target.value)}
						/>
						<TextField
							label='Rua'
							htmlFor='street'
							type='text'
							value={formStreet}
							onChange={(e) => setFormStreet(e.target.value)}
						/>
						<TextField
							label='Número'
							htmlFor='number'
							type='text'
							value={formNumber}
							onChange={(e) => setFormNumber(e.target.value)}
						/>
						<TextField
							label='Foto (link)'
							htmlFor='avatar'
							type='text'
							value={formAvatar}
							onChange={(e) => setFormAvatar(e.target.value)}
						/>
					</main>
					<Button type='submit'>Finalizar</Button>
				</form>
			</div>
		</div>
	)
}

export default UserModal
