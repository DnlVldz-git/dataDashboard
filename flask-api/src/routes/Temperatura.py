from flask import Blueprint, jsonify
# import numpy as np

main = Blueprint('movie_blueprint', __name__)

@main.route("/")
def get_movies():
    response = {
        "Dia": day,
        "temperatura maxima predecida": float(predicted_temperature[0])
    }
    return jsonify(response)
