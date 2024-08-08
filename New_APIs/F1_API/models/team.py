# models/team.py
from data import TEAMS

class TeamModel:
    @staticmethod
    def get_all():
        return TEAMS

    @staticmethod
    def get_by_id(team_id):
        return next((team for team in TEAMS if team['id'] == team_id), None)
