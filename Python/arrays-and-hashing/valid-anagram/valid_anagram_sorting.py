from typing import List

class Solution:
    def isAnagram(self, s:str, t:str) -> bool:
        if len(s) != len(t) : # Si no cuentan con el mismo tamaño no pueden ser anagramas
            return False

        return sorted(s) == sorted(t); # Primero ordenamos y luego comprobamos caracter por caracter
        

s = "racecar"
t = "carrace"

print(Solution().isAnagram(s,t));
