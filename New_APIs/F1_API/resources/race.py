from flask_restful import Resource
from models.race.py import RaceModel

class RaceResource(Resource):
    def get(self, race_id=None):
        if race_id:
            race = RaceModel.get_by_id(race_id)
            if race:
                return race, 200
            return {'message': 'Race not found'}, 404
        return RaceModel.get_all(), 200
