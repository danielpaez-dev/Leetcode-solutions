# 🚀 Soluciones Leetcode

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Estado](https://img.shields.io/badge/status-active-brightgreen)

[English](./README.md) | [Español](./README-es.md)

¡Bienvenido a mi colección de soluciones Leetcode! Aquí encontrarás mis enfoques y soluciones a varios problemas de Leetcode en diferentes lenguajes de programación.

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-andres-paez-rojas)
[![GitHub](https://img.shields.io/badge/-GitHub-333333?logo=github&logoColor=white)](https://github.com/Daniel-Paez-Rojas)

## Indice

* [🚀 Soluciones Leetcode](#-soluciones-leetcode)
* [🛠️ Enfoque de resolución de problemas](#-enfoque-de-resolucion-de-problemas)
    * [🧠 Comprender el problema](#-comprender-el-problema)
    * [📝 Desglosar el problema y hacer una lluvia de ideas para encontrar soluciones](#-desglosar-el-problema-y-hacer-una-lluvia-de-ideas-para-encontrar-soluciones)
    * [🧩 Identificar el tipo de problema](#-identificar-el-tipo-de-problema)
    * [🛠️ Elegir las estructuras de datos adecuadas](#-elegir-las-estructuras-de-datos-adecuadas)
    * [✍️ Esbozar una solución directa (pseudocódigo)](#-esbozar-una-solucion-directa-pseudocodigo)
    * [⚡ Optimizar la solución](#-optimizar-la-solucion)
    * [🧪 Prueba con pseudocódigo](#-prueba-con-pseudocodigo)
    * [🧑‍💻 Implementar la solución en código](#-implementar-la-solucion-en-codigo)
    * [🔧 Refactorizar para mayor claridad](#-refactorizar-para-mayor-claridad)
    * [✅ Enviar y revisar](#-enviar-y-revisar)
    * [📘 Aprender y practicar](#-aprender-y-practicar)
    * [🔄 Iterar y mejorar](#-iterar-y-mejorar)
* [📝 Nota](#-nota)
* [💻 Soluciones](#-soluciones)

---

## 🛠️ Enfoque de resolución de problemas

Un enfoque estructurado es crucial para abordar eficazmente los problemas de LeetCode y desarrollar habilidades sólidas en resolución de problemas. Este proceso enfatiza el pensamiento crítico y la comprensión por encima de simplemente encontrar una solución al problema.

Utilizo la **Técnica Pomodoro** para mantener la concentración y evitar cansarme durante las sesiones de resolución de problemas. Esto implica trabajar en intervalos enfocados de 25 minutos, seguidos de descansos de otros 5 minutos.
Recursos: [Forest](https://www.forestapp.cc/) o [Pomofocus](https://pomofocus.io/)

Éste es mi método paso a paso:

1. ### 🧠 **Entender el problema**

   * Lee atentamente el enunciado del problema, varias veces si es necesario. Si tienes dificultades con el inglés, puedes utilizar el traductor [DeepL](https://www.deepl.com/es/translator), una alternativa mucho mejor al traductor de Google.
   * Relee el enunciado, resaltando los conceptos clave, las restricciones y los requisitos. Identifica claramente las **entradas** y **salidas** deseadas.
   * Puedes utilizar la herramienta de recortes (Windows) o cualquier otra alternativa de Mac/Linux para capturar cualquier información relevante.
   * Simplifica y divide los problemas complejos en subproblemas más pequeños y manejables. ¡Divide y vencerás!
   * Una buena forma de saber si realmente entiendes el problema es imaginar que estás enseñando a otra persona el problema con tus propias palabras.

2. ### 📝 **Desglosa el problema y haz una lluvia de ideas para encontrar soluciones**

   * Estudia y analiza los ejemplos proporcionados para comprender plenamente el comportamiento esperado y cree casos de prueba adicionales si es necesario, incluyendo casos límite (por ejemplo, entradas vacías, valores máximos) para profundizar en el problema.
   * Esboza un **diagrama de flujo** u otro tipo de diagrama para visualizar el flujo de entrada-salida. Estas son algunas herramientas útiles que puedes incluir para esta tarea:
     * [Draw.io](https://www.drawio.com/)
     * [Lucidchart](https://www.lucidchart.com/pages/)
     * [Figma](https://www.figma.com)
     * [AlgoMonster](https://algo.monster/) - Una herramienta muy útil no sólo para crear diagramas de flujo, sino también para comprender las mejores estructuras de datos, algoritmos y otras técnicas de resolución de problemas.

3. ### 🧩 **Identificar el tipo de problema**

    * Categorizar el problema: ¿Está relacionado con **búsqueda**, **clasificación**, **optimización**, **recorrido de grafos**, u otro tipo común?
    * Identifique los patrones o técnicas aplicables: **Ventana deslizante**, **divide y vencerás**, **backtracking**, **dos punteros**, **programación dinámica**, etc.

4. ### 🛠️ **Elegir las estructuras de datos adecuadas**

   * Seleccionar las estructuras de datos más adecuadas para el problema:
     * **matrices**, **mapas hash**, **montones**, **árboles**, **grafos**, etc.
   * Evaluar las complejidades de tiempo y espacio para cualquier escenario necesario ([Big O](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/)).
   * [Este](https://algo.monster/flowchart) es un recurso útil para decidir qué estructura de datos, patrón o algoritmo se debe utilizar.

   ![Estructuras de datos](./Data-structures.png)
   Crédito: https://www.softwaretestinghelp.com/data-structures-in-cpp/

5. ### ✍️ **Elaborar una solución directa (pseudocódigo)**

   * Desarrolla una primera solución lo más directa posible utilizando pseudocódigo. Esto sirve como base y ayuda a identificar posibles cuellos de botella y encontrar mejores soluciones más adelante.
   * Estime la complejidad temporal y espacial de este planteamiento inicial.

6. ### ⚡ **Optimizar la solución**

   * Explora formas de mejorar la eficiencia del algoritmo:
      * ¿Puede una estructura de datos diferente reducir la complejidad?
      * Pueden eliminarse los cálculos redundantes?
   * Compara enfoques alternativos y selecciona el más eficiente en función de la complejidad temporal y espacial.

7. ### 🧪 **Prueba con pseudocódigo**

   * Validar la solución optimizada utilizando casos de prueba en papel o en pseudocódigo.
   * Asegúrate de que maneja correctamente todos los casos límite.

8. ### 🧑‍💻 **Implementar la solución en código**

   * Traduzca el pseudocódigo a su lenguaje de programación preferido. Leetcode le permite utilizar una gran variedad de lenguajes de programación como: C++, Java, Pyhton, Python, Python 3, C, C#, JavaScript, TypeScript, PHP, Swift, Kotlin, Dart, Go, Ruby, Scala, Rust, Racket, Erlang y Elixir.
   * Asegurar que el código es limpio, modular y sigue las mejores prácticas.

9. ### 🔧 **Refactor para claridad**

   * Simplificar la lógica compleja y mejorar la legibilidad del código.
   * Añadir comentarios para explicar secciones clave del código.

10. ### ✅ **Enviar y revisar**

    * Envía la solución en Leetcode y crea el markdown. Ayudará a aclarar lo que has hecho.
    * **Revisa y analiza las soluciones mejor valoradas:** No te limites a comprobar si tu solución funciona: ¡aprende activamente de los demás! Analiza las soluciones mejor valoradas para identificar enfoques alternativos, optimizaciones y mejores prácticas.

11. ### 📘 **Aprender y practicar**

    * Estudie las mejores soluciones, centrándose en las técnicas u optimizaciones que pueda haber pasado por alto.
    * Reimplemente esas soluciones para solidificar su comprensión.

12. ### 🔄 **Iterar y mejorar**

    * Si descubres nuevas ideas o patrones, revisa y perfecciona tu solución.
    * Sigue iterando hasta que estés seguro de que es el mejor enfoque posible.
   Esto puede tomar un buen tiempo, a veces meses o incluso años. Después de presentar tu solución, revisa siempre los enfoques de los demás para aprender de ellos y aplicar estas lecciones a éste y a futuros problemas. No hay nada de malo en estudiar la solución de otro; No te saltes este paso, es una parte clave del proceso de aprendizaje.

---

### Nota

Si te sientes atascado o frustrado durante el proceso, plantéate hacer una pausa más larga o continuar al día siguiente. A veces, dar a tu mente un poco de descanso se traduce en mejores soluciones. No te olvides de mantenerte activo con ejercicio regular, y asegúrate de que estás durmiendo lo suficiente y una nutrición e hidratación adecuada. Lo creas o no, esto te ayudará a resolver los problemas con más eficacia.

Siguiendo este proceso de forma sistemática, me aseguro de que mis soluciones no sólo sean correctas, sino también eficaces y estén bien documentadas.
He aquí un valioso recurso de un procedimiento similar: [Enlace](https://youtu.be/OTNe0eV8418?si=La9wARw-lW4nyee_)

[Volver al principio](#indice)

## 💻 Soluciones

A continuación se muestra una lista de problemas Leetcode que ya he resuelto. Cada entrada incluye un enlace al problema, mi solución y su nivel de dificultad.

| #    | Título                                                                                                                                                   | Solución                                                                            | Dificultad |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| 1    | [Suma de Dos](https://leetcode.com/problems/Two-Sum/)                                                                                                    | [Mi Solución](./problems/1.TwoSum-es.md)                                            | Fácil      |
| 11   | [Contenedor Con Más Agua](https://leetcode.com/problems/container-with-most-water/description/)                                                          | [Mi Solución](./problems/11.ContainerWithMostWater-es.md)                           | Media      |
| 13   | [Romana a Entero](https://leetcode.com/problems/roman-to-integer/description/)                                                                           | [Mi Solución](./problems/13.RomanToInteger-es.md)                                   | Fácil      |
| 14   | [Prefijo común más largo](https://leetcode.com/problems/longest-common-prefix/description/)                                                              | [Mi Solución](./problems/14.LongestCommonPrefix-es.md)                              | Fácil      |
| 26   | [Eliminar duplicados de la matriz ordenada](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)                              | [Mi Solución](./problems/26.RemoveDuplicatesFromSortedArray-es.md)                  | Fácil      |
| 27   | [Eliminar Elemento](https://leetcode.com/problems/remove-element/description/)                                                                           | [Mi Solución](./problems/27.RemoveElement-es.md)                                    | Fácil      |
| 28   | [Buscar el índice de la primera ocurrencia en una cadena](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/) | [Mi Solución](./problems/28.FindTheIndexOfTheFirstOccurrenceInAString-es.md)        | Fácil      |
| 35   | [Buscar Posición de Inserción](https://leetcode.com/problems/search-insert-position/description/)                                                        | [Mi Solución](./problems/35.SearchInsertPosition.md)                                | Fácil      |
| 58   | [Longitud de la Última Palabra](https://leetcode.com/problems/length-of-last-word/description/)                                                          | [Mi Solución](./problems/58.LengthOfLastWord-es.md)                                 | Fácil      |
| 66   | [Más uno](https://leetcode.com/problems/plus-one/description/)                                                                                           | [Mi Solución](./problems/66.PlusOne-es.md)                                          | Fácil      |
| 69   | [Sqrt(x)](https://leetcode.com/problems/sqrtx/description/)                                                                                              | [Mi Solución](./problems/69.Sqrt(x)-es.md)                                          | Fácil      |
| 70   | [Subiendo Escaleras](https://leetcode.com/problems/climbing-stairs/)                                                                                     | [Mi Solución](./problems/70.ClimbingStairs-es.md)                                   | Fácil      |
| 104  | [Máxima Profundidad del Árbol Binario](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75)  | [Mi Solución](./problems/104.MaximumDepthOfBinaryTree-es.md)                        | Fácil      |
| 136  | [Número Único](https://leetcode.com/problems/single-number/description/)                                                                                 | [Mi Solución](./problems/136.SingleNumber-es.md)                                    | Fácil      |
| 151  | [Invertir palabras en un String](https://leetcode.com/problems/reverse-words-in-a-string/)                                                               | [Mi Solución](./problems/151.ReverseWordsInAString-es.md)                           | Media      |
| 175  | [Combinar Dos Tablas](https://leetcode.com/problems/combine-two-tables/description/)                                                                     | [Mi Solución](./problems/175.CombineTwoTables-es.md)                                | Fácil      |
| 283  | [Mover Ceros](https://leetcode.com/problems/move-zeroes/description/)                                                                                    | [Mi Solución](./problems/283.MoveZeroes-es.md)                                      | Fácil      |
| 334  | [Aumento de la Secuencia de Tripletes](https://leetcode.com/problems/increasing-triplet-subsequence/description/)                                        | [Mi Solución](./problems/334.IncreasingTripletSubsequence-es.md)                    | Media      |
| 338  | [Contando Bits](https://leetcode.com/problems/counting-bits/description/)                                                                                | [Mi Solución](./problems/338.CountingBits-es.md)                                    | Fácil      |
| 345  | [Revertir Vocales de un String](https://leetcode.com/problems/counting-bits/description/)                                                                | [Mi Solución](./problems/345.ReverseVowelsOfAString.md)                             | Fácil      |
| 374  | [Adivinar Número Superior O Inferior](https://leetcode.com/problems/guess-number-higher-or-lower/description/)                                           | [Mi Solución](./problems/374.GuessNumberHigherOrLower-es.md)                        | Fácil      |
| 392  | [Es una Subsequencia](https://leetcode.com/problems/is-subsequence/description/)                                                                         | [Mi Solución](./problems/392.IsSubsequence-es.md)                                   | Fácil      |
| 577  | [Bonus de Empleado](https://leetcode.com/problems/employee-bonus/description/)                                                                           | [Mi Solución](./problems/577.EmployeeBonus-es.md)                                   | Fácil      |
| 596  | [Clases Con Más De Estudiantes](https://leetcode.com/problems/classes-more-than-5-students/description/)                                                 | [Mi Solución](./problems/596.ClassesMoreThan5Students-es.md)                        | Fácil      |
| 605  | [Se Puede Plantar Flores](https://leetcode.com/problems/can-place-flowers/description/)                                                                  | [Mi Solución](./problems/605.CanPlaceFlowers-es.md)                                 | Fácil      |
| 643  | [Subarreglo Promedio Máximo I](https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75/)           | [Mi Solución](./problems/643.MaximumAverageSubarrayI-es.md)                         | Fácil      |
| 704  | [Búsqueda Binaria](https://leetcode.com/problems/binary-search/description/)                                                                             | [Mi Solución](./problems/704.BinarySearch-es.md)                                    | Fácil      |
| 724  | [Encontrar el Índice del Pivote](https://leetcode.com/problems/find-pivot-index/description/)                                                            | [Mi Solución](./problems/724.FindPivotIndex-es.md)                                  | Fácil      |
| 735  | [Colisión de Asteroides](https://leetcode.com/problems/asteroid-collision/)                                                                              | [Mi Solución](./problems/735.AsteroidCollision-es.md)                               | Media      |
| 875  | [Koko Comiendo Bananas](https://leetcode.com/problems/koko-eating-bananas/description/)                                                                  | [Mi Solución](./problems/875.KokoEatingBananas-es.md)                               | Media      |
| 1068 | [Análisis de Ventas de Productos I](https://leetcode.com/problems/product-sales-analysis-i/description/)                                                 | [Mi Solución](./problems/1068.ProductSalesAnalysisI-es.md)                          | Fácil      |
| 1071 | [Máximo Común Divisor de Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/description/)                                         | [Mi Solución](./problems/1071.GreatestCommonDivisorOfStrings-es.md)                 | Fácil      |
| 1148 | [Viesta de Artículos I](https://leetcode.com/problems/article-views-i/description/)                                                                      | [Mi Solución](./problems/1148.ArticleViewsI-es.md)                                  | Easy       |
| 1207 | [Número Único de Concurrencias](https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75/)        | [Mi Solución](./problems/1207.UniqueNumberOfOccurrences-es.md)                      | Fácil      |
| 1280 | [Estudiantes y Exámenes](https://leetcode.com/problems/students-and-examinations/description/)                                                           | [Mi Solución](./problems/1280.StudentsAndExaminations-es.md)                        | Fácil      |
| 1378 | [Sustituir el ID de Empleado por el Identificador Único](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/)      | [Mi Solución](./problems/1378.ReplaceEmployeeIDWithTheUniqueIdentifier-es.md)       | Fácil      |
| 1431 | [Los niños con el mayor número de caramelos](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/)                        | [Mi Solución](./problems/1431.KidsWithTheGreatestNumberOfCandies-es.md)             | Fácil      |
| 1456 | [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/)           | [Mi Solución](./problems/1456.MaximumNumberOfVowelsInASubstringOfGivenLength-es.md) | Media      |
| 1679 | [Máximo Número de Pares Suma-k](https://leetcode.com/problems/max-number-of-k-sum-pairs/description/)                                                    | [Mi Solución](./problems/1679.MaxNumberOfK-SumPairs-es.md)                          | Media      |
| 1683 | [Tweets Invalidos](https://leetcode.com/problems/invalid-tweets/description/)                                                                            | [Mi Solución](./problems/1683.InvalidTweets-es.md)                                  | Easy       |
| 1732 | [Encontrar la Altitud Más Alta](https://leetcode.com/problems/find-the-highest-altitude/description/)                                                    | [Mi Solución](./problems/1732.FindTheHighestAltitude-es.md)                         | Fácil      |
| 1757 | [Productos Reciclables y Bajos en Grasas](https://leetcode.com/problems/recyclable-and-low-fat-products/description/)                                    | [Mi Solución](./problems/1757.RecyclableAndLowFatProducts-es.md)                    | Fácil      |
| 1768 | [Combinar Cadenas Alternativamente](https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75)        | [Mi Solución](./problems/1768.MergeStringsAlternately-es.md)                        | Fácil      |
| 1929 | [Concatenación de un Array](https://leetcode.com/problems/concatenation-of-array/description/)                                                           | [Mi Solución](./problems/1929.ConcatenationOfArray-es.md)                           | Fácil      |
| 2206 | [Dividir Arreglo en Pares Iguales](https://leetcode.com/problems/divide-array-into-equal-pairs/description/)                                             | [Mi Solución](./problems/2206.DivideArrayIntoEqualPairs-es.md)                      | Fácil      |
| 2215 | [Encuentra la Diferencia de Dos Arreglos](https://leetcode.com/problems/find-the-difference-of-two-arrays/description/)                                  | [Mi Solución](./problems/2215.FindTheDifferenceOfTwoArrays-es.md)                   | Fácil      |
| 2300 | [Pares Exitosos De Hechizos y Pociones](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/)                               | [Mi Solución](./problems/2300.SuccessfulPairsOfSpellsAndPotions-es.md)              | Media      |
| 2390 | [Eliminando Estrellas de Un String](https://leetcode.com/problems/removing-stars-from-a-string/description/)                                             | [Mi Solución](./problems/2390.RemovingStarsFromAString-es.md)                       | Media      |
| 2703 | [Retornar la Longitud de los Argumentos Pasados](https://leetcode.com/problems/return-length-of-arguments-passed/description/)                           | [Mi Solución](./problems/2703.ReturnLengthOfArgumentsPassed-es.md)                  | Fácil      |

[Volver al principio](#indice)
