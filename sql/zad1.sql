zad 6
SELECT TOP 3 City, COUNT(City) AS CustomerCount
FROM Customers
GROUP BY City
ORDER BY COUNT(City) DESC;

zad 5
SELECT TOP 1 FirstName, LastName , COUNT(Orders.OrderID) AS OrdersCount FROM Employees
INNER JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
GROUP BY Employees.EmployeeID, Employees.FirstName, Employees.LastName
ORDER BY COUNT(Orders.OrderID) DESC;

zad 4
SELECT TOP 1 Customers.CustomerName, SUM(OrderDetails.Quantity * Products.Price) AS TotalSpent
FROM ((Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID)
INNER JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID)
INNER JOIN Products ON OrderDetails.ProductID = Products.ProductID
GROUP BY Customers.CustomerID, Customers.CustomerName
ORDER BY SUM(OrderDetails.Quantity * Products.Price) DESC;

zad 1
SELECT COUNT(*) AS IloscZamowien
FROM Orders
WHERE OrderDate BETWEEN #1997-01-01# AND #1997-05-31#;
