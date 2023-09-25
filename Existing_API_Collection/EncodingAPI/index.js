// Purpose: To demonstrate the use of Encoding API in JavaScript.
//TextEncoder(label,options) : Constructor for TextEncoder
//TextDecoder(label,options) : Constructor for TextDecoder
const utfencoder = new TextEncoder();
const iso_encoder = new TextEncoder("iso-8859-2");
const utf_decoder = new TextDecoder();
const iso_decoder = new TextDecoder("iso-8859-2");

var text = "GDSC DDU";
console.log('------------------');
const utfencodedMsg = utfencoder.encode(text);
console.log(utfencodedMsg);            //Encoded message
const iso_encodedMsg = iso_encoder.encode(text);
console.log(iso_encodedMsg);            //Encoded message
console.log('------------------');
const utf_decodedMsg = utf_decoder.decode(utfencodedMsg);  //By default : 'utf-8'
console.log(utf_decodedMsg);            //Decoded message
const iso_decodedMsg = iso_decoder.decode(iso_encodedMsg);
console.log(iso_decodedMsg);            //Decoded message
console.log('------------------');
console.log(iso_decoder.encoding);
console.log('------------------');  
const utf8 = new Uint8Array(text.length);
const encodeintoText = utfencoder.encodeInto(text,utf8);    //Encode into
console.log(encodeintoText);
console.log(encodeintoText.read);
console.log(encodeintoText.written);

//TextEncoderStream() : Constructor for TextEncoderStream
const utf8Stream = new TextEncoderStream();
const utf8Writer = utf8Stream.writable.getWriter();
utf8Writer.write(text);
utf8Writer.close();
const utf8ReadableStream = utf8Stream.readable;
const utf8Reader = utf8ReadableStream.getReader();
utf8Reader.read().then(({done,value})=>{
    console.log(done,value);
});
console.log('------------------');

//TextDecoderStream() : Constructor for TextDecoderStream
const textdecoderstream = new TextDecoderStream();
console.log(textdecoderstream);
console.log(textdecoderstream.readable);
console.log(textdecoderstream.writable);
textdecoderstream.ignoreBOM = true;
console.log('------------------');

