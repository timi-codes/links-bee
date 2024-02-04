CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS "user" (
    id uuid DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    last_login TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS "link" (
    bee_id VARCHAR (7) NOT NULL,
    name VARCHAR (255),
    original_url VARCHAR (255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    last_visited_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    user_id uuid,
    PRIMARY KEY (bee_id),
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE
);
