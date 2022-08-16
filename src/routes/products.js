import Router from 'koa-router';

const router = new Router({
    prefix:'/products',
});

router.get('/',async (ctx, next)=>{
    ctx.body = {
        msg:'Hola desde products'
    }
})

export default router.routes();