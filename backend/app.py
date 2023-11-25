from flask import Flask, jsonify
from routes.auth import auth
from extensions import login_manager
from models.user import User, db
from dotenv import load_dotenv
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
login_manager.init_app(app)

load_dotenv()

# secret key for session management
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

# database config
app.config["SQLALCHEMY_DATABASE_URI"] = f'postgresql://root:{os.getenv("postgres_db_pass")}@localhost/optiorganizer'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)  # Initialize database with app

# blueprint registrations
app.register_blueprint(auth, url_prefix="/api")


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


with app.app_context():
    db.drop_all()
    db.create_all()


@app.route("/")
def home():
    return "Welcome!"


@app.route('/test_db')
def test_db():
    try:
        user = User.query.first()
        if user:
            return jsonify({'message': f'User found: {user.username}'})
        else:
            return jsonify({'message': 'No users found'})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == "__main__":
    app.run(debug=True)
