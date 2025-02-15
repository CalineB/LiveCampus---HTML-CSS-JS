

# Roles

|     Attribut      |       Type          |       Description       | 
|-------------------|---------------------|-------------------------|
| role_id           | INT  (PK, AI)       | Unique                  |
| name              | VARCHAR(25)         | Admin/Deliverer/Client  |




# Users

|        Attribut       |       Type          |        Description        | 
|-----------------------|---------------------|---------------------------|
| user_id               | INT (PK, AI)        | Unique                    |
| role_id               | INT (FK)            | references`roles(role_id)`|
| user_email            | VARCHAR(100)        | Unique NOT NULL           |
| user_firstname        | VARCHAR(50)         | NOT NULL                  |
| user_lastname         | VARCHAR(50)         | NOT NULL                  |
| user_pseudo           | VARCHAR(50)         | Unique (NULL)             |
| user_password         | VARCHAR(250)        | Crypted                   |
| user_street           | VARCHAR(50)         | NOT NULL                  |
| user_city             | VARCHAR (50)        | NOT NULL                  |
| user_zipcode          | VARCHAR (15)        | NOT NULL                  |
| user_address_extra    | VARCHAR(50)         | NOT NULL                  |
| user_phone            | VARCHAR(15)         | NOT NULL                  |
| user_miams            | INT                 | Points                    |
| created_at            | TIMESTAMP           | Now                       |
| updated_at            | TIMESTAMP           | Now                       |



# Orders

|    Attribut       |       Type          |                        Description                   | 
|-------------------|---------------------|------------------------------------------------------|
| order_id          | INT (PK, AI)        | Unique                                               |
| user_id           | INT (FK)            | references `user(user_id)`                            |
| total_price       | DECIMAL(10,2)       |                                                      |
| status            | ENUM                | pending, confirmed, delivered, cancelled, in progess |
| order_miams       | INT                 | Points on order                                      |
| created_at        | TIMESTAMP           | Now                                                  |
| payment_method    | ENUM                | CB, Crypto, transfer                                 |


# Products_categories

|     Attribut   |     Type      |      Description     |
|----------------|----------------|-------------------------|
| category_id    | INT (PK, AI)   | Unique                  |
| name           | VARCHAR(50)    | Category name (unique)  |




# Products

|     Attribut     |     Type       |                Description                   |
|------------------|----------------|----------------------------------------------|
| product_id       | INT (PK, AI)   | Unique                                       |
| name             | VARCHAR(100)   | Unique                                       |
| category_id      | INT            | references `products_categories(category_id)` |
| price            | DECIMAL(10,2)  | Product price                                |
| image            | TEXT           | Road to image                                |
| description      | TEXT           | Product description                          |
| available_starts | TIME           | Producion starting time                      |
| available_ends   | TIME           | Production end time                          |
| timezone         | TIME           | Timezone                                     |
| isGrayedOut      | BOOLEAN        | Is grayed out ?                              |



# Orders_Products

|     Attribut   |      Type       |            Description            |
|----------------|-----------------|-----------------------------------|
| order_id       | INT (FK)        | references `orders(order_id)`      |
| product_id     | INT (FK)        | references `products(product_id)`  |
| quantity       | INT             | Amount ordered                    |
| unit_price     | DECIMAL(10,2)   | Product price                     |
| subtotal_price | DECIMAL(10,2)   | Quantity * unite_price            |




# Deliverers

|     Attribute     |       Type        |               Description                  |
|-------------------|-------------------|--------------------------------------------|
| delivery_person_id| INT (PK, AI)      | Unique identifier for the delivery person  |
| role_id           | INT (FK)           | references`roles(role_id)` |
| firstname         | VARCHAR(50)       | First name of the delivery person          |
| lastname          | VARCHAR(50)       | Last name of the delivery person           |
| phone_number      | VARCHAR(15)       | Phone number for contact                   |
| email             | VARCHAR(100)      | Email address of the delivery person       |
| deliverer_status  | ENUM              | Available, on delivery, unavailable        |
| vehicle_type      | VARCHAR(50)       | Type of vehicle_type
| vehicle_plate     | VARCHAR(50)       | Type of vehicle_type                       |                       |
| assigned_orders   | INT               | Numbers of orders assigned                  |
| created_at        | TIMESTAMP         | Timestamp of when the record was created   |
| updated_at        | TIMESTAMP         | Timestamp of the last update               |


# Delivery_Orders

|     Attribute     |       Type      |                 Description                   |
|-------------------|-----------------|-----------------------------------------------|
| delivery_id       | INT (PK, AI)    | Unique                                        |
| order_id          | INT (FK)        | references `order(order_id)`                   |
| deliverer_id      | INT (FK)        | references `deliverer(delivery_person_id)`     |
| delivery_status   | ENUM            | pending, on_route, delivered, failed          |
| delivery_date     | TIMESTAMP       | Delivery time requested                       |
| delivered_at      | TIMESTAMP NULL  | Delivered time                                |


# Orders_history

|     Attribute        |       Type      |               Description                 |
|----------------------|-----------------|-------------------------------------------|
| order_history_id     | INT (PK, AI)    | Unique                                    |
| order_id             | INT (FK)        | references `order(order_id)`               |
| user_id              | INT (FK)        | references `user(user_id)`                 |
| deliverer_id         | INT (FK)        | references `deliverer(delivery_person_id)` |
| total_price          | DECIMAL(10,2)   | Order total_price                         |
| order_history_state  | ENUM            | Delived, failed                           |
| created_at           | TIMESTAMP       | Order date                                |
| archived_at          | TIMESTAMP       | Archived date                             |
