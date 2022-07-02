import TextField from 'components/TextField'
import Button from 'components/_ui/Button'
import React, { useContext, useEffect } from 'react'
import { FormStyle } from './styles'
import validationSchema from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { UserFormData } from 'types/user'
import { UserContext } from 'contexts/UserContext'

type FormProps = {
	initialValues: UserFormData
}

const Form = ({ initialValues }: FormProps) => {
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

	const onError = (error: unknown) => console.log(error)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: initialValues,
		resolver: yupResolver(validationSchema)
	})

	useEffect(() => {
		setUserFormDefaultValues({})
	}, [setUserFormDefaultValues])

	return (
		<FormStyle onSubmit={handleSubmit(onSubmit, onError)}>
			<h2>Criar usuário</h2>
			<main>
				<TextField
					label='Nome*'
					field='name'
					type='text'
					placeholder='Ex: Maria'
					errorType={errors?.name?.type}
					{...register('name')}
				/>
				<TextField
					label='Email*'
					field='email'
					type='email'
					placeholder='Ex: email@exemplo.com'
					errorType={errors?.email?.type}
					{...register('email')}
				/>
				<TextField
					label='Telefone'
					field='phone'
					type='tel'
					mask='(99) 99999-9999'
					placeholder='Ex: (99) 98877-6655'
					errorType={errors?.phone?.type}
					{...register('phone')}
				/>
				<TextField
					label='País*'
					field='country'
					type='text'
					placeholder='Ex: Brasil'
					errorType={errors?.country?.type}
					{...register('country')}
				/>
				<TextField
					label='Estado*'
					field='state'
					type='text'
					placeholder='Ex: Paraná'
					errorType={errors?.state?.type}
					{...register('state')}
				/>
				<TextField
					label='Rua*'
					field='street'
					type='text'
					placeholder='Ex: Rua Brasil'
					errorType={errors?.street?.type}
					{...register('street')}
				/>
				<TextField
					label='Número*'
					field='number'
					type='text'
					placeholder='Ex: 130'
					errorType={errors?.number?.type}
					{...register('number')}
				/>
				<TextField
					label='Foto (link)'
					field='avatar'
					type='text'
					placeholder='Ex: http://imagem...'
					errorType={errors?.avatar?.type}
					{...register('avatar')}
				/>
			</main>
			<Button bgColor='primary' type='submit'>
				Finalizar
			</Button>
		</FormStyle>
	)
}

export default Form
