import TextField from 'components/TextField'
import Button from 'components/Button'
import React, { useContext, useEffect } from 'react'
import validationSchema from './schemas/CreateUser'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserFormData } from 'types/user'
import { UserContext } from 'contexts/UserContext'
import { H2, H3 } from 'components/Typography'
import Form from 'components/Form'
import Grid from 'components/Grid'
import Col from 'components/Col'

type FormProps = {
	initialValues: UserFormData
}

export default function CreateUserForm({ initialValues }: FormProps) {
	const {
		setIsOpenModal,
		selectedUser,
		updateUser,
		createUser,
		setUserFormDefaultValues
	} = useContext(UserContext)

	const onSubmit = (data: UserFormData) => {
		selectedUser !== '' ? updateUser(data) : createUser(data)
		setIsOpenModal(false)
	}

	useEffect(() => {
		setUserFormDefaultValues({})
	}, [setUserFormDefaultValues])

	return (
		<Form
			onSubmit={onSubmit}
			form={{
				resolver: yupResolver(validationSchema),
				defaultValues: initialValues
			}}
		>
			<H2>Criar usuário</H2>
			<Col spacer='xxs'>
				<H3>Perfil</H3>
				<TextField
					label='Nome*'
					name='name'
					type='text'
					placeholder='Ex: Maria'
				/>
				<TextField
					label='Foto (link)'
					name='avatar'
					type='text'
					placeholder='Ex: http://imagem...'
				/>
			</Col>

			<Col spacer='xxs'>
				<H3>Contato</H3>
				<Grid>
					<TextField
						label='Email*'
						name='email'
						type='email'
						placeholder='Ex: email@exemplo.com'
					/>
					<TextField
						label='Telefone'
						name='phone'
						type='tel'
						mask='(99) 99999-9999'
						placeholder='Ex: (99) 98877-6655'
					/>
				</Grid>
			</Col>

			<Col spacer='xxs'>
				<H3>Endereço</H3>
				<Grid gridCol='three'>
					<TextField
						label='País*'
						name='country'
						type='text'
						placeholder='Ex: Brasil'
					/>
					<TextField
						label='Estado*'
						name='state'
						type='text'
						placeholder='Ex: Paraná'
					/>
					<TextField
						label='Número*'
						name='number'
						type='text'
						placeholder='Ex: 130'
					/>
				</Grid>
			</Col>
			<TextField
				label='Rua*'
				name='street'
				type='text'
				placeholder='Ex: Rua Brasil'
			/>

			<Button bgColor='primary' type='submit'>
				Finalizar
			</Button>
		</Form>
	)
}
