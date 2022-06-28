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
 var mergeNodes = function(head){
    let pointer = head;
    
    while(pointer){
        if (pointer.val === 0){
            while(pointer.next.val !== 0){
                pointer.val += pointer.next.val;
                pointer.next = pointer.next.next
            }
            
            if (pointer.next.next === null)
                pointer.next = null;
        }
        
        pointer = pointer.next;
    }
    return head;
};