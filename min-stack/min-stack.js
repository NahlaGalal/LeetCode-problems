
var MinStack = function() {
    this.head = null;
    this.next = null;
    this.min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.next = {...this}
    this.head = val;
    if(val < this.min) this.min = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.head = this.next.head;
    this.min = this.next.min;
    this.next = this.next.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */