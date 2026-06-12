class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        for (const [num, freq] of count.entries()) {
            bucket[freq].push(num);
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const item of bucket[i]) {
                res.push(item);
                if (res.length === k) return res;
            }
        }
    }
}
