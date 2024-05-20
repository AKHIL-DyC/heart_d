from flask import Flask, jsonify, request
from flask_cors import CORS,cross_origin
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the trained model
f_name = "model.sav"
loaded_model = pickle.load(open(f_name, 'rb'))

# Define the columns used in the model
columns = ['age', 'sex', 'chest pain type', 'resting bp s', 'cholesterol', 'fasting blood sugar', 'resting ecg', 'max heart rate', 'exercise angina', 'oldpeak', 'ST slope']

@app.route('/diagnose', methods=['POST'])
@cross_origin(supports_credentials=True)
def diagnose():
    data = request.get_json()
    values = data.get('numbers')
    if not values or not isinstance(values, list) or len(values) != len(columns):
        return jsonify({'error': 'Invalid data'}), 400

    values_reshaped = np.array(values).reshape(1, -1)
    df_values = pd.DataFrame(values_reshaped, columns=columns)

    # Make prediction
    prediction = loaded_model.predict(df_values)[0]

    # Return the result
    result = 0 if prediction == 0 else 1
    return jsonify({'result': result})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
