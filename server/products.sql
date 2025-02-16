-- Insertion des produits
INSERT INTO products (recipe_id, name, category_id, price, image, description, isGrayedOut) VALUES
(10, 'Végé''tos', 1, 9.00, NULL, 'Un burrito végétarien garni de tofu épicé, de haricots rouges, de tater tots croustillants et d’une sauce maison savoureuse.', FALSE),
(11, 'Poul''itos', 1, 8.00, NULL, 'Un burrito généreux avec du poulet mariné, des tater tots croustillants, du cheddar fondant et une touche de sauce maison.', FALSE),
(12, 'Beef''itos', 1, 10.00, NULL, 'Un burrito gourmand à base de bœuf mariné, poivrons sautés, oignons caramélisés, béchamel au gruyère et œufs.', FALSE),
(13, 'Sauss''itos', 1, 7.00, NULL, 'Un burrito généreux avec des saucisses de poulet, du fromage emmental fondant et des œufs moelleux.', FALSE),

(4, 'Mix', 2, 18.00, NULL, 'Poulet frit sans œuf : 4 tenders, 4 ailes, 2 hauts de cuisses, 2 pilons (12 pièces).', FALSE),
(4, 'Ailes', 2, 9.00, NULL, 'Poulet frit sans œuf - 10 pièces.', FALSE),
(4, 'Pilon', 2, 10.00, NULL, 'Poulet frit sans œuf - 5 pièces.', FALSE),
(4, 'Tenders', 2, 12.00, NULL, 'Poulet frit sans œuf - 5 pièces.', FALSE),
(4, 'Box XL', 2, 45.00, NULL, 'Poulet frit sans œuf : 10 tenders, 10 ailes, 5 hauts de cuisses, 5 pilons (30 pièces).', FALSE),
(4, 'Mix piquant', 2, 18.00, NULL, 'Poulet frit sans œuf, version épicée.', FALSE),
(4, 'Ailes piquant', 2, 9.00, NULL, 'Poulet frit sans œuf - 10 pièces, version épicée.', FALSE),
(4, 'Pilon piquant', 2, 10.00, NULL, 'Poulet frit sans œuf - 5 pièces, version épicée.', FALSE),
(4, 'Tenders piquant', 2, 12.00, NULL, 'Poulet frit sans œuf - 5 pièces, version épicée.', FALSE),
(4, 'Haut de cuisse piquant', 2, 10.00, NULL, 'Poulet frit sans œuf, version épicée.', FALSE),

(NULL, 'Eau plate', 3, 1.00, NULL, NULL, FALSE),
(NULL, 'Eau pétillante', 3, 1.50, NULL, NULL, FALSE),
(NULL, 'Jus d''orange', 3, 2.00, NULL, 'Orange pressée.', FALSE),
(NULL, 'Mangue', 3, 3.00, NULL, 'Mangue mixée.', FALSE),
(NULL, 'Carotte', 3, 3.00, NULL, 'Carotte et lait concentré sucré vegan.', FALSE),
(NULL, 'Guinness', 3, 3.00, NULL, 'Bière.', FALSE),
(NULL, 'Lait végétal', 3, 2.00, NULL, 'Lait maison (noisette, riz ou amande).', FALSE),
(NULL, 'Mochaccito', 3, 2.00, NULL, 'Café et lait végétal.', FALSE),
(NULL, 'Café serré', 3, 2.00, NULL, 'Café serré.', FALSE),
(NULL, 'Café allongé', 3, 2.00, NULL, 'Café allongé.', FALSE),
(NULL, 'Chocolat chaud', 3, 3.00, NULL, 'Épices, sucre, chocolat, lait végétal.', FALSE),

(NULL, 'Segments d''orange', 4, 1.00, NULL, 'Orange coupée.', FALSE),
(NULL, 'Mangue coupé', 4, 2.00, NULL, 'Mangue coupée.', FALSE),
(NULL, 'Rondelles d''ananas', 4, 2.00, NULL, 'Ananas coupé.', FALSE),

(NULL, 'Frites', 5, 2.00, NULL, NULL, FALSE),
(NULL, 'Plantins', 5, 2.00, NULL, NULL, FALSE),
(NULL, 'Salade', 5, 3.00, NULL, 'Laitue, tomates, concombre, carottes, maïs.', FALSE),
(NULL, 'Tortillas', 5, 1.00, NULL, '2 tortillas.', FALSE),

(NULL, 'Crème mangue avocat', 6, 4.00, NULL, 'Crème onctueuse à base de lait concentré sucré vegan.', FALSE);


INSERT INTO products_availability (product_id, day_of_week, start_time, end_time) VALUES
(1, 'Monday', '06:30:00', '10:45:00'),
(1, 'Tuesday', '06:30:00', '10:45:00'),
(1, 'Wednesday', '06:30:00', '10:45:00'),
(1, 'Thursday', '06:30:00', '10:45:00'),
(1, 'Friday', '06:30:00', '10:45:00'),

(2, 'Monday', '06:30:00', '10:45:00'),
(2, 'Tuesday', '06:30:00', '10:45:00'),
(2, 'Wednesday', '06:30:00', '10:45:00'),
(2, 'Thursday', '06:30:00', '10:45:00'),
(2, 'Friday', '06:30:00', '10:45:00'),

(3, 'Monday', '06:30:00', '10:45:00'),
(3, 'Tuesday', '06:30:00', '10:45:00'),
(3, 'Wednesday', '06:30:00', '10:45:00'),
(3, 'Thursday', '06:30:00', '10:45:00'),
(3, 'Friday', '06:30:00', '10:45:00'),

(4, 'Monday', '06:30:00', '10:45:00'),
(4, 'Tuesday', '06:30:00', '10:45:00'),
(4, 'Wednesday', '06:30:00', '10:45:00'),
(4, 'Thursday', '06:30:00', '10:45:00'),
(4, 'Friday', '06:30:00', '10:45:00'),

(5, 'Sunday', '17:30:00', '20:45:00'),
(5, 'Monday', '17:30:00', '20:45:00'),
(5, 'Tuesday', '17:30:00', '20:45:00'),
(5, 'Wednesday', '17:30:00', '20:45:00'),
(5, 'Thursday', '17:30:00', '20:45:00'),
(5, 'Friday', '17:30:00', '20:45:00'),

(6, 'Sunday', '17:30:00', '20:45:00'),
(6, 'Monday', '17:30:00', '20:45:00'),
(6, 'Tuesday', '17:30:00', '20:45:00'),
(6, 'Wednesday', '17:30:00', '20:45:00'),
(6, 'Thursday', '17:30:00', '20:45:00'),
(6, 'Friday', '17:30:00', '20:45:00'),

(7, 'Sunday', '17:30:00', '20:45:00'),
(7, 'Monday', '17:30:00', '20:45:00'),
(7, 'Tuesday', '17:30:00', '20:45:00'),
(7, 'Wednesday', '17:30:00', '20:45:00'),
(7, 'Thursday', '17:30:00', '20:45:00'),
(7, 'Friday', '17:30:00', '20:45:00'),

(8, 'Sunday', '17:30:00', '20:45:00'),
(8, 'Monday', '17:30:00', '20:45:00'),
(8, 'Tuesday', '17:30:00', '20:45:00'),
(8, 'Wednesday', '17:30:00', '20:45:00'),
(8, 'Thursday', '17:30:00', '20:45:00'),
(8, 'Friday', '17:30:00', '20:45:00'),

(9, 'Sunday', '17:30:00', '20:45:00'),
(9, 'Monday', '17:30:00', '20:45:00'),
(9, 'Tuesday', '17:30:00', '20:45:00'),
(9, 'Wednesday', '17:30:00', '20:45:00'),
(9, 'Thursday', '17:30:00', '20:45:00'),
(9, 'Friday', '17:30:00', '20:45:00'),

(10, 'Sunday', '17:30:00', '20:45:00'),
(10, 'Monday', '17:30:00', '20:45:00'),
(10, 'Tuesday', '17:30:00', '20:45:00'),
(10, 'Wednesday', '17:30:00', '20:45:00'),
(10, 'Thursday', '17:30:00', '20:45:00'),
(10, 'Friday', '17:30:00', '20:45:00'),

(11, 'Sunday', '17:30:00', '20:45:00'),
(11, 'Monday', '17:30:00', '20:45:00'),
(11, 'Tuesday', '17:30:00', '20:45:00'),
(11, 'Wednesday', '17:30:00', '20:45:00'),
(11, 'Thursday', '17:30:00', '20:45:00'),
(11, 'Friday', '17:30:00', '20:45:00'),

(12, 'Sunday', '17:30:00', '20:45:00'),
(12, 'Monday', '17:30:00', '20:45:00'),
(12, 'Tuesday', '17:30:00', '20:45:00'),
(12, 'Wednesday', '17:30:00', '20:45:00'),
(12, 'Thursday', '17:30:00', '20:45:00'),
(12, 'Friday', '17:30:00', '20:45:00'),

(13, 'Sunday', '06:30:00', '20:45:00'),
(13, 'Monday', '06:30:00', '20:45:00'),
(13, 'Tuesday', '06:30:00', '20:45:00'),
(13, 'Wednesday', '06:30:00', '20:45:00'),
(13, 'Thursday', '06:30:00', '20:45:00'),
(13, 'Friday', '06:30:00', '20:45:00'),

(14, 'Sunday', '06:30:00', '20:45:00'),
(14, 'Monday', '06:30:00', '20:45:00'),
(14, 'Tuesday', '06:30:00', '20:45:00'),
(14, 'Wednesday', '06:30:00', '20:45:00'),
(14, 'Thursday', '06:30:00', '20:45:00'),
(14, 'Friday', '06:30:00', '20:45:00'),

(15, 'Sunday', '06:30:00', '20:45:00'),
(15, 'Monday', '06:30:00', '20:45:00'),
(15, 'Tuesday', '06:30:00', '20:45:00'),
(15, 'Wednesday', '06:30:00', '20:45:00'),
(15, 'Thursday', '06:30:00', '20:45:00'),
(15, 'Friday', '06:30:00', '20:45:00');
