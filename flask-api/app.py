from flask import Flask, request, jsonify
from flask_cors import CORS
import matplotlib.pyplot as plt
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/describe', methods=['POST'])
def handle_post():
    data = request.json.get('data')
    df = pd.DataFrame(data['data'], columns=data['names'])

    df = df.apply(pd.to_numeric, errors='coerce')

    plt.plot(df)

    column_averages = df.mean()
    
    # Convert the column averages to a JSON object
    column_averages_json = column_averages.to_json()

    print(column_averages_json)
    
    # Return the column averages in a Flask response
    return jsonify(column_averages_json)