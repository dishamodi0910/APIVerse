from transformers import MarianMTModel, MarianTokenizer
import sys
import json

def translate(text, src_lang, tgt_lang):
    model_name = f'Helsinki-NLP/opus-mt-{src_lang}-{tgt_lang}'
    model = MarianMTModel.from_pretrained(model_name)
    tokenizer = MarianTokenizer.from_pretrained(model_name)

    translated = model.generate(**tokenizer(text, return_tensors="pt", padding=True))
    translated_text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]

    return translated_text[0]

if __name__ == "__main__":
    input_text = sys.argv[1]
    src_lang = sys.argv[2]
    tgt_lang = sys.argv[3]
    result = translate(input_text, src_lang, tgt_lang)
    print(json.dumps({"translated_text": result}))
