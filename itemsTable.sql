-- Database: `inventoryManagementsystem`

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    itemNumber VARCHAR(255) NOT NULL,
    itemName VARCHAR(255) NOT NULL,
    itemQuantity INT NOT NULL,
    itemPrice DECIMAL(10, 2) NOT NULL,
    itemVendor VARCHAR(255) NOT NULL,
    itemDescription TEXT,
    itemInventoryStatus VARCHAR(50) NOT NULL,
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE 
);

CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL
);

-- Data for `user`
INSERT INTO user (id, username, password) VALUES
(1, 'admin', 'admin');

-- Create table for reorders 
CREATE TABLE reorders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    reorder_quantity INT NOT NULL,
    reorder_date DATE NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(id)
);

-- Modify the items table to include reorder level and reorder quantity
ALTER TABLE items
ADD COLUMN reorder_level INT NOT NULL DEFAULT 0,
ADD COLUMN reorder_quantity INT NOT NULL DEFAULT 0;

-- Validate item number before deletion
DELETE FROM items
WHERE itemNumber = 'ItemNumberToDelete'
AND EXISTS (
    SELECT 1
    FROM items
    WHERE itemNumber = 'ItemNumberToDelete'
);