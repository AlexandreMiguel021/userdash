import UsersModal from 'components/Users/Modal'
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

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProps) => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [selectedUser, setSelectedUser] = useState<string>('')
	const [users, setUsers] = useState<User[]>([])
	const [loading, setLoading] = useState(false)
	const [userFormDefaultValues, setUserFormDefaultValues] =
		useState<UserFormData>({})

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

	const createUser = async (data: UserFormData) => {
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
			toast.success('Usuário criado com sucesso!')
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const updateUser = async (data: UserFormData) => {
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
			toast.success('Usuário alterado com sucesso!')
		} catch (error) {
			toast.error(error.response.data.message)
		}
	}

	const deleteUser = async () => {
		try {
			await deleteUserByIdRequest(selectedUser)
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
