class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = nums.length - 1; j > 0; j--) {
                if (nums[i] + nums[j] === target) {
                    map.push([i, j]);
                }
            }
        }
        const diffMap = map.map((item) => {
            const diff = item[1] - item[0];
            return diff;
        });

        const minNum = Math.min(...diffMap.filter((n) => n > 0));
        const minIndex = diffMap.findIndex((n) => n === minNum);
        return map[minIndex];

    }
}
