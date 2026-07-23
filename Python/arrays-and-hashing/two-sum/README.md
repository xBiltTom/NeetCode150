# Two Sum 🎯

- **Dificultad:** Easy
- **Tema:** Arrays & Hashing
- **Link:** [NeetCode - Two Sum](https://neetcode.io/problems/two-integer-sum) / [LeetCode 1](https://leetcode.com/problems/two-sum/)

## Descripción
Dado un arreglo de enteros `nums` y un entero `target`, retorna los índices de los dos números de manera que sumen el `target`.

Puedes asumir que cada entrada tendrá exactamente una solución, y no puedes usar el mismo elemento dos veces.

### Ejemplo 1:
```txt
Entrada: nums = [2, 7, 11, 15], target = 9
Salida: [0, 1]
Explicación: nums[0] + nums[1] == 9, por lo tanto devolvemos [0, 1].
```

---

## Complejidad

| Solución | Tiempo (Time) | Espacio (Space) | Descripción |
| :--- | :--- | :--- | :--- |
| **Fuerza Bruta** | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | Buscar todos los pares posibles de números en el arreglo. |
| **Óptima (HashMap)** | $\mathcal{O}(n)$ | $\mathcal{O}(n)$ | Guardar la diferencia `target - num` en un mapa hash para búsqueda en $\mathcal{O}(1)$. |
