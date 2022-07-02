import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'lib/mongodb'
import { ObjectId } from 'mongodb'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { method, body } = req

		const { id } = req.query
		const objId = new ObjectId(String(id))

		if (method === 'DELETE') {
			const { db } = await connectToDatabase()
			await db.collection('user').deleteOne({
				_id: objId
			})

			res.status(200).json({
				message: 'usuario deletado'
			})
		}

		if (method === 'PUT') {
			if (body.name.length < 3) {
				res.status(400).json({
					message: 'Nome inválido'
				})
				return
			}

			const { db } = await connectToDatabase()
			await db.collection('user').updateOne(
				{
					_id: objId
				},
				{
					$set: body
				}
			)

			res.status(200).json({
				message: 'usuario atualizado'
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
