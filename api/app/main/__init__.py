from flask import Blueprint, jsonify
from datetime import datetime

bp = Blueprint('main', __name__)



@bp.route('/time')
def time():
    return jsonify({
        'time': datetime.now().strftime("%H:%M:%S")
    })
