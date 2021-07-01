# save this as app.py
from flask import Flask, escape, request
from flaskoidc import FlaskOIDC
from flaskoidc.config import BaseConfig


# Custom configuration class, a subclass of BaseConfig
class CustomConfig(BaseConfig):
    DEBUG = True


# app = Flask(__name__)

app = FlaskOIDC(__name__)
app.config.from_object(CustomConfig)


@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'


@app.route('/auth')
def auth1():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'


@app.route('/login')
def login1():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'


if __name__ == '__main__':
    app.run("0.0.0.0", "5000")