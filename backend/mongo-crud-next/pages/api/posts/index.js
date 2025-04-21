import clientPromise from '@/lib/mongodb'

import cors from '../../../lib/cors-middleware'

export default async function handler(req, res) {
  await cors(req, res);
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB)
  const collection = db.collection('newsletters')

  if (req.method === 'GET') {
    const newsletters = await collection.find({}).sort({ created: -1 }).toArray()
    return res.status(200).json(newsletters)
  }

  if (req.method === 'POST') {
    const { title, link, date } = req.body
    const created = new Date()
    const result = await collection.insertOne({ title, link, date, created })
    return res.status(201).json(result.ops?.[0] || { insertedId: result.insertedId })
  }

  return res.status(405).end()
}
