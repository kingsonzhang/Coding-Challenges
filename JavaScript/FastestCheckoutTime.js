//Queue at self checkout fastest time given different amount of checkouts
function queueTime(customers, n) {
    let queue = new Array(n).fill(0); 
    customers.forEach(x => queue[queue.indexOf(Math.min(...queue))] += x);
    return Math.max(...queue);
}