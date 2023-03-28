const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.register = async (req, res) => {
  const { anuncios, username, name, password } = req.body

  try {
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res
        .status(409)
        .json({ message: 'El correo electrónico ya está registrado' })
    }

    const user = new User({ anuncios, username, name, password })
    await user.save()

    const token = jwt.sign({ userId: user.id }, 'secretKey')
    res.status(201).json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}