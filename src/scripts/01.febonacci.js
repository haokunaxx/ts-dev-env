"use strict";
// 斐波那契数列：第一位为1，第二位也为1，之后每一位的值是前两位的和。
// 递归
const myFibonacci = (num) => {
    if (num <= 1) {
        return 1;
    }
    return myFibonacci(num - 1) + myFibonacci(num - 2);
};
// 动态规划
const myOptimizedFibonacci1 = (num) => {
    const arr = [1, 1];
    for (let i = 2; i <= num; i++) {
        if (!arr[i]) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    return arr[num];
};
// 动态规划 - 优化
const myOptimizedFibonacci2 = (num) => {
    if (num <= 1) {
        return 1;
    }
    let prev = 1, cur = 1;
    for (let i = 2; i < num; i++) {
        cur = cur + prev;
        prev = cur - prev;
    }
    return cur + prev;
};
console.time('myFibonacci运行时间');
console.log(myFibonacci(24));
console.log(myFibonacci(50));
console.timeEnd('myFibonacci运行时间');
console.time('myOptimizedFibonacci1运行时间');
console.log(myOptimizedFibonacci1(24));
console.log(myOptimizedFibonacci1(50));
console.timeEnd('myOptimizedFibonacci1运行时间');
console.time('myOptimizedFibonacci2运行时间');
console.log(myOptimizedFibonacci2(24));
console.log(myOptimizedFibonacci2(50));
console.timeEnd('myOptimizedFibonacci2运行时间');
