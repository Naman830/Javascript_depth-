import { increment, getCount } from "./counter.js";
increment();
console.log(getCount()); // 1

// 'count' is not importable — it's private to counter.js
