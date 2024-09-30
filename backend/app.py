from flask import Flask, jsonify, request
from flask_cors import CORS,cross_origin
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# Define the columns used in the model
columns = ['age', 'sex', 'chest pain type', 'resting bp s', 'cholesterol', 'fasting blood sugar', 'resting ecg', 'max heart rate', 'exercise angina', 'oldpeak', 'ST slope']
healthydata=[45, 1, 1, 120, 180, 0, 0, 160, 0, 0.0, 1]
unhealthydata=[65, 1, 3, 140, 280, 1, 2, 120, 1, 2.3, 2]
def prediction(input_data):
    values_reshaped = np.array(input_data).reshape(1,-1)
    values = pd.DataFrame(values_reshaped, columns = columns)
    prediction = loaded_model.predict(values)[0]
    prediction_prob = loaded_model.predict_proba(values)
   
    if prediction == 1:
        probability=round(prediction_prob[0][1], 2)
        print(
            probability
        )
        return [1,probability]
    else:
        probability=round(prediction_prob[0][0], 2)
        print(
            probability
        )
        return [0,probability]
        #(f"Prediction Probability: {round(prediction_prob[0][0], 2)}")'''

# Load the trained model
f_name = "heart_disease_prediction_model.pkl"
loaded_model = joblib.load(f_name)
@app.route('/')
def hello():
    return "Hello"
@app.route('/diagnose', methods=['POST'])
@cross_origin(supports_credentials=True)
def diagnose():
    data = request.get_json()
    values = data.get('numbers')
    if not values or not isinstance(values, list) or len(values) != len(columns):
        return jsonify({'error': 'Invalid data'}), 400
 # Ensure numbers are converted to native Python int
    values = [int(x) for x in values]
    # Return the result
    result = prediction(values)
    #result = 0 if prediction == 0 else 1
    return jsonify({'result': result})

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)