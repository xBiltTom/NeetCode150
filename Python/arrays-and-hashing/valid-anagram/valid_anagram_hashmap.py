class Solution:
    def isAnagram(self, s:str, t:str) -> bool:
        if len(s) != len(t) : #Si ambas cadenas no tienen el mismo tamaño no pueden ser anagramas
            return False

        countS, countT = {}, {} # Creamos 2 diccionarios donde guardaremos la frecuencia con la que aparecede cada caracter en cada cadena

        for i in range(len(s)):
            countS[s[i]] = countS.get(s[i],0) + 1
            countT[t[i]] = countT.get(t[i],0) + 1

        return countS == countT;    

s = "racecar"
t = "carrace"

print(Solution().isAnagram(s,t));