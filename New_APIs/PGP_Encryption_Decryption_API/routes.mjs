import { Router } from 'express'
import pack from './middlewares.js'
import openpgp from 'openpgp';
const {encryptBodyCheckMiddleware,decryptBodyCheckMiddleware,keysGenerateBodyCheckMiddleware} = pack    
const router = Router();

router.post('/generateKey',keysGenerateBodyCheckMiddleware, async (request,response)=>{
    const {body} = request;
    const name = body.name;
    const email  = body.email;
    const password = body.password;
    openpgp.generateKey({
        curve: 'ed25519', 
        userIDs: [{ name: name, email: email }], // User identity
        passphrase: password // Protect the private key with a passphrase
    }).then((keyPair)=>{
        console.log(keyPair);
        return response.status(200).send({
            encryptedKey:keyPair.publicKey,
            decryptedKey:keyPair.privateKey
        })
    })
    .catch((err)=>{
        return response.status(400).send({msg:"Something went wrong"})
    })
})

router.post('/encrypt',encryptBodyCheckMiddleware, async (request,response)=>{
    const {body} = request;
    const text=body.text;
    const encryptkey = body.encryptKey;
    openpgp.readKey({ armoredKey: encryptkey })
    .then(async (publicKeyArmored)=>{
        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: text }), // input as Message object
            encryptionKeys: publicKeyArmored
        })
        return response.status(200).send({
            encryptedText:encrypted
        })
    })
    .catch((err)=>{
        return response.status(400).send({msg:"Something went wrong"})
    })
})

router.post('/decrypt',decryptBodyCheckMiddleware, async (request,response)=>{
    const {body} = request;
    const text=body.text;
    const decryptKey = body.decryptKey;
    const password = body.password;
    const decryptedtxt = await decryptText(text,decryptKey,password);
    return response.status(200).send({
        decryptedText:decryptedtxt
    })
})

async function decryptText(encryptedText, decryptkey, password) {
    const privateKeyArmored = await openpgp.decryptKey({
        privateKey: await openpgp.readPrivateKey({ armoredKey: decryptkey }),
        passphrase: password
    });

    const message = await openpgp.readMessage({
        armoredMessage: encryptedText // parse armored message
    });

    const { data: decrypted } = await openpgp.decrypt({
        message,
        decryptionKeys: privateKeyArmored
    });

    return decrypted;
}

export default router;