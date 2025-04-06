function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    for (const asteroid of asteroids) {
        let shouldPush: boolean = true;

        while (
            stack.length > 0 &&
            asteroid < 0 &&
            stack[stack.length - 1] > 0
        ) {
            const top: number = stack[stack.length - 1];
            const absAsteroid: number = Math.abs(asteroid);

            if (top < absAsteroid) {
                stack.pop();
                continue;
            }

            if (top === absAsteroid) {
                stack.pop();
            }

            shouldPush = false;
            break;
        }

        if (shouldPush) {
            stack.push(asteroid);
        }
    }

    return stack;
}
