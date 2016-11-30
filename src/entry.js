require("./rsa.js");

(function(window){
	// version : 0.2
	// 中文字符加密 <=39
	// 英文字符加密 <=117
  window.rsa = new RSAKey(
    // Encrypt Exponent,write "Exponent" usually for encrpyt with publicKey
    // if write "privateExponent", it means use privateKey to encrypt

    // extracted "Exponent" and "privateExponent" from private_key.pem using
    // openssl rsa -inform PEM -text -noout < rsa_private_key.pem
    // Or extracted "Exponent" from public key PEM file using
    // openssl rsa -pubin -inform PEM -text -noout < rsa_public_key.pem
    "10001",

    // "Modulus" extracted from private key PEM file using
    // openssl rsa -inform PEM -modulus -noout < rsa_private_key.pem
    // Or extracted from public key PEM file using
    // openssl rsa -pubin -inform PEM -modulus -noout < rsa_public_key.pem
    "C358D10B184AB7E5695B843214DA3566EF85DAD5B9AE520244B0003070FAE4F78A11BD0586AA7EAE3C9CA3F4621C94DF1FB18B9BC51A0C9D34ED555342E8473720F2CAB48265D5783491E522AB5B4BB18DB05BABC84EE8EB4CAC31F2956F685096D9D65554830CD686467AFA5228BD6E073316E82457AE10EBBEC764BD44DF57",

    // Decrypt Exponent. write "privateExponent" if you want to decrypt something with privateKey

    // extracted "Exponent" and "privateExponent" from private_key.pem using
    // openssl rsa -inform PEM -text -noout < rsa_private_key.pem
    // Or extracted "Exponent" from public key PEM file using
    // openssl rsa -pubin -inform PEM -text -noout < rsa_public_key.pem
    "00C070D4AEEB6560385E4C4BB4D29A0C95B54CD6424A439282AD8BFD03BBA94EBB1587580103A31E5D2354E4A7B1A79A791C4DD9CCC0A562DBD3F222667DB939BD38338D589AB5CFC801B517F3B4DA2752764A4724C972025FC263D4A4913C08FB86D4211DF164911820DDDE43B8DF91BDDBF8D4CCE3FA39FE85F41EE92FAD15F1"
  );
})(window);