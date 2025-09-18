-- Sin índice en nombre
MySQL tiene que leer toda la tabla
Va fila por fila comprobando si nombre = 'Laptop'.
Si la tabla tiene millones de registros, esto se vuelve muy lento.

-- Con índice en nombre
MySQL usa una estructura de datos tipo árbol (B-Tree) para buscar el valor 'Laptop'.
En lugar de revisar toda la tabla, va directamente a la posición donde podría estar 'Laptop'.
Una vez encuentra las coincidencias en el índice, MySQL puede ir directo a las filas correspondientes sin tener que examinar todas.


ALTER TABLE productos DROP INDEX nombre;