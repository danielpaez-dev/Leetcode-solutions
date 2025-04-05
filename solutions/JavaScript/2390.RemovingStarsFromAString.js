function removeStars(s) {
    const stack = new Stack();

    for (const c of s) {
        if (c === "*") {
            stack.pop();
        } else {
            stack.push(c);
        }
    }

    return stack.toString();
}

class Stack {
    constructor() {
        this._stack = [];
    }

    push(c) {
        this._stack.push(c);
    }

    pop() {
        if (!this.isEmpty()) {
            this._stack.pop();
        }
    }

    isEmpty() {
        return this._stack.length === 0;
    }

    toString() {
        return this._stack.join('');
    }
}
