const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world, express')
});
app.get('/login', (req, res) => {
    res.send('登录成功')
});
app.get('/reg', (req, res) => {
    res.send('注册啦')
});
app.get('/list', (req, res) => {
    res.send('This is list page')
});

app.post('/doLogin', (req, res) => {   //增加数据
    console.log('执行登录');
    res.send('执行登录');
})

app.put('/editUser', (req, res) => {  // 修改用户信息
    console.log('修改成功'); 
    res.send('修改成功');
})

app.delete('/deleteUser', (req, res) => {  // 删除户信息
    console.log('删除成功'); 
    res.send('删除成功');
})

// 二级目录
app.get('/admin/user', (req, res) => {
    console.log('admin user')
    res.send('admin user');
})


app.listen(3000, () => { console.log('server start port is 3000') })
