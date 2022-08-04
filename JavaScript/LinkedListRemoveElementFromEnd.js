function removeNthFromEnd(head, n) {
    let length = 0;
    let location = head;
    while (location){
        location = location.next;
        length++;
    }
    
    if (length < 2)
        head = null;
    else{
        location = head;
        let index = length - n;
        if (index === 0)
            head = head.next;
        else{
            for (let i = 0; i < index - 1; i++)
                location = location.next;
            location.next = location.next.next;
        }
    }
    return head;
};