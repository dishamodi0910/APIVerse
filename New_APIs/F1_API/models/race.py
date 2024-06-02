from data import RACES

class RaceModel:
    @staticmethod
    def get_all():
        return RACES

    @staticmethod
    def get_by_id(race_id):
        return next((race for race in RACES if race['id'] == race_id), None)
