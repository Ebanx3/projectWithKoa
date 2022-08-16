import jwt from 'koa-jwt';

export default (ctx) => {
  if (ctx.request.body.password === 'password') {
    ctx.status = 200;
    ctx.body = {
      token: jwt.sign({ role: 'admin' }, 'secrettt'), //Should be the same secret key as the one used is ./jwt.js
      message: "Successfully logged in!"
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    };
  }
  return ctx;
}