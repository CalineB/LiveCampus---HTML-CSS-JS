-- Insertion des produits
BEGIN;

INSERT INTO products (recipe_id, name, category_id, price, image, description, "isGrayedOut") VALUES
(10, 'Végé''tos', 1, 9.00, '/images/burrito1.jpg', 'Un burrito végétarien garni de tofu épicé, de haricots rouges, de tater tots croustillants et d’une sauce maison savoureuse.', FALSE),
(11, 'Poul''itos', 1, 8.00, '/images/burrito2.jpeg', 'Un burrito généreux avec du poulet mariné, des tater tots croustillants, du cheddar fondant et une touche de sauce maison.', FALSE),
(12, 'Beef''itos', 1, 10.00, '/images/burrito3.jpeg', 'Un burrito gourmand à base de bœuf mariné, poivrons sautés, oignons caramélisés, béchamel au gruyère et œufs.', FALSE),
(13, 'Sauss''itos', 1, 7.00, '/images/burrito4.jpg', 'Un burrito généreux avec des saucisses de poulet, du fromage emmental fondant et des œufs moelleux.', FALSE),

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

(NULL, 'Eau plate', 3, 1.00, 'images/juice4.jpg', NULL, FALSE),
(NULL, 'Eau pétillante', 3, 1.50, 'images/juice3.jpg', NULL, FALSE),
(NULL, 'Jus d''orange', 3, 2.00, 'images/juice2.jpg', 'Orange pressée.', FALSE),
(NULL, 'Mangue', 3, 3.00, NULL, 'Mangue mixée.', FALSE),
(NULL, 'Carotte', 3, 3.00, NULL, 'Carotte et lait concentré sucré vegan.', FALSE),
(NULL, 'Guinness', 3, 3.00, NULL, 'Bière.', FALSE),
(NULL, 'Lait végétal', 3, 2.00, 'images/juice1.jpg', 'Lait maison (noisette, riz ou amande).', FALSE),
(NULL, 'Mochaccito', 3, 2.00, 'images/juice5.jpg', 'Café et lait végétal.', FALSE),
(NULL, 'Café serré', 3, 2.00, 'images/juice6.jpg', 'Café serré.', FALSE),
(NULL, 'Café allongé', 3, 2.00, 'images/juice1.jpg', 'Café allongé.', FALSE),
(NULL, 'Chocolat chaud', 3, 3.00, 'images/juice2.jpg', 'Épices, sucre, chocolat, lait végétal.', FALSE),

(NULL, 'Segments d''orange', 6, 1.00, NULL, 'Orange coupée.', FALSE),
(NULL, 'Mangue coupé', 6, 2.00, NULL, 'Mangue coupée.', FALSE),
(NULL, 'Rondelles d''ananas', 6, 2.00, NULL, 'Ananas coupé.', FALSE),

(NULL, 'Frites', 4, 2.00, NULL, NULL, FALSE),
(NULL, 'Plantins', 4, 2.00, NULL, NULL, FALSE),
(NULL, 'Salade', 4, 3.00, NULL, 'Laitue, tomates, concombre, carottes, maïs.', FALSE),
(NULL, 'Tortillas', 4, 1.00, NULL, '2 tortillas.', FALSE),

(NULL, 'Crème mangue avocat', 6, 4.00, 'images/cream2.jpg', 'Crème onctueuse à base de lait concentré sucré vegan.', FALSE);

COMMIT;