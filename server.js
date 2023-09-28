const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('foseedygooo')); // 这里假设你的HTML文件和图片都在一个名为public的文件夹中

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const quantity = req.body.quantity;

    // 在这里你可以将这些数据存储到数据库或者进行其他处理
    // 例如，你可以使用Mongoose将数据存储到MongoDB中

    res.send(`姓名: ${name}, 电话号码: ${phoneNumber}, 数量: ${quantity} 已收到。`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
