class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        occurrences = {}
        for number in arr:
          occurrences[number] = occurrences.get(number, 0) + 1
        values = list(occurrences.values())
        return len(set(values)) == len(values)