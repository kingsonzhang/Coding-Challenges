function reverseList(head){
    if (head === null)
        return head;
    else{
        let currentLocation = head;
        let nextLocation = head.next;
        head.next = null;
        while (nextLocation){
            currentLocation = nextLocation;
            nextLocation = nextLocation.next;
            currentLocation.next = head;
            head = currentLocation;
        }
        return head;
    }
};