import httpStatus from 'http-status'

const index = (req, res, next) => {
  res.status(httpStatus.OK)
  res.send([])
}

export default { index }
