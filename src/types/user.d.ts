export type Address = {
	country: string
	state: string
	street: string
	number: number
}

export type User = {
	id: number
	name: string
	email: string
	birthdate: string
	phone: string
	address: Address
}
