import time
import json
import decimal
import simplejson as json
from uuid import UUID
from datetime import datetime
from flask_cors import CORS
from flaskext.mysql import MySQL
from flask import Flask, jsonify, request, make_response

app = Flask(__name__)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'new_temp_db'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
conn = mysql.connect()
cursor = conn.cursor()
CORS(app)

@app.route('/results', methods=['GET'])
def view():
  start_date = request.args.get('start_date')
  end_date = request.args.get('end_date')
  if start_date and end_date:
    query = """
      SELECT * FROM client_operations
      WHERE create_date >= (?)
      AND create_data <= (?)
    """
    cursor.execute(query, [start_date, end_date])
    return
  else:
    query = "SELECT * FROM client_operations"
    cursor.execute(query)
  data = cursor.fetchall()
  print len(data)

  return jsonify(data)

@app.route('/accounts', methods=['GET'])
def index():
  query = """
    SELECT
        s.skin,
        a.site_name,
        p.proxy_location,
        a.percent,
        a.username,
        a.`password`
    FROM accounts a
    LEFT JOIN sites s ON s.`name` = a.site_name
    LEFT JOIN proxies p ON p.id = a.proxy_id
  """
  cursor.execute(query)
  data = cursor.fetchall()
  print len(data)

  return jsonify(data)

if __name__ == '__main__':
  app.run(port=5001, debug=True)