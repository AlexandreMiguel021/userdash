export type Address = {
	country: string
	state: string
	street: string
	number: number
}

export type User = {
	_id: string
	name: string
	email: string
	birthdate?: string
	phone: string
	image: string
	address: Address
}

export type UserFormData = {
	_id?: string
	name?: string
	email?: string
	birthdate?: string
	phone?: string
	avatar?: string
	country?: string
	state?: string
	street?: string
	number?: string
}
