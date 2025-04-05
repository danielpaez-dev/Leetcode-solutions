function removeStars(s: string): string {
    const stack: Stack = new Stack();

    for (const c of s) {
        if (c === "*") {
            stack.pop();
        } else {
            stack.push(c);
        }
    }

    return stack.toString();
};

class Stack {
    private _stack: string[];

    constructor() {
        this._stack = [];
    }

    push(c: string): void {
        this._stack.push(c);
    }

    pop(): void {
        if (!this.isEmpty()) {
            this._stack.pop();
        }
    }

    isEmpty(): boolean {
        return this._stack.length === 0;
    }

    toString(): string {
        return this._stack.join('');
    }
}