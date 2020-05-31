const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// can use id as the code for each phone
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    minlength: 3,
  },
  infected: {
    type: Boolean,
  },
  connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
    }
  ],
  location: String,
  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Report',
    }
  ]
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
    delete obj.passwordHash
    // don't forget to enable this after testing
    /*
    delete obj.connections 
     */
  }
})

module.exports = mongoose.model('User', userSchema)


