import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API

export const instance = axios.create({
	baseURL: baseUrl
})
