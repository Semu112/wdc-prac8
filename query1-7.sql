SELECT film_actor.actor_id, film.film_id FROM film INNER JOIN film_actor ON film.film_id = film_actor.film_id ORDER BY film_actor.actor_id, film.film_id;
SELECT COUNT(film.film_id) AS number_films FROM film INNER JOIN film_actor ON film.film_id = film_actor.film_id WHERE actor_id = 200;
SELECT actor.first_name, actor.last_name, film_actor.film_id FROM actor INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id ORDER BY actor.first_name, actor.last_name, film_actor.film_id;
SELECT COUNT(film.film_id) AS number_films FROM film INNER JOIN film_actor ON film.film_id = film_actor.film_id WHERE actor_id = 200;
SELECT actor_film.actor_id, number_films FROM actor_film INNER JOIN film ON actor_film.film_id = film.film_id;