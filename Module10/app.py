from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Flask on the home route!"

@app.route("/about")
def about():
    return "This is the about page."

@app.route("/user/<name>")
def user(name):
    return "Hello, " + name

@app.route("/favGame/<game>")
def fav_game(game):
    return "Your favorite game is " + game

if __name__ == "__main__":
    app.run(debug=True)