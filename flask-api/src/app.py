from flask import Flask
from config import config

# Routes
from routes import Movie
from routes import Temperatura

app = Flask(__name__)

def page_not_found(error):
  return "<h1> Page not found </h1>", 404

if __name__ == '__main__':
    app.config.from_object(config['development'])

    # BluePrint
    app.register_blueprint(Temperatura.main, url_prefix='/api/temperatura')
    app.register_blueprint(Movie.main, url_prefix='/api/movies')

    # Error handlers
    app.register_error_handler(404, page_not_found)
    app.run()
