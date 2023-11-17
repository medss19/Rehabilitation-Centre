from flask import Flask, request, render_template, redirect, url_for, session, flash
import mysql.connector

app = Flask(__name__)
app.secret_key = 'secret44'

# MySQL database configuration
db_config = {
    'user': 'root',
    'password': '123456789qwertyQ@',
    'host': 'localhost',
    'database': 'Rehabilitationcredentials',
}

conn = mysql.connector.connect(**db_config)

@app.route('/')
def home():
    if 'username' in session:
        return f'Hello, {session["username"]}!'
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()

    if user:
        session['username'] = username
        return redirect(url_for('home'))
    else:
        flash('Invalid credentials. Please try again.')
        return redirect(url_for('home'))

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
