class Solution {
    hasDuplicate(nums: number[]):boolean {
        const vistos = new Set<number>();
        for(const num of nums){
            if(vistos.has(num))
                return true;
            vistos.add(num);
        }
        return false;
    }
}

const nums: number[] = [2,2,1,3];
const ifHasDuplicate:boolean = new Solution().hasDuplicate(nums);
console.log(ifHasDuplicate);