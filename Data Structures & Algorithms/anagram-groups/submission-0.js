class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = new Map()
        const sortStr = strs.map(str => [...str].sort().join(''))
        for(let i = 0;i < strs.length;i++){
            if(!strMap.has(sortStr[i])){
                strMap.set(sortStr[i],[])
            }
            strMap.get(sortStr[i]).push(strs[i])
        }
        return [...strMap.values()]
        
    }
}
