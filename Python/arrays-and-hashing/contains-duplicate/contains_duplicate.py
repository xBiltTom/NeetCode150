from typing import List

class Solution:
    def has_duplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if(nums[i]==nums[j]):
                    return True
        return False
    
nums = [2,2,4,5]
if_has_duplicate = Solution().has_duplicate(nums)
print(if_has_duplicate)