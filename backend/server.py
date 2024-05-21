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

def prediction(input_data):
    values_reshaped = np.array(input_data).reshape(1,-1)
    values = pd.DataFrame(values_reshaped, columns = columns)
    
    prediction = loaded_model.predict(values)[0]
    prediction_prob = loaded_model.predict_proba(values)

    return prediction
    #TODO: Do the necessary flask stuff to display the below
    '''
    if prediction == 1:
        return 1
        #(f"Prediction Probability: {round(prediction_prob[0][1], 2)}")
    else:
        return 0
        #(f"Prediction Probability: {round(prediction_prob[0][0], 2)}")'''

# Load the trained model
f_name = "heart_disease_prediction_model.pkl"
loaded_model = joblib.load(f_name)

@app.route('/diagnose', methods=['POST'])
@cross_origin(supports_credentials=True)
def diagnose():
    data = request.get_json()
    values = data.get('numbers')
    if not values or not isinstance(values, list) or len(values) != len(columns):
        return jsonify({'error': 'Invalid data'}), 400

    # Return the result
    result = prediction(values)
    #result = 0 if prediction == 0 else 1
    return jsonify({'result': result})

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)