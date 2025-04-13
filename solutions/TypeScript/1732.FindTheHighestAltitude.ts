function largestAltitude(gain: number[]): number {
    let altitude: number = 0;
    let highestAltitude: number = 0;

    for (let step of gain) {
        altitude += step;
        if (altitude > highestAltitude) {
            highestAltitude = altitude;
        }
    }

    return highestAltitude;
};