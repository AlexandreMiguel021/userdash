// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

module.exports = () => {
	const data = {
		users: []
	}

	for (let i = 0; i < 8; i++) {
		data.users.push({
			id: i,
			name: 'Alexandre Freitas Miguel',
			email: 'Alexandremiguel@example.com',
			birthdate: new Date(),
			phone: '41 99999-9999',
			image: 'https://avatars.githubusercontent.com/u/95953567?v=4',
			address: {
				country: 'Brasil',
				state: 'Paraná',
				city: 'São José dos Pinhais',
				street: 'Rua alguma coisa',
				number: (Math.random() * 100).toFixed(0)
			}
		})
	}

	return data
}
