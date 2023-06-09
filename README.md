# Back-end-products-list
Assignment Tests  จัดทำเว็บไซต์แสดงสินค้าโดยใช้ Node js ส่วนงาน BACK-END (API) เป็นส่วนข้อมูลสินค้า เก็บเป็นรูปแบบ  JSON จำนวน 25 รายการ ซึ่งรายการสินค้าประกอบด้วยข้อมูลดังนี้
- SKU สินค้า
- ชื่อสินค้า
- Path หรือ Link รูปภาพ
- ราคาสินค้า
- รายละเอียดสินค้า
- ขนาดสินค้า
- น้ำหนักสินค้า
(demo data)
## Requirements
-   Node v18.15.0
-   Git

## คำแนะนำ
 - สร้าง โฟล์เดอร์โปรเจ็ค 
 > `mkdir product_api`
- Clone the repo and install the dependencies.
> `git clone https://github.com/suwanut/back-end-products-list.git`
- เข้าโปรเจ็ค 
> `cd product_api`
 - ลง package ต่างๆ  
> `npm install`

โปรเจ็คนี้ใช้ (package.json)
  
          {
      "name": "product_api",
      "version": "1.0.0",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon server",
        "start": "node server.js"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "body-parser": "^1.20.2",
        "cors": "^2.8.5",
        "express": "^4.18.2",
        "nodemon": "^2.0.22"
      },
      "description": ""
    }
    
- เปิดใช้งาน servers  (run project)
> `node server.js`
[PORT:4000]
Open  [http://localhost:4000](http://localhost:4000/) 

## [API PRODUCT ALL]
> `localhost:4000/products `
>
## [API SINGLE PRODUCT  ]
> `localhost:4000/products/0 `
	(id ตามลำดับ การแสดง)
