BEGIN;

DROP TABLE IF EXISTS 
roles,
users,
orders,
products_categories,
products, 
products_availability,
orders_products,
deliverers,
delivery_orders,
orders_history,
suppliers,
ingredients,
supplier_ingredients,
recipes,
recipe_ingredients
CASCADE;

DROP TYPE order_status CASCADE;
DROP TYPE payment_method CASCADE;
DROP TYPE deliverer_status CASCADE;
DROP TYPE delivery_status CASCADE;
DROP TYPE order_history_state CASCADE;


CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'delivered', 'cancelled', 'in progress');
CREATE TYPE payment_method AS ENUM ('cb', 'crypto', 'bank transfer');
CREATE TYPE deliverer_status AS ENUM ('available', 'on delivery', 'unavailable');
CREATE TYPE delivery_status AS ENUM ('pending', 'on_route', 'delivered', 'failed');
CREATE TYPE order_history_state AS ENUM ('delivered', 'failed');



CREATE TABLE roles (
    role_id SERIAL UNIQUE,
    name VARCHAR(25)
);

INSERT INTO roles (name) VALUES
    ('admin'),
    ('customer'),
    ('deliverer');


CREATE TABLE users (
    user_id SERIAL UNIQUE,
    role_id INT REFERENCES roles(role_id) ON DELETE CASCADE,
    user_email VARCHAR(100) UNIQUE NOT NULL,
    user_firstname VARCHAR(50) NOT NULL,
    user_lastname VARCHAR(50) NOT NULL,
    user_pseudo VARCHAR(50),
    user_password VARCHAR(250),
    user_street VARCHAR(50),
    user_city VARCHAR(50),
    user_zipcode VARCHAR(15),
    user_address_extra VARCHAR(50),
    user_phone VARCHAR(15),
    user_miams INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE orders (
    order_id SERIAL UNIQUE,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    total_price DECIMAL(10, 2),
    status order_status,
    order_miams INT,
    created_at TIMESTAMP,
    payment payment_method
);

CREATE TABLE products_categories (
    category_id SERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(50)
);

INSERT INTO products_categories (name) VALUES
('Burritos'),
('Poulet'),
('Boisson'),
('Accompagnement'),
('Enfant'),
('Dessert');


CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    servings INT NOT NULL CHECK (servings > 0),
    steps JSONB NOT NULL, -- Stocke les étapes de la recette sous forme de liste
    cooking_method VARCHAR(255),
    cooking_time INT,
    cooking_temperature VARCHAR
);

CREATE TABLE ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    product_id SERIAL UNIQUE,
    recipe_id INT REFERENCES recipes(recipe_id) ON DELETE CASCADE,
    name VARCHAR(100) UNIQUE,
    category_id INT NOT NULL REFERENCES products_categories(category_id) ON DELETE CASCADE,
    price DECIMAL(10, 2),
    image TEXT,
    description TEXT,
    "isGrayedOut" BOOLEAN DEFAULT FALSE
);

CREATE TABLE products_availability (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(product_id) ON DELETE CASCADE,
    day_of_week VARCHAR(10) CHECK (day_of_week IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

CREATE TABLE orders_products (
    orders_products SERIAL UNIQUE,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    product_id INT REFERENCES products(product_id) ON DELETE CASCADE,
    quantity INT,
    unit_price DECIMAL(10, 2),
    subtotal_price DECIMAL(10, 2)
);

CREATE TABLE suppliers (
    supplier_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT NOT NULL
);

CREATE TABLE supplier_ingredients (
    supplier_ingredients_id SERIAL PRIMARY KEY,
    supplier_id INT REFERENCES suppliers(supplier_id) ON DELETE CASCADE,
    ingredient_id INT REFERENCES ingredients(ingredient_id) ON DELETE CASCADE,
    price DECIMAL(10, 2) NOT NULL, -- Prix de l’ingrédient chez ce fournisseur
    unit VARCHAR(50) NOT NULL -- Unité de mesure (kg, L, pièce, etc.)
);

CREATE TABLE recipe_ingredients (
    recipe_id INT REFERENCES recipes(recipe_id) ON DELETE CASCADE,
    ingredient_id INT REFERENCES ingredients(ingredient_id) ON DELETE CASCADE,
    quantity VARCHAR(100) NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id) -- Empêche les doublons
);

CREATE TABLE deliverers (
    deliverer_id SERIAL UNIQUE,
    role_id INT REFERENCES roles(role_id) ON DELETE CASCADE,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    phone_number VARCHAR(15),
    email VARCHAR(100),
    presence deliverer_status,
    vehicle_type VARCHAR,
    vehicle_plate VARCHAR,
    assigned_orders INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP

);

CREATE TABLE delivery_orders (
    delivery_id SERIAL UNIQUE,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    deliverer_id INT REFERENCES deliverers(deliverer_id) ON DELETE CASCADE,
    state delivery_status,
    delivery_date TIMESTAMP,
    delivered_at TIMESTAMP

);

CREATE TABLE orders_history (
    orders_history_id SERIAL UNIQUE,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id),
    deliverer_id INT REFERENCES deliverers(deliverer_id) ON DELETE CASCADE,
    total_price DECIMAL(10, 2),
    final_state order_history_state,
    created_at TIMESTAMP,
    archived_at TIMESTAMP
);

COMMIT;