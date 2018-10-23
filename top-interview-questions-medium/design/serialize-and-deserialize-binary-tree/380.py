import random


class RandomizedSet(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.array = []
        self.idx_dict = {}

    def insert(self, val):
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        :type val: int
        :rtype: bool
        """
        if val not in self.idx_dict:
            self.array.append(val)
            self.idx_dict[val] = len(self.array) - 1
            return True

        return False

    def remove(self, val):
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        :type val: int
        :rtype: bool
        """
        if val in self.idx_dict:
            idx = self.idx_dict[val]
            self.array[idx], self.array[len(self.array) - 1] = self.array[len(self.array) - 1], self.array[idx]
            self.idx_dict[self.array[idx]] = idx
            self.array.pop()
            self.idx_dict.pop(val, None)
            return True

        return False

    # Assume there are element in the array
    def getRandom(self):
        """
        Get a random element from the set.
        :rtype: int
        """
        ran_idx = random.randint(0, len(self.array) - 1)
        return self.array[ran_idx]
