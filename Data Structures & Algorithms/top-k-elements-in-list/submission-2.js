class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = new Map();

        for (const num of nums) {
            if (!res.has(num)) {
                res.set(num, 0);
            }
            res.set(num, res.get(num) + 1);
        }
        const sortRes = [...res.entries()].sort((a, b) => b[1] - a[1]);
        return sortRes.slice(0, k).map(([item]) => item);
    }
}
