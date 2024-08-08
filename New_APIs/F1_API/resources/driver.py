from flask_restful import Resource
from models.driver.py import DriverModel

class DriverResource(Resource):
    def get(self, driver_id=None):
        if driver_id:
            driver = DriverModel.get_by_id(driver_id)
            if driver:
                return driver, 200
            return {'message': 'Driver not found'}, 404
        return DriverModel.get_all(), 200
