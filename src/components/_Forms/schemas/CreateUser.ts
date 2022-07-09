import * as yup from 'yup'
import msg from '../messages'

const schema = yup.object({
	name: yup.string().required(msg.required),
	email: yup.string().email().required(msg.required),
	phone: yup.string().required(),
	country: yup.string().required(msg.required),
	state: yup.string().required(msg.required),
	street: yup.string().required(msg.required),
	number: yup.string().required(msg.required),
	avatar: yup.string()
})

export default schema
