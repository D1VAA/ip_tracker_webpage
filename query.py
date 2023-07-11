from flask import Flask, render_template, request
import requests

app = Flask(__name__, template_folder='./')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/consulta_ip')
def consulta_ip():
    data = request.json()
    url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_OPigSXHYex5qHvm7X3Jklxv5uWjs0&ipAddress="
    r = requests.get()


if __name__ == '__main__':
    Flask.run(app, debug=True, port=5050, host='0.0.0.0')
