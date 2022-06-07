import UserModal from 'components/UserModal'
import React, { createContext, ReactNode, useState } from 'react'
import { api } from 'services/api'
import { User } from 'types/user'

type UserContextProps = {
	children: ReactNode
}

type UserContextType = {
	isOpenModal: boolean
	selectedUser: number
	users: User[]
	setIsOpenModal: (newState: boolean) => void
	setSelectedUser: (newState: number) => void
	setUsers: (newState: User[]) => void
	filterUsers: (filter: string) => void
}

const initialValue = {
	isOpenModal: false,
	selectedUser: -1,
	users: [],
	setIsOpenModal: () => ({}),
	setSelectedUser: () => ({}),
	setUsers: () => ({}),
	filterUsers: () => ({})
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
	const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
	const [selectedUser, setSelectedUser] = useState(initialValue.selectedUser)
	const [users, setUsers] = useState<User[]>([])

	const filterUsers = async (filter: string) => {
		const res = await api.get(`/users?q=${filter}`)
		const data = await res.data
		setUsers(data)
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
				filterUsers
			}}
		>
			{children}
			{isOpenModal && <UserModal />}
		</UserContext.Provider>
	)
}
