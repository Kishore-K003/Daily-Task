from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

API_KEY = "e4a99b4d3dface5c86566c2d"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert_currency():
    data = request.get_json()

    # Validate amount
    try:
        amount = float(data.get('amount', 0))
        if amount <= 0:
            return jsonify({"error": "Enter a valid amount greater than 0"}), 400
    except ValueError:
        return jsonify({"error": "Amount must be a number"}), 400

    from_currency = data.get('from')
    to_currency = data.get('to')

    if not from_currency or not to_currency:
        return jsonify({"error": "Currency codes are required"}), 400

    try:
        # Get latest rates for "from" currency
        url = f"https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{from_currency}"
        response = requests.get(url).json()
        print(response)  # Debug

        if response["result"] == "success":
            rates = response["conversion_rates"]
            if to_currency in rates:
                converted = amount * rates[to_currency]
                return jsonify({"converted": round(converted, 2)})
            else:
                return jsonify({"error": f"Currency {to_currency} not found"}), 400
        else:
            return jsonify({"error": response.get("error-type", "Conversion failed")}), 400

    except Exception as e:
        return jsonify({"error": f"Server error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
