class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        altitude, highest_altitude = 0, 0

        for step in gain:
            altitude += step
            if altitude > highest_altitude:
                highest_altitude = altitude

        return highest_altitude
