# topics = ["设计"]


class ParkingSystem:
    """
    time O(1), space O(1)
    """
    def __init__(self, big: int, medium: int, small: int):
        self.park = [big, medium, small]

    def addCar(self, carType: int) -> bool:
        if self.park[carType - 1] == 0:
            return False
        self.park[carType - 1] -= 1
        return True


# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)
