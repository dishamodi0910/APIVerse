# app.py
from flask import Flask
from flask_restful import Api
from resources.driver import DriverResource
from resources.team import TeamResource
from resources.race import RaceResource

app = Flask(__name__)
api = Api(app)

api.add_resource(DriverResource, '/drivers', '/drivers/<int:driver_id>')
api.add_resource(TeamResource, '/teams', '/teams/<int:team_id>')
api.add_resource(RaceResource, '/races', '/races/<int:race_id>')

if __name__ == '__main__':
    app.run(debug=True)
