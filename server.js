const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// homepage route
app.get('/', (req, res) => {
    return res.send({
        error: false,
        message: 'Welcome to RESTful CRUD API with NodeJS, Express',
        written_by: 'Suwanut',
        published_on: 'Test'
    })
})

app.post('/', (req, res) => {
    res.send('POST request');
});

// api product
const productSet = [{
    'sku': 'SKU001',
    'productName': 'สินค้าที่ 1',
    'imagePath': 'images/pp_1.png',
    'price': 711,
    'description': 'รายละเอียดสินค้าที่ 1 ',
    'size': 'M',
    'weight': '100g'
}, {
    'sku': 'SKU002',
    'productName': 'สินค้าที่ 2',
    'imagePath': 'images/pp_2.png',
    'price': 215,
    'description': 'รายละเอียดสินค้าที่ 2',
    'size': 'S',
    'weight': '200g'
}, {
    'sku': 'SKU003',
    'productName': 'สินค้าที่ 3',
    'imagePath': 'images/pp_3.png',
    'price': 973,
    'description': 'รายละเอียดสินค้าที่ 3',
    'size': 'L',
    'weight': '300g'
}, {
    'sku': 'SKU004',
    'productName': 'สินค้าที่ 4',
    'imagePath': 'images/pp_4.png',
    'price': 767,
    'description': 'รายละเอียดสินค้าที่ 4',
    'size': '18.5 x 12.5 x 4.5 cm',
    'weight': '400g'
}, {
    'sku': 'SKU005',
    'productName': 'สินค้าที่ 5',
    'imagePath': 'images/pp_5.png',
    'price': 16,
    'description': 'รายละเอียดสินค้าที่ 5',
    'size': '18.5 x 12.5 x 4.5 cm',
    'weight': '500g'
}, {
    'sku': 'SKU006',
    'productName': 'สินค้าที่ 6',
    'imagePath': 'images/pp_6.png',
    'price': 733,
    'description': 'รายละเอียดสินค้าที่ 6',
    'size': '13.5 x 8.5 x 4.5 cm',
    'weight': '600g'
}, {
    'sku': 'SKU007',
    'productName': 'สินค้าที่ 7',
    'imagePath': 'images/pp_7.png',
    'price': 828,
    'description': 'รายละเอียดสินค้าที่ 7',
    'size': '7',
    'weight': '700g'
}, {
    'sku': 'SKU008',
    'productName': 'สินค้าที่ 8',
    'imagePath': 'images/pp_8.png',
    'price': 401,
    'description': 'รายละเอียดสินค้าที่ 8',
    'size': '8',
    'weight': '800g'
}, {
    'sku': 'SKU009',
    'productName': 'สินค้าที่ 9',
    'imagePath': 'images/pp_9.png',
    'price': 675,
    'description': 'รายละเอียดสินค้าที่ 9',
    'size': '9',
    'weight': '900g'
}, {
    'sku': 'SKU0010',
    'productName': 'สินค้าที่ 10',
    'imagePath': 'images/pp_10.png',
    'price': 678,
    'description': 'รายละเอียดสินค้าที่ 10',
    'size': '10',
    'weight': '1000g'
}, {
    'sku': 'SKU0011',
    'productName': 'สินค้าที่ 11',
    'imagePath': 'images/pp_1.png',
    'price': 544,
    'description': 'รายละเอียดสินค้าที่ 11',
    'size': '11',
    'weight': '1100g'
}, {
    'sku': 'SKU0012',
    'productName': 'สินค้าที่ 12',
    'imagePath': 'images/pp_2.png',
    'price': 813,
    'description': 'รายละเอียดสินค้าที่ 12',
    'size': '12',
    'weight': '1200g'
}, {
    'sku': 'SKU0013',
    'productName': 'สินค้าที่ 13',
    'imagePath': 'images/pp_3.png',
    'price': 99,
    'description': 'รายละเอียดสินค้าที่ 13',
    'size': '13',
    'weight': '1300g'
}, {
    'sku': 'SKU0014',
    'productName': 'สินค้าที่ 14',
    'imagePath': 'images/pp_4.png',
    'price': 531,
    'description': 'รายละเอียดสินค้าที่ 14',
    'size': '14',
    'weight': '1400g'
}, {
    'sku': 'SKU0015',
    'productName': 'สินค้าที่ 15',
    'imagePath': 'images/pp_5.png',
    'price': 109,
    'description': 'รายละเอียดสินค้าที่ 15',
    'size': '15',
    'weight': '1500g'
}, {
    'sku': 'SKU0016',
    'productName': 'สินค้าที่ 16',
    'imagePath': 'images/pp_6.png',
    'price': 21,
    'description': 'รายละเอียดสินค้าที่ 16',
    'size': '16',
    'weight': '1600g'
}, {
    'sku': 'SKU0017',
    'productName': 'สินค้าที่ 17',
    'imagePath': 'images/pp_7.png',
    'price': 703,
    'description': 'รายละเอียดสินค้าที่ 17',
    'size': '17',
    'weight': '1700g'
}, {
    'sku': 'SKU0018',
    'productName': 'สินค้าที่ 18',
    'imagePath': 'images/pp_8.png',
    'price': 263,
    'description': 'รายละเอียดสินค้าที่ 18',
    'size': '18',
    'weight': '1800g'
}, {
    'sku': 'SKU0019',
    'productName': 'สินค้าที่ 19',
    'imagePath': 'images/pp_9.png',
    'price': 825,
    'description': 'รายละเอียดสินค้าที่ 19',
    'size': '19',
    'weight': '1900g'
}, {
    'sku': 'SKU0020',
    'productName': 'สินค้าที่ 20',
    'imagePath': 'images/pp_10.png',
    'price': 720,
    'description': 'รายละเอียดสินค้าที่ 20',
    'size': '20',
    'weight': '2000g'
}, {
    'sku': 'SKU0021',
    'productName': 'สินค้าที่ 21',
    'imagePath': 'images/pp_1.png',
    'price': 442,
    'description': 'รายละเอียดสินค้าที่ 21',
    'size': '21',
    'weight': '2100g'
}, {
    'sku': 'SKU0022',
    'productName': 'สินค้าที่ 22',
    'imagePath': 'images/pp_2.png',
    'price': 200,
    'description': 'รายละเอียดสินค้าที่ 22',
    'size': '22',
    'weight': '2200g'
}, {
    'sku': 'SKU0023',
    'productName': 'สินค้าที่ 23',
    'imagePath': 'images/pp_3.png',
    'price': 762,
    'description': 'รายละเอียดสินค้าที่ 23',
    'size': '23',
    'weight': '2300g'
}, {
    'sku': 'SKU0024',
    'productName': 'สินค้าที่ 24',
    'imagePath': 'images/pp_4.png',
    'price': 80,
    'description': 'รายละเอียดสินค้าที่ 24',
    'size': '24',
    'weight': '2400g'
}, {
    'sku': 'SKU0025',
    'productName': 'สินค้าที่ 25',
    'imagePath': 'images/pp_5.png',
    'price': 300,
    'description': 'รายละเอียดสินค้าที่ 25',
    'size': '25',
    'weight': '2500g'
}];

app.get('/products', (req, res) => {
    return res.send({
        productSet: productSet,
    })
})

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    return res.send({
        productSet: productSet[productId],
    })
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));