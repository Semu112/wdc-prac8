SELECT DISTINCT film.title FROM film WHERE film.film_id NOT IN (SELECT DISTINCT inventory.film_id FROM inventory);