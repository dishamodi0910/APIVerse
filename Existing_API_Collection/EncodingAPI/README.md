# Encoding API

Encoding API is used for working with texts and has 4 interfaces as follows :

- TextEncoder : It takes a string value as input and converts it to a stream of bytes.
- TextDecoder : It takes a stream of bytes as input and decodes it to return us the original data.
- TextEncoderStream : Text Encoder + Stream
- TextDecoderStream : Text Decoder + Stream

# Text Encoder

Text encoder is used to convert a string to a stream of encoded characters.

### Syntax

```js
const encoder = new TextEncoder();

```

### Properties

- **Encoding** : Returns the name of the encoding algorithm used by the specific TextEncoder instance.

### Methods

1. *encode()* : Returns a Uint8Array containing the text encoded as UTF-8.
2. *encodeInto(string,utf8)* : Encodes a string into an array of bytes, and writes the result into the given Uint8Array before returning it. If the array is too small, it will throw a TypeError.It returns a dictionary object with two properties:
   - **read** : The number of UTF-8 bytes read from string.
   - **written** : The number of bytes written into utf8.

## Text Decoder

Text decoder is used to get the decoded text for some specific encoded text.

### Syntax

```js
const decoder = new TextDecoder();

```

### Properties

- **fatal** : It is a boolean value which is used to indicate whether the decoder should throw an error or not whenever it has encountered malformed data. The default value is false.
- **ignoreBOM** : It is a boolean value which is used to indicate whether the decoder should ignore the [BOM (Byte Order Mark)](https://www.w3.org/International/questions/qa-byte-order-mark) or not. The default value is false.
- **encoding** : A string containing the name of the decoder used, such as "utf-8" or "iso-8859-2". The default value is "utf-8".

### Methods

1. *TextDecoder.decode()* : Returns decoded string

# TextEncoderStream

TextEncoderStream interface is used to convert stream of strings into bytes in UTF-8 encoding.
Stream + TextEncoder = textEncoderStream

### Syntax

```js
const textEncoderStream = new TextEncoderStream();

```

### Properties

- **readable** : Returns a readable stream.
- **writable** : Returns a writable stream.
- **encoding** : Returns the name of the encoding algorithm used by the specific TextEncoder instance.

### Methods

1. *TextEncoderStream.read()* : Returns a promise that resolves with an object containing two properties:
   - **value** : A Uint8Array containing the encoded bytes.
   - **done** : A boolean indicating whether the stream has been fully read yet.

2. *TextEncoderStream.getWriter()* : Returns a writer that can be used to write data to the stream.
3. *TextEncoderStream.pipeThrough()* : Pumps the given ReadableStream through the this writable stream, returning a ReadableStream of the same type as the source stream.
4. *TextEncoderStream.pipeTo()* : Pipes this writable stream to a given writable stream destination, returning a promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.

# TextDecoderStream

TextDecoderStream interface is used to convert stream of bytes into strings in UTF-8 encoding.
Stream + TextDecoder = textDecoderStream

### Syntax

```js
const textDecoderStream = new TextDecoderStream();

```

### Properties

- **readable** : Returns a readable stream.
- **writable** : Returns a writable stream.
- **encoding** : Returns the name of the encoding algorithm used by the specific TextDecoder instance.
- **fatal** : It is a boolean value which is used to indicate whether the decoder should throw an error or not whenever it has encountered malformed data. The default value is false.
- **ignoreBOM** : It is a boolean value which is used to indicate whether the decoder should ignore the [BOM (Byte Order Mark)](https://www.w3.org/International/questions/qa-byte-order-mark) or not. The default value is false.

### Methods

1. *TextDecoderStream.read()* : Returns a promise that resolves with an object containing two properties:
   - **value** : A string containing the decoded text.
   - **done** : A boolean indicating whether the stream has been fully read yet.
   - **error** : A boolean indicating whether the stream has been errored yet.
   - **reason** : A string containing the reason for the error.
   - **read** : The number of bytes read from the source.
   - **written** : The number of bytes written to the destination.

2. *TextDecoderStream.getWriter()* : Returns a writer that can be used to write data to the stream.
3. *TextDecoderStream.pipeThrough()* : Pumps the given ReadableStream through the this writable stream, returning a ReadableStream of the same type as the source stream.
4. *TextDecoderStream.pipeTo()* : Pipes this writable stream to a given writable stream destination, returning a promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.