/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3;
    while(l1?.val !== undefined && l2?.val !== undefined) {
          console.log(l1.val, l2.val)
        let sum = +l1.val + +l2.val ;
        let carry = sum >= 10 ? 1 : 0;
        if(sum >= 10) sum -= 10;
        
        if(l3) {
            l3.next = {...l3};
            l3.val = sum;            
        } else {
            l3 = new ListNode(sum)
        }
    
        if(l1.next && carry) l1.next.val += carry;
        else if(l2.next && carry) l2.next.val += carry;
        else if(carry) {
            l3.next = {...l3};
            l3.val = carry;
        }
        
        l1 = {...l1.next};
        l2 = {...l2.next};        
    }

    while(l1?.val !== undefined) {
       let sum = +l1.val ;
        let carry = sum >= 10 ? 1 : 0;
        if(sum >= 10) sum -= 10;
        
        if(l3) {
            l3.next = {...l3};
            l3.val = sum;            
        } else {
            l3 = new ListNode(sum)
        }
    
        if(l1.next && carry) l1.next.val += carry;
        else if(carry){
            l3.next = {...l3};
            l3.val = carry;
        }
        l1 = {...l1.next};    
    }
    
    
    while(l2?.val !== undefined) {
       let sum = +l2.val ;
        let carry = sum >= 10 ? 1 : 0;
        if(sum >= 10) sum -= 10;
        
        if(l3) {
            l3.next = {...l3};
            l3.val = sum;            
        } else {
            l3 = new ListNode(sum)
        }
    
        if(l2.next && carry) l2.next.val += carry;
        else if(carry) {
            l3.next = {...l3};
            l3.val = carry;
        }
        l2 = {...l2.next};        
    }


    let result = new ListNode(l3.val);
    l3 = l3.next;

    while(l3?.val !== undefined) {
        result.next = {...result};
        result.val = l3.val;

        l3 = l3.next;
    }
    
    return result;
};

/**
9465
0942
-------
10407

0942
9465
------
10407
*/