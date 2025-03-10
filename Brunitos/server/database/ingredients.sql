BEGIN;

INSERT INTO ingredients (name) VALUES
('Farine'),
('Eau'),
('Huile'),
('Sel'),
('Sucre'),
('Lait concentré sucré'),
('Ail'),
('Oignon'),
('Ail en poudre'),
('Oignons en poudre'),
('Levure malté'),
('Curcuma'),
('Curry'),
('Paprika'),
('Poivrons rouge'),
('Poivrons jaune'),
('Coriandre'),
('Persil'),
('Cive'),
('Citron'),
('Feuilles d''épignard'),
('Avocat'),
('Tomate'),
('Laitue'),
('Concombre'),
('Carottes'),
('Maïs'),
('Haricots rouges'),
('Piments végétariens'),
('Jalapenos'),
('Mayo vegan'),
('Sauce peri-peri'),
('Lait de riz'),
('Tater tots'),
('Feuilles de riz'),
('Faux-mage'),
('Cheddar'),
('Gruyère'),
('Emmental'),
('Œuf'),
('Saucisse poulet'),
('Hampe de bœuf'),
('Café'),
('Chocolat (tablette)'),
('Cacao en poudre'),
('Orange'),
('Ananas'),
('Mangue');


INSERT INTO recipes (title, servings, steps, cooking_method, cooking_time, cooking_temperature) VALUES
('Tortillas', 6, '["Mélanger la farine avec l''eau, l''huile, le sel et le sucre, laisser poser 15-30min. Applatir"]', 'Poêle', 1, 'Feu moyen'),
('Vecon', 6, '["Humidifier les feuilles de riz, les assaisonner dans une marinade et les faire cuire dans une poêle sur feu doux jusqu''au résultat désiré"]', 'Poêle', NULL, 'Feu doux'),
('Poulet burritos', 12, '["Ajouter les épices et aliacés, faire mariner une nuit, faire cuire dans une poêle/sur un grill ou sur une plaque bien chaude avec un petit filet d''huile sur feu moyen, ajouter de l''eau lorsque ça commence à coller, effiler la viande et réserver"]', 'Poêle/Grill', NULL, 'Feu moyen'),
('Poulet frit', 15, '["Mixer tous les ingrédients et faire une marinade pour faire mariner les poulets une nuit au frais. Enrober les morceaux de poulet de farine assaisonnée, faire tremper 30sec dans de l''eau, remettre dans la farine assaisonnée et faire frire sur feu moyen pendant 4min de chaque côté, retirer du feu, laisser refroidir et faire frire à nouveau sur feu très fort 30sec par côté"]', 'Friture', 8, 'Feu moyen puis fort'),
('Bœuf', 12, '["Faire mariner le bœuf la veille dans les épices, Faire cuire sur un grill ou à la vapeur ou au four jusqu''à ce que la viande soit tendre"]', 'Grill/Vapeur/Four', NULL, NULL),
('Béchamel', 12, '["Ajouter un peu d''huile dans une poêle, dès qu''elle est chaude ajouter un peu de farine, mélanger et ajouter du lait de riz progressivement jusqu''à obtenir une consistance pas trop liquide mais un peu, ajouter de la muscade, du sel et le gruyère, mélanger jusqu''à avoir une consistance homogène"]', 'Poêle', NULL, NULL),
('Œuf', 12, '["Casser 24 œufs, ajouter du sel, un peu de curcuma, un peu de paprika, du jus de citron et un peu d''eau, battre vigoureusement et longtemps. Faire cuire dans une poêle très chaude en remuant pour créer de l''épaisseur (ou pas selon la préférence des clients)"]', 'Poêle', NULL, 'Très chaud'),
('PeriMayo', 12, '["Mélanger 1 tasse de mayo vegan, 1 demi-tasse de sauce peri peri, de l''ail et de l''oignon en poudre et du paprika en poudre"]', 'Aucun', NULL, NULL),
('Guacamole salsa', 6, '["Écraser un avocat, couper les oignons, tomates, jalapeños et coriandre en petits cubes, ajouter du sel, du citron vert ainsi qu''un petit filet d''huile, réserver au frais"]', 'Aucun', NULL, NULL),
('Végé''tos', 12, '["Émietter 1kg de tofu, Assaisonner le tofu, faire cuire dans une poêle et ajouter un peu de lait, laisser cuire sur feu moyen, réserver de côté. Faire cuire des haricots rouges avec des épices. Faire cuire des tater tots au four ou au airfryer, Dans la tortillas, ajouter la sauce, les feuilles d''épinards fraîches, le faux-mage, les tater tots, les haricots, le tofu, le vecon et faire griller le tacos roulé pendant 1min sur chaque côté"]', 'Poêle/Four/Airfryer', 1, 'Feu moyen'),
('Poul''itos', 12, '["Ajouter le cheddar, les œufs, le vecon, le poulet, la sauce et les tater tots, faire dorer le tacos dans une poêle sur chaque côté"]', 'Poêle', NULL, NULL),
('Beef''itos', 6, '["Découper le bœuf en tranches fines, Faire sauter des poivrons et des oignons dans une poêle, ajouter dans la tortillas les œufs, le vecon, les tranches de bœuf, les légumes sautés et de la béchamel de gruyère, faire dorer le tacos dans une poêle sur chaque côté"]', 'Poêle', NULL, NULL),
('Sauss''itos', 1, '["Préparer 3 œufs, ajouter dans une tortillas la sauce, les œufs, les tater tots, les saucisses coupées en dés et de l''emmental râpé, faire dorer le tacos dans une poêle sur chaque côté"]', 'Poêle', NULL, NULL);


INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity) VALUES
(1, 1, '200g'), (1, 2, '100ml'), (1, 3, '1 cuillère à soupe'), (1, 4, '1 pincée'), (1, 5, '1 cuillère à soupe'),
(2, 34, '6 feuilles'), -- Feuilles de riz pour le Vecon
(3, 7, '2 gousses'), (3, 8, '1'), (3, 12, '1 cuillère à café'), (3, 13, '1 cuillère à café'), -- Poulet burritos
(4, 1, '100g'), (4, 3, '1 cuillère à soupe'), (4, 7, '2 gousses'), (4, 19, '2 branches'), (4, 20, '1'), -- Poulet frit
(5, 40, '500g'), -- Bœuf
(6, 3, '1 cuillère à soupe'), (6, 1, '2 cuillères à soupe'), (6, 31, '300ml'), -- Béchamel
(7, 38, '24 unités'), (7, 12, '1 cuillère à café'), (7, 13, '1 cuillère à café'), -- Œuf
(8, 30, '1 tasse'), (8, 31, '1/2 tasse'), -- PeriMayo
(9, 22, '1 unité'), (9, 23, '1'), (9, 24, '1'), -- Guacamole salsa
(10, 41, '1kg'), (10, 26, '100g'), (10, 32, '6 unités'), -- Végé'tos
(11, 37, '100g'), (11, 38, '3 unités'), -- Poul'itos
(12, 40, '200g'), (12, 15, '1 unité'), (12, 16, '1 unité'), (12, 36, '100g'), -- Beef'itos
(13, 38, '3 unités'), (13, 39, '2 unités'), (13, 36, '50g'); -- Sauss'itos

COMMIT;