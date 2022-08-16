import Router from 'koa-router';
import jwt from 'koa-jwt';
import authenticate from '../services/auth'

const router = new Router({
    prefix: '/users',
});

const users = []

router.post('/signup',async (ctx, next) => {
    users.push(ctx.request.body);
    // ctx.set('header',)
    ctx.body = {
        msg: 'New user created',
    };
    ctx.status = 200;
});

router.post('/login',async (ctx, next) => {
    authenticate(ctx);
    ctx.body = {
        msg : 'Trying to login'
    }
});

export default router.routes();