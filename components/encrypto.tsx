import * as Crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = Crypto.randomBytes(16);

const encrypt = (text) => {
  const cipher = Crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  };
}

const decrypt = (hash) => {
  const decipher = Crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

  return decrpyted.toString();
};

const Encrypto = () => {
  const textHash = encrypt('Hello, World');
  const decryptedText = decrypt(textHash);

  return (
    <>
      <div>Encrypted: { textHash.content }</div>
      <div>Decrypted: { decryptedText }</div>
    </>
  );
};

export default Encrypto;