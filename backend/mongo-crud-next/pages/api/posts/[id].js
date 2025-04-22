import { ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongodb'
import cors from '../../../lib/cors-middleware'

export default async function handler(req, res) {
  await cors(req, res);
  const { id } = req.query
  const objectId = new ObjectId(id)
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB)
  const collection = db.collection('newsletters')

  if (req.method === 'GET') {
    const item = await collection.findOne({ _id: objectId })
    if (!item) return res.status(404).json({ message: 'Not found' })
    return res.status(200).json(item)
  }

  if (req.method === 'PUT') {
    const { title, link, date } = req.body
    const updated = new Date()
    const result = await collection.updateOne({ _id: objectId }, { $set: { title, link, date, updated } })
    return res.status(200).json({ message: 'Updated successfully', result })
  }

  // if (req.method === 'PUT') {
  //   const { title, link, date } = req.body;
  //   const updated = new Date();
  //   const result = await collection.updateOne(
  //     { _id: objectId },
  //     { $set: { title, link, date, updated } }
  //   );
  //   return res.status(200).json({ message: 'Updated successfully', result });
  // }

  if (req.method === 'DELETE') {
    const result = await collection.deleteOne({ _id: objectId })
    return res.status(204).end()
  }

  return res.status(405).end()
}
