function climbStairs(n) {
    let steps = [0, 1, 2];
    for (let i = 3; i <= n; i++)
        steps.push(steps[i-1] + steps[i-2]);
    return steps[n];
}