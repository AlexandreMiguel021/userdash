// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

module.exports = () => {
	const data = {
		users: []
	}

	for (let i = 0; i < 2000; i++) {
		data.users.push({
			id: i,
			name: faker.name.firstName,
			email: faker.internet.email
		})
	}

	return data
}
