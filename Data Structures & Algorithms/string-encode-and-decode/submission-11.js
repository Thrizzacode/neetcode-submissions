class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let fullStr = "";
        for (const str of strs) {
            fullStr += str.length + "#" + str;
        }
        return fullStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;

            const strLength = Number(str.slice(i, j));

            i = j + 1;
            j = i + strLength;

            result.push(str.slice(i, j));
            i = j;
        }
        return result;
    }
}
