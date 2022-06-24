/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let reversedList;
    if(!head) return head;
    
    while(head && head.val !== undefined) {
        
        if(reversedList) {
            reversedList.next = {...reversedList};
            reversedList.val = head.val;
        } else {
            reversedList = new ListNode(head.val);
        }
        
        head = {...head.next};
    }
    
    
    
    return reversedList;
};