# Contains Duplicate 🔍

- **Dificultad:** Easy
- **Tema:** Arrays & Hashing
- **Link:** [NeetCode - Contains Duplicate](https://neetcode.io/problems/duplicate-integer) / [LeetCode 217](https://leetcode.com/problems/contains-duplicate/)

## Descripción
Dado un arreglo de enteros `nums`, retorna `true` si algún valor aparece al menos dos veces en el arreglo, y retorna `false` si todos los elementos son distintos.

### Ejemplo 1:
```txt
Entrada: nums = [1, 2, 3, 1]
Salida: true
```

### Ejemplo 2:
```txt
Entrada: nums = [1, 2, 3, 4]
Salida: false
```

---

## Complejidad

| Solución | Tiempo (Time) | Espacio (Space) | Descripción |
| :--- | :--- | :--- | :--- |
| **Fuerza Bruta** | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | Comparar cada par de elementos usando dos bucles. |
| **Óptima (HashSet)** | $\mathcal{O}(n)$ | $\mathcal{O}(n)$ | Usar un conjunto (`set`) para registrar elementos vistos en una sola pasada. |
