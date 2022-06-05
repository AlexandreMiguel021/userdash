// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

module.exports = () => {
	const data = {
		users: []
	}

	for (let i = 0; i < 2000; i++) {
		data.users.push({
			id: i,
			name: faker.name.firstName(),
			email: faker.internet.email(),
			birthdate: faker.date.past(),
			phone: faker.phone.phoneNumber(),
			image: faker.image.avatar(),
			address: {
				country: faker.address.country(),
				state: faker.address.state(),
				street: faker.address.streetName(),
				number: (Math.random() * 100).toFixed(0)
			}
		})
	}

	return data
}
