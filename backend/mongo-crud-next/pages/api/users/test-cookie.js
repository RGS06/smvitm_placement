// pages/api/test-cookie.js
import cookie from 'cookie'

export default function handler(req, res) {
  const token = 'test-token'

  res.setHeader('Set-Cookie', cookie.serialize('token', token, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'strict',
    path: '/'
  }))

  res.status(200).json({ message: 'Cookie set' })
}
