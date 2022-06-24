/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let mergedList;
    
    if(!list1 && !list2) return list1;
    
    while(list1 && list2) {
        while(list1 && list2 && list1.val <= list2.val) {
            if(mergedList) {
                mergedList.next = {...mergedList};
                mergedList.val = list1.val;
            } else {
                mergedList = new ListNode(list1.val);
            }
            
            list1 = list1.next
        }
        while(list1 && list2 && list2.val <= list1.val) {
            if(mergedList) {
                mergedList.next = {...mergedList};
                mergedList.val = list2.val;
            } else {
                mergedList = new ListNode(list2.val);
            }
            
            list2 = list2.next
        }        
    }
    
    if(list1) {
        while(list1) {
            if(mergedList) {
                mergedList.next = {...mergedList};
                mergedList.val = list1.val;
            } else {
                mergedList = new ListNode(list1.val);
            }
            
            list1 = list1.next
        }
    }
    
    if(list2) {
        while(list2) {
            if(mergedList) {
                mergedList.next = {...mergedList};
                mergedList.val = list2.val;
            } else {
                mergedList = new ListNode(list2.val);
            }
            
            list2 = list2.next
        }
    }
    
    let sortedList;
    
    while(mergedList) {
        if(sortedList) {
            sortedList.next = {...sortedList};
            sortedList.val = mergedList.val;
        } else {
            sortedList = new ListNode(mergedList.val);
        }
        
        mergedList = mergedList.next;
    }
    
    return sortedList;
};