from flask import Flask, request, jsonify

app = Flask(__name__)
data = {}

@app.route('/account', methods=['GET'])
def get_account():
    return jsonify(data)

@app.route('/addaccount', methods=['POST'])
def add_account():
    body = request.json
    data[body['id']] = body
    return jsonify({"message": "Account added"}), 201

@app.route('/account/<id>', methods=['PUT'])
def update_account(id):
    if id in data:
        body = request.json
        data[id].update(body)
        return jsonify({"message": "Account updated"})
    return jsonify({"error": "Not found"}), 404

@app.route('/account/<id>', methods=['DELETE'])
def delete_account(id):
    if id in data:
        del data[id]
        return jsonify({"message": "Account deleted"})
    return jsonify({"error": "Not found"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
