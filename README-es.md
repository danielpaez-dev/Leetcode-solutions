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

| #    | Título                                                                                                                                                   | Solución                                                                     | Dificultad |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------- |
| 1    | [Suma de Dos](https://leetcode.com/problems/Two-Sum/)                                                                                                    | [Mi Solución](./problems/1.TwoSum-es.md)                                     | Fácil      |
| 13   | [Romana a Entero](https://leetcode.com/problems/roman-to-integer/description/)                                                                           | [Mi Solución](./problems/13.RomanToInteger-es.md)                            | Fácil      |
| 14   | [Prefijo común más largo](https://leetcode.com/problems/longest-common-prefix/description/)                                                              | [Mi Solución](./problems/14.LongestCommonPrefix-es.md)                       | Fácil      |
| 26   | [Eliminar duplicados de la matriz ordenada](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)                              | [Mi Solución](./problems/26.RemoveDuplicatesFromSortedArray-es.md)           | Fácil      |
| 27   | [Eliminar Elemento](https://leetcode.com/problems/remove-element/description/)                                                                           | [Mi Solución](./problems/27.RemoveElement-es.md)                             | Fácil      |
| 28   | [Buscar el índice de la primera ocurrencia en una cadena](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/) | [My Solution](./problems/28.FindTheIndexOfTheFirstOccurrenceInAString-es.md) | Fácil      |
| 35   | [Buscar Posición de Inserción](https://leetcode.com/problems/search-insert-position/description/)                                                        | [My Solution](./problems/35.SearchInsertPosition.md)                         | Fácil      |
| 58   | [Longitud de la Última Palabra](https://leetcode.com/problems/length-of-last-word/description/)                                                          | [Mi Solución](./problems/58.LengthOfLastWord-es.md)                          | Fácil      |
| 69   | [Sqrt(x)](https://leetcode.com/problems/sqrtx/description/)                                                                                              | [Mi Solución](./problems/69.Sqrt(x)-es.md)                                   | Fácil      |
| 70   | [Subiendo Escaleras](https://leetcode.com/problems/climbing-stairs/)                                                                                     | [My Solution](./problems/70.ClimbingStairs-es.md)                            | Fácil      |
| 175  | [Combinar Dos Tablas](https://leetcode.com/problems/combine-two-tables/description/)                                                                     | [Mi Solución](./problems/175.CombineTwoTables-es.md)                         | Fácil      |
| 704  | [Búsqueda Binaria](https://leetcode.com/problems/binary-search/description/)                                                                             | [Mi Solución](./problems/704.BinarySearch-es.md)                             | Fácil      |
| 1929 | [Concatenación de un Array](https://leetcode.com/problems/concatenation-of-array/description/)                                                           | [Mi Solución](./problems/1929.ConcatenationOfArray-es.md)                    | Fácil      |
| 2206 | [Dividir Arreglo en Pares Iguales](https://leetcode.com/problems/divide-array-into-equal-pairs/description/)                                             | [Mi Solución](./problems/2206.DivideArrayIntoEqualPairs-es.md)               | Fácil      |
| 2703 | [Retornar la Longitud de los Argumentos Pasados](https://leetcode.com/problems/return-length-of-arguments-passed/description/)                           | [Mi Solución](./problems/2703.ReturnLengthOfArgumentsPassed-es.md)           | Fácil      |

[Volver al principio](#indice)
