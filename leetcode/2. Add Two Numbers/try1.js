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
  const head = new ListNode();
  let cursor = head;
  
  let ceil = 0;
  while(l1 != null) {
    cursor.next = new ListNode();
    cursor = cursor.next;
    if (l2) {
      cursor.val = (ceil === 1) ? (1 + (l1.val + l2.val)) % 10 : (l1.val + l2.val) % 10;
      ceil = (l1.val + l2.val) >= 10 ? 1 : 0;
      
      l1 = l1.next;
      l2 = l2.next;
    } else {
      cursor.val = l1.val;
      l1 = l1.next;
    }
  }
  return head.next;
};