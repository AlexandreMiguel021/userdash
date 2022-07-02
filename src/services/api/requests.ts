import { UserFormData } from 'types/user'
import { instance } from './config'

export const getUsersRequest = () => instance.get('/users')

export const createUserRequest = (user: UserFormData) =>
	instance.post('/users', user)

export const deleteUserByIdRequest = (selectedUser: string) =>
	instance.delete(`/users/${selectedUser}`)

export const updateUserByIdRequest = (
	selectedUser: string,
	user: UserFormData
) => instance.put(`/users/${selectedUser}`, user)
