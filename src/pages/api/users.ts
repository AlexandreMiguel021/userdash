import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'lib/mongodb'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { method, body } = req
		const { q } = req.query
		let data

		if (method === 'GET') {
			const { db } = await connectToDatabase()

			if (q) {
				data = await db.collection('user').findOne({
					name: q
				})
			} else {
				data = await db.collection('user').find().toArray()
			}

			res.status(200).json(data)
		}

		if (method === 'POST') {
			const { db } = await connectToDatabase()
			await db.collection('user').insertOne(body)

			res.status(200).json({
				message: 'ok'
			})
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error
		})
	}
}

export default handler
