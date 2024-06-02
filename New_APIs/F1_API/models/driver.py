from data import DRIVERS

class DriverModel:
    @staticmethod
    def get_all():
        return DRIVERS

    @staticmethod
    def get_by_id(driver_id):
        return next((driver for driver in DRIVERS if driver['id'] == driver_id), None)
