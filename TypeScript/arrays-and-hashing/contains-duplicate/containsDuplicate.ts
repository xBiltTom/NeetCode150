class Solution {

    hasDuplicate(nums: number[]) : boolean {
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]===nums[j])
                    return true;
            }
        }
        return false;
    }

}

const nums: number[] = [2,2,1,3];
const ifHasDuplicate:boolean = new Solution().hasDuplicate(nums);
console.log(ifHasDuplicate);