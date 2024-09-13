from flask import Flask, request, render_template, redirect

app = Flask(__name__)

@app.route('/')
def my_form():
    return render_template('users.html')


@app.route('/login', methods=['POST'])
def form():
    name = request.args.get('name')
    lastname = request.args.get('lastname')
    username = request.args.get('username')
    phone = request.args.get('phone')
    return render_template('login.html', name=name, lastname=lastname, username=username, phone=phone)


if __name__ == "__main__":
    app.run(debug=True, port=5002)