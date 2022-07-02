import * as yup from 'yup'

const validationSchema = yup.object({
	name: yup.string().required(),
	email: yup.string().email().required(),
	phone: yup.string(),
	country: yup.string().required(),
	state: yup.string().required(),
	street: yup.string().required(),
	number: yup.string().required(),
	avatar: yup.string()
})

export default validationSchema
