const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: String,
  name: String,
  password: String,
  anuncios: [{
    type: Schema.Types.ObjectId,
    ref: 'Anuncio'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
  }
})

const User = model('User', userSchema)

module.exports = User
