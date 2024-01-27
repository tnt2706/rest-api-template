const accessService= require('../services/user.service')
const {CREATED, SuccessResponse} = require('../core/success.response')

class UserController {
  login = async (req, res, next) => {
    new SuccessResponse({
      message:"Login success !",
      metadata : await accessService.login(req.body)
    }).send(res)
  };
}

module.exports = new UserController();
