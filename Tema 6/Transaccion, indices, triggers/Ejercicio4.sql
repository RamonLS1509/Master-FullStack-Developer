CREATE VIEW ventas_ultimo_mes AS
SELECT *
FROM ventas
WHERE fecha >= DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH);


Control de acceso a datos sensibles
Restricción por filas
Separación de permisos
Menor exposición de la estructura interna