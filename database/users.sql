BEGIN;

DROP TABLE IF EXISTS 
users,
addresses
CASCADE;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    aka VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    phone VARCHAR(20),
    profile_picture TEXT DEFAULT '/images/profile.png',
    miams_points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(10) CHECK (type IN ('home', 'work', 'other', 'temp')) NOT NULL,
    street TEXT NOT NULL,
    street_number VARCHAR(10),
    additional_line TEXT,
    postal_code VARCHAR(10) NOT NULL,
    city VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
