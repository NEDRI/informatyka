SELECT id, nazwa, opis, zdjecie FROM produkty 
WHERE id IN (18, 22, 23, 25);

SELECT id, nazwa, opis, zdjecie FROM produkty 
WHERE Rodzaje_id = 12;

DELETE FROM produkty 
WHERE id = 15;
