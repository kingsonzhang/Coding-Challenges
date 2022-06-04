function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    let count = 0;
    while(head != null){
      head = head.next;
      count++;
    }
    return count;
  }
  
  function count(head, data) {
    let count = 0;
    while (head != null){
      if (head.data == data)
        count++;
      head = head.next;
    }
    return count;
}