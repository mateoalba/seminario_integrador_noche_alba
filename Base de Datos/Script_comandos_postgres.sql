CREATE TABLE tbl_personas (
    id SERIAL PRIMARY KEY,
    nombre1 VARCHAR(100),
    nombre2 VARCHAR(100),
    apellido1 VARCHAR(100),
    apellido2 VARCHAR(100),
    sexo CHAR(1),
	edad INT
);

SELECT * FROM tbl_personas

INSERT INTO tbl_personas (nombre1, nombre2, apellido1, apellido2, sexo, edad)
VALUES 
('Amerie', 'Marlene', 'Albs', 'Quilo', 'F', 20),
('Juan', 'Perez', 'Alba', 'Quilo', 'M', 28),
('Ana', 'Maria', 'Alba', 'Quilo', 'F', 20),
('Carlos', 'Andres', 'Alba', 'Quilo', 'M', 22),
('Luisa', 'Fernanda', 'Alba', 'Quilo', 'F', 25),
('Pedro', 'Jose', 'Albs', 'Quilo', 'M', 30);

/*Borrar datos de las tablas*/
TRUNCATE tbl_personas
/*Agregar columna estado_civil*/
ALTER TABLE tbl_personas
ADD COLUMN estado_civil VARCHAR(50);

/*Agregar columna estatura*/
ALTER TABLE tbl_personas
ADD COLUMN estatura VARCHAR(50);

/*Agregar columan tipo de sangre restringido solo para poder agregar esos tipos de datos*/
ALTER TABLE tbl_personas
ADD COLUMN tip_sangre VARCHAR(10)
CHECK (tip_sangre IN ('A+','A-','B+','B-','AB+','AB-','O+','O-'));

/*Actualizar columna estado_civil con restriccion*/
ALTER TABLE tbl_personas
ADD CHECK (estado_civil IN ('Soltero','Casado','Divorsiado','Viudo', 'Otros'));

/*Actualizar el tipo de dato de una columna*/
ALTER TABLE tbl_personas
ALTER COLUMN estatura TYPE DECIMAL(4,2)
USING estatura::DECIMAL;

/*Actualizar el tipo de dato en la columna edad de tipo INT a TEXT */
ALTER TABLE tbl_personas
ALTER COLUMN edad TYPE TEXT
USING edad::TEXT;

/*Actualiar columna estado_civil*/
UPDATE tbl_personas SET estado_civil = 'Soltero' WHERE id = 7;
UPDATE tbl_personas SET estado_civil = 'Casado' WHERE id = 8;
UPDATE tbl_personas SET estado_civil = 'Divorciado' WHERE id = 9;
UPDATE tbl_personas SET estado_civil = 'Soltero' WHERE id = 10;
UPDATE tbl_personas SET estado_civil = 'Casado' WHERE id = 11;
UPDATE tbl_personas SET estado_civil = 'Divorciado' WHERE id = 12;

/*No se debe poner esto sin un where porque sino se actualizan todo los registros*/
UPDATE tbl_personas SET estado_civil = 'Viudo' WHERE id = 7;
UPDATE tbl_personas SET estado_civil = 'Viudo' WHERE id = 8;
UPDATE tbl_personas SET estado_civil = 'Viudo' WHERE id = 9;
UPDATE tbl_personas SET estado_civil = 'Viudo' WHERE id = 10;
UPDATE tbl_personas SET estado_civil = 'Viudo' WHERE id = 11;
UPDATE tbl_personas SET estado_civil = 'Viudo' WHERE id = 12;


/*Insertar datos en estatura*/
UPDATE tbl_personas SET estatura = 1.70 WHERE id = 7;
UPDATE tbl_personas SET estatura = 1.65 WHERE id = 8;
UPDATE tbl_personas SET estatura = 1.55 WHERE id = 9;
UPDATE tbl_personas SET estatura = 1.80 WHERE id = 10;
UPDATE tbl_personas SET estatura = 1.85 WHERE id = 11;
UPDATE tbl_personas SET estatura = 1.68 WHERE id = 12;


UPDATE tbl_personas SET tip_sangre = 'P+' WHERE id = 7;

/*Eliminar columna estado_civil*/
ALTER TABLE tbl_personas
DROP COLUMN estado_civil;

