-- Create users table.
CREATE TABLE node.users (
    id VARCHAR(36) NOT NULL COMMENT 'User id',
    name VARCHAR(255) NOT NULL COMMENT 'User name',
    email VARCHAR(50) NOT NULL UNIQUE COMMENT 'User email',
    status TINYINT NOT NULL DEFAULT 1 COMMENT 'User status',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Create some users.
INSERT INTO node.users
    (id, name, email, status)
VALUES
    (UUID(), 'Test 1', 'test1@test.com', 1),
    (UUID(), 'Test 2', 'test2@test.com', 1),
    (UUID(), 'Test 3', 'test3@test.com', 0);
