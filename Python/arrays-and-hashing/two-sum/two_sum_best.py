from typing import List

class Solution():
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        vistos = {}
        for i, num, in enumerate(nums):
            complemento = target - num;
            if complemento in vistos:
                return [vistos[complemento],i]
            vistos[num] = i;
    
nums = [2,2,4,15]
indexes = Solution().twoSum(nums,4)
print(indexes)