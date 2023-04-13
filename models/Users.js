const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts', //looks for thought collection in database
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users', //references other users
        }
    ],
  },
  {
    toJSON: { //pulled into JSON format run getters
      getters: true, //runs getters before JSON data is returned
    },
    id: false 
  }
);
const Users = model('user', userSchema);
module.exports = Users;