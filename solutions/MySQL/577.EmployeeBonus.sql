SELECT e.name,
    b.bonus
FROM Employee as e
    LEFT JOIN Bonus as b USING(empId)
WHERE B.Bonus < 1000
    OR B.Bonus IS NULL