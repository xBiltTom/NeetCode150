class Solution{
    isAnagram(s:string, t:string):boolean{
        if(s.length != t.length){
            return false;
        }

        let sortS = s.split('').sort().join();
        let sortT = t.split('').sort().join();

        return sortS == sortT;
    }
}

let s = "racecar";
let t = "carrace";

console.log(new Solution().isAnagram(s,t));