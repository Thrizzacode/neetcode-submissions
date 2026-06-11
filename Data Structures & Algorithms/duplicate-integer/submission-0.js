class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newArray = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (newArray.has(nums[i])) {
                return true;
            }
            newArray.add(nums[i]);
        }

        return false;
    }
}
