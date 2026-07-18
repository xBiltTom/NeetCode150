class SolutionBest {

    twoSum(nums: number[], target: number) : number[] {
        const vistos: Record<number,number> = {};
        for(let i=0; i<nums.length;i++){
            const complemento = target - nums[i];
            if(complemento in vistos){
                return [vistos[complemento],i]
            }
            vistos[nums[i]] = i;
        }
        return [];
    }

}

const numsB: number[] = [2,7,11,15]; 
const indexesB:number[] = new SolutionBest().twoSum(numsB, 9);
console.log(indexesB);
