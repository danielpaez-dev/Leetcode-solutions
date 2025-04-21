SELECT unique_id,
    name
FROM Employees as emp
    LEFT JOIN EmployeeUNI uni ON emp.id = uni.id