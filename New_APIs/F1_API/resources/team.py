from flask_restful import Resource
from models.team.py import TeamModel

class TeamResource(Resource):
    def get(self, team_id=None):
        if team_id:
            team = TeamModel.get_by_id(team_id)
            if team:
                return team, 200
            return {'message': 'Team not found'}, 404
        return TeamModel.get_all(), 200
