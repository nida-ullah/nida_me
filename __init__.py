import os
from flask import Flask, app


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_mapping(
        secret_key="nuk",
        DATABASE=os.path.join(app.instance_path, "flask.sqlite")
    )
    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def index():
        return "<p>hello world</p>"

    return app
