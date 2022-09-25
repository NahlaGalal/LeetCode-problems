class MyCircularQueue {
    arr: number[];
    length: number;
    
    constructor(k: number) {
        this.arr = [];
        this.length = k;
    }

    enQueue(value: number): boolean {
        if(this.arr.length === this.length) return false;
        this.arr.push(value);
        return true;
    }

    deQueue(): boolean {
        if(!this.arr.length) return false;
        this.arr.shift();
        return true;
    }

    Front(): number {
        if(this.arr.length) return this.arr[0];
        return -1;
    }

    Rear(): number {
        if(this.arr.length) return this.arr[this.arr.length - 1];
        return -1;
    }

    isEmpty(): boolean {
        return !this.arr.length;
    }

    isFull(): boolean {
        return this.arr.length === this.length;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */