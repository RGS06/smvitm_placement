import clientPromise from '@/lib/mongodb'
import bcrypt from 'bcrypt'
import cors from '../../../lib/cors-middleware';

export default async function handler(req, res) {
  await cors(req, res); 
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)
    const usersCollection = db.collection('users')

    const existingUser = await usersCollection.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await usersCollection.insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date()
    })

    return res.status(201).json({ message: 'User registered successfully', userId: result.insertedId })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
}
