var largestAltitude = function (gain) {
    let altitude = 0, highestAltitude = 0;

    for (step of gain) {
        altitude += step;
        if (altitude > highestAltitude) {
            highestAltitude = altitude;
        }
    }

    return highestAltitude;
};