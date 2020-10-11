const mongoose = require('../../config/mongoose.service').mongoose
const Schema = mongoose.Schema

const logSchema = new Schema(
  {
    data: Object,
    request: Object
  },
  {
    timestamps: true
  }
)

const Log = mongoose.model('Log', logSchema)

exports.create = (logData) => {
  const log = new Log({ data: logData.object, request: logData })
  return log.save()
}
