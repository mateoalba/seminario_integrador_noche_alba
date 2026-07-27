/*1. Desarrolle una consulta que permita mostrar todos los clientes que pertenecen a 
los países Estados Unidos y Francia.*/

SELECT 
    customer_id, 
    company_name, 
    contact_name, 
    country 
FROM 
    customers
WHERE 
    country IN ('USA', 'France')
ORDER BY 
    country ASC, 
    company_name ASC; 


/*2. Genere una consulta que muestre los empleados cuyos apellidos comiencen con 
la letra “D”, utilizando la cláusula LIKE.*/

SELECT 
    employee_id, 
    last_name, 
    first_name, 
    title 
FROM 
    employees
WHERE 
    last_name LIKE 'D%'
ORDER BY 
    last_name ASC; 


/*3. Realice una consulta que permita visualizar los clientes que residen en la 
ciudad de Londres y cuyo nombre (CustomerName) empiece con la letra “A”.*/

SELECT 
    customer_id, 
    company_name, 
    contact_name, 
    city 
FROM 
    customers
WHERE 
    city = 'London' 
    AND contact_name LIKE 'A%'
ORDER BY 
    contact_name ASC;

/*4. Construya una consulta que muestre el nombre de cada producto, su precio 
unitario y el valor total generado en ventas, considerando la cantidad de unidades 
vendidas de cada producto.*/

SELECT 
    p.product_id,
    p.product_name,
    p.unit_price AS precio_unitario_actual,
    SUM(od.unit_price * od.quantity) AS total_ventas_generado
FROM 
    products p
JOIN 
    order_details od ON p.product_id = od.product_id
GROUP BY 
    p.product_id, 
    p.product_name, 
    p.unit_price
ORDER BY 
    total_ventas_generado DESC;

/*5. Desarrolle una consulta que permita mostrar el nombre de los empleados junto con la cantidad 
total de unidades vendidas por cada uno utilizando la función SUM().*/

SELECT 
    e.employee_id,
    e.first_name || ' ' || e.last_name AS empleado,
    SUM(od.quantity) AS total_unidades_vendidas
FROM 
    employees e
JOIN 
    orders o ON e.employee_id = o.employee_id
JOIN 
    order_details od ON o.order_id = od.order_id
GROUP BY 
    e.employee_id, 
    e.first_name, 
    e.last_name
ORDER BY 
    total_unidades_vendidas DESC;

/*6. Genere una consulta que permita visualizar cada empleado junto con el número total 
de pedidos registrados.*/

SELECT 
    e.employee_id,
    e.first_name || ' ' || e.last_name AS empleado,
    COUNT(o.order_id) AS total_pedidos_registrados
FROM 
    employees e
LEFT JOIN 
    orders o ON e.employee_id = o.employee_id
GROUP BY 
    e.employee_id, 
    e.first_name, 
    e.last_name
ORDER BY 
    total_pedidos_registrados DESC;

/*7. Realice una consulta que muestre el nombre de cada producto, su precio unitario y el ingreso 
total acumulado por ventas generado por cada producto.*/

SELECT 
    p.product_id,
    p.product_name,
    p.unit_price AS precio_lista_actual,
    SUM(od.unit_price * od.quantity) AS ingreso_total_acumulado
FROM 
    products p
JOIN 
    order_details od ON p.product_id = od.product_id
GROUP BY 
    p.product_id, 
    p.product_name, 
    p.unit_price
ORDER BY 
    ingreso_total_acumulado DESC;


/*8. Construya una consulta que permita identificar los empleados que hayan registrado una cantidad 
de pedidos superior al promedio general de pedidos realizados por todos los empleados, utilizando 
la función AVG().*/

SELECT 
    e.employee_id,
    e.first_name || ' ' || e.last_name AS empleado,
    COUNT(o.order_id) AS total_pedidos
FROM 
    employees e
JOIN 
    orders o ON e.employee_id = o.employee_id
GROUP BY 
    e.employee_id, 
    e.first_name, 
    e.last_name
HAVING 
    COUNT(o.order_id) > (
        SELECT AVG(conteo_pedidos)
        FROM (
            SELECT COUNT(order_id) AS conteo_pedidos
            FROM orders
            GROUP BY employee_id
        ) AS sub_promedios
    )
ORDER BY 
    total_pedidos DESC;

/*9. Desarrolle una consulta que muestre el total de ventas realizadas por cada empleado, utilizando 
funciones de manejo de fechas como:*/

SELECT 
    e.employee_id,
    e.first_name || ' ' || e.last_name AS empleado,
    o.order_date,
    SUM(od.unit_price * od.quantity) AS total_dinero_vendido
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
JOIN order_details od ON o.order_id = od.order_id
GROUP BY 
    e.employee_id,
    e.first_name,
    e.last_name,
    o.order_date
ORDER BY 
    o.order_date DESC,
    total_dinero_vendido DESC;

/*10. Genere una consulta que permita mostrar el total de productos existentes por cada categoría 
registrada en la base de datos.*/

SELECT 
    c.category_id,
    c.category_name,
    COUNT(p.product_id) AS total_productos_existentes
FROM 
    categories c
LEFT JOIN 
    products p ON c.category_id = p.category_id
GROUP BY 
    c.category_id, 
    c.category_name
ORDER BY 
    total_productos_existentes DESC;



