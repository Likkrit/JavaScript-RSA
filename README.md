JavaScript-RSA
---

一个基于JavaScript的RSA公钥加密、私钥解密库

## 环境要求

- openssl(mac系统自带，windows可前往[https://doc.open.alipay.com/doc2/detail?treeId=58&articleId=103242&docType=1](https://doc.open.alipay.com/doc2/detail?treeId=58&articleId=103242&docType=1)下载)
- nodejs

## 用法

1、使用openssl生成rsa证书私钥，进入终端，执行：
```
openssl genrsa -out rsa_private_key.pem 1024
```

2. 获取证书Modulus值：
```
openssl rsa -inform PEM -modulus -noout < rsa_private_key.pem
```

将得到的Modulus值替换src/entry.js里的Modulus值

3. 获取证书privateExponent值：
```
openssl rsa -inform PEM -text -noout < rsa_private_key.pem
```

替换src/entry.js里的privateExponent值

4. Clone或下载整个项目，终端执行：
```
npm install
```

5. 进入项目目录，执行：
```
webpack -p
```

6. 在项目中引入dist/rsa.min.js，使用以下方法进行加密：
```
var encrypted = rsa.encrypt(yourdata);
```

使用以下方法进行解密：
```
var decrypted = rsa.decrypt(encrypted);
```

## 其他

该项目打包自[http://www-cs-students.stanford.edu/~tjw/jsbn/](http://www-cs-students.stanford.edu/~tjw/jsbn/)，可自行前往了解更多详情。

