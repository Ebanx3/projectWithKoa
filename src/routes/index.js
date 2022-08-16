import Router from 'koa-router';
import jwt from 'koa-jwt';
import userRouter from './users';
import productsRouter from './products';
import config from '../config/config';

const router = new Router({
    prefix: '/api',
});

// router.use((ctx, next) => {
//     console.log(ctx)
//     return next().catch((err) => {
//         console.log(err, err.message)
//         if (401 == err.status) {
//             ctx.status = 401;
//             ctx.body = 'Protected resource, use Authorization header to get access\n';
//         } else {
//             throw err;
//         }
//     });
// });

// router.use(jwt({ secret: config.SECRET, }).unless({ path: ['/\/users/signup/'] }));

router.use(userRouter);
router.use(productsRouter);

export default router.routes();