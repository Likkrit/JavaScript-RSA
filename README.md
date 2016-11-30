JavaScript-RSA
---

一个基于JavaScript的RSA公钥加密、私钥解密库

## 为什么它会出现

为了更加方便在业务中应用加解密，只需在项目中引入一个js（25kb）。

## DEMO

[https://likkrit.github.io/JavaScript-RSA/demo](https://likkrit.github.io/JavaScript-RSA/demo)

## 环境要求

- openssl（mac系统自带，windows可前往[https://doc.open.alipay.com/](https://doc.open.alipay.com/doc2/detail?treeId=58&articleId=103242&docType=1)下载）
- NodeJS

## 用法

1、 使用openssl生成rsa证书私钥，进入终端，执行：
```
openssl genrsa -out rsa_private_key.pem 1024
```

2、 获取证书Modulus值，将得到的Modulus值替换`src/entry.js`里的Modulus值
```
openssl rsa -inform PEM -modulus -noout < rsa_private_key.pem
```



3、 获取证书privateExponent值，替换`src/entry.js`里的privateExponent值
```
openssl rsa -inform PEM -text -noout < rsa_private_key.pem
```

4、 Clone或下载整个项目，终端执行：
```
npm install
```

5、 进入项目目录，执行`webpack -p`，生成`dist/rsa.min.js`文件

6、 在项目中引入`dist/rsa.min.js`，使用`rsa.encrypt(yourdata)`进行加密，使用`rsa.decrypt(encrypted)`进行解密


## 其他

该项目打包自[http://www-cs-students.stanford.edu/~tjw/jsbn/](http://www-cs-students.stanford.edu/~tjw/jsbn/)，可自行前往了解更多详情。
