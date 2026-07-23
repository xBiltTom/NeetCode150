class Solution{
    isAnagram(s:string, t:string) : boolean {
        if(s.length !== t.length){
            return false;
        }

        const count: number[] = new Array(26).fill(0);
        for(let i=0; i<s.length;i++){
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        
        return count.every((val:number) => val === 0);
    }
}

let s = "racecar";
let t = "carrace";

console.log(new Solution().isAnagram(s,t));