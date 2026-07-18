from typing import List

class Solution:

    def has_duplicate(self, nums: List[int]) -> bool:
        vistos = set()
        for num in nums:
            if num in vistos:
                return True
            vistos.add(num)
        return False
    
nums = [2,2,4,5]
if_has_duplicate = Solution().has_duplicate(nums)
print(if_has_duplicate)