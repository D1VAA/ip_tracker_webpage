from flask import Flask
import json
import requests


def format_ip(ip_ad):
    ip_ad = ip_ad.replace('.', '')
    size = len(ip_ad)
    dif = 3
    l = [ip_ad[i:dif + i] for i in range(0, size, dif)]
    print(l)
    formattedip = ip_ad[slice(0, 3)] + "." + ip_ad[slice(3, 6)] + "." + ip_ad[slice(6, 9)] + "." + ip_ad[slice(9, 12)]
    return formattedip


url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_OPigSXHYex5qHvm7X3Jklxv5uWjs0&ipAddress='
ip = '201.69.117253'
if not ip.replace('.', '').isnumeric():
    raise ValueError('Invalid ip address.')

if ip.count('.') != 4:
    format_ip(ip)

# app = Flask(__name__)


# @app.route('/query', methods=['POST'])
"""
def do_request():
    r = requests.get(url + str(formattedip))
    data = r.text
    j = json.loads(data)
    print(j)

"""
