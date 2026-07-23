# Valid Anagram 🔤

- **Dificultad:** Easy
- **Tema:** Arrays & Hashing
- **Link:** [NeetCode - Valid Anagram](https://neetcode.io/problems/is-anagram) / [LeetCode 242](https://leetcode.com/problems/valid-anagram/)

## Descripción
Dadas dos cadenas de caracteres `s` y `t`, retorna `true` si `t` es un anagrama de `s`, y `false` en caso contrario.

Un anagrama es una palabra formada al reordenar las letras de otra palabra, usando todas las letras originales exactamente una vez.

### Ejemplo 1:
```txt
Entrada: s = "racecar", t = "carrace"
Salida: true
```

### Ejemplo 2:
```txt
Entrada: s = "jar", t = "jam"
Salida: false
```

---

## Complejidad

| Solución | Tiempo (Time) | Espacio (Space) | Descripción |
| :--- | :--- | :--- | :--- |
| **Ordenamiento** | $\mathcal{O}(n \log n)$ | $\mathcal{O}(1)$ o $\mathcal{O}(n)$ | Ordenar ambas cadenas y comparar si son iguales. |
| **Óptima (HashMap / Frecuencia)** | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | Contar frecuencias de caracteres (alfabeto de tamaño fijo de 26). |

## Soluciones
1. ### Sorting
    El primer algoritmo es el más sencillo de todos. Lo primero que hace es verificar que ambas cadenas sean iguales en tamaño (de no serlo no podrían ser anagramas). Luego se las ordena para facilitar la comparación  Luego, simplemente se las compara ordenadas con el operador `=`. Una solución simple pero que cuya complejidad algoritmica $\mathcal{O}$ suele ser mas alta que las siguientes soluciones.
2. ### HashMap
    En este caso, lo primero que se hace es comparar el tamaño de ambas cadenas. Luego se crean 2 diccionarios donde se colocará la frecuencia con la que cada caracter aparece en cada cadena. Es decir, la clave será el caracter y el valor será la cantidad de veces que aparece en la cadena a la que pertenece el diccionario. Entonces, se procede a iterar en ambas cadenas guardando lo dicho sobre la frecuencia de los caracteres en cada uno de los diccionarios. Al finalizar se comparan si los 2 diccionarios son iguales, de no serlo se concluye que ambas cadenas no son anagramas.
3. ### HashTable
    Para la última se solución también se empieza verificando que los tamaños de las cadenas sean iguales. Luego se crea un arreglo de tamaño 26. El motivo es que al pedir el enunciado que trabajemos con palabras minúsculas del alfabeto inglés entonces se sabe que máximo podriamos encontrar 26 distintos caracteres en las cadenas a comparar. Luego se procede a iterar nuevamente en ambas cadenas y por cada caracter encontrado en la cadena `s` sumamos 1 a la posición a la que pertenece el caracter dentro del arreglo (por algo se puso de tamaño 26) y por cada caracter en `t` le restamos 1 al arreglo según la posición a la que pertenezca el caracter dentro del arreglo. Al finalizar se recorre el arreglo para verificar que en todas sus posiciones el valor sea 0 (si ambas cadenas son anagramas por cada vez que `s` sume 1, significa que `t` le restará 1).