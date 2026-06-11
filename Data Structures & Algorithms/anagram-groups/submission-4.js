class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();

        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (const s of str) {
                count[s.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const key = count.join(",");
            if (!res.has(key)) {
                res.set(key, []);
            }
            res.get(key).push(str);
        }
        return [...res.values()];
    }
}
