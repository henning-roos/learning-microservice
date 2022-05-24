import logging
from flask import Flask, redirect

LOGGER = logging.getLogger("main")

app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def home():
    return redirect("/pets/")

@app.route('/pets/', methods=['GET', 'POST'])
def pets():
    return "Hello World!"

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    app.run(host='0.0.0.0', port=5000)
