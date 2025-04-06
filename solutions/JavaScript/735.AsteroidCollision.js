var asteroidCollision = function (asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {
        let shouldPush = true;

        while (
            stack.length > 0 &&
            asteroid < 0 &&
            stack[stack.length - 1] > 0
        ) {
            const top = stack[stack.length - 1];

            if (top < Math.abs(asteroid)) {
                stack.pop();
                continue;
            } else if (top === Math.abs(asteroid)) {
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
};
