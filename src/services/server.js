import koa from 'koa';
import koaBody from 'koa-body';
import mainRouter from '../routes';

const app = new koa();
app.use(koaBody());

app.use(mainRouter);
app.use(async (ctx, next)=> {
    ctx.body={msg:'Undefined path'}
})
export default app;