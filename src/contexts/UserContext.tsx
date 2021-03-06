import UsersModal from 'components/Users/Modal'
import { useApi } from 'hooks/useApi'
import React, { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import {
	createUserRequest,
	deleteUserByIdRequest,
	getUsersRequest,
	updateUserByIdRequest
} from 'services/api/requests'
import { User, UserFormData } from 'types/user'

type UserContextProps = {
	children: ReactNode
}

export type UserContextType = {
	isOpenModal: boolean
	selectedUser: string
	users: User[]
	loading: boolean
	setUserFormDefaultValues: (newState: UserFormData) => void
	setIsOpenModal: (newState: boolean) => void
	setSelectedUser: (newState: string) => void
	setUsers: (newState: User[]) => void
	getUsers: () => void
	createUser: (data: UserFormData) => void
	updateUser: (data: UserFormData) => void
	deleteUser: () => void
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProps) => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [selectedUser, setSelectedUser] = useState('')
	const [users, setUsers] = useState([] as User[])
	const [loading, setLoading] = useState(false)
	const [userFormDefaultValues, setUserFormDefaultValues] = useState(
		{} as UserFormData
	)

	const { mutate } = useApi('users')

	const getUsers = async () => {
		setLoading(true)
		try {
			const { data } = await getUsersRequest()
			setUsers(data)
		} catch (error) {
			toast.error(error)
		} finally {
			setLoading(false)
		}
	}

	async function createUser(data: UserFormData) {
		const user = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			image: data.avatar,
			address: {
				country: data.country,
				state: data.state,
				street: data.street,
				number: data.number
			}
		}

		try {
			setLoading(true)
			await createUserRequest(user)
			mutate()
			toast.success('Usuário criado com sucesso!')
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	async function updateUser(data: UserFormData) {
		const user = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			image: data.avatar,
			address: {
				country: data.country,
				state: data.state,
				street: data.street,
				number: data.number
			}
		}

		try {
			await updateUserByIdRequest(selectedUser, user)
			mutate()
			toast.success('Usuário alterado com sucesso!')
		} catch (error) {
			toast.error(error.response.data.message)
		}
	}

	async function deleteUser() {
		try {
			await deleteUserByIdRequest(selectedUser)
			mutate()
			toast.success('Usuário deletado com sucesso!')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<UserContext.Provider
			value={{
				isOpenModal,
				setIsOpenModal,
				selectedUser,
				setSelectedUser,
				users,
				setUsers,
				getUsers,
				createUser,
				updateUser,
				deleteUser,
				setUserFormDefaultValues,
				loading
			}}
		>
			{children}
			{isOpenModal && <UsersModal initialValues={userFormDefaultValues} />}
		</UserContext.Provider>
	)
}
