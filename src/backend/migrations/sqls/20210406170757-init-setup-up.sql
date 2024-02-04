CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS "link" (
    bee_id VARCHAR (7) NOT NULL,
    original_url VARCHAR (255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    last_visited_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    PRIMARY KEY (bee_id)
    UNIQUE (original_url, bee_id)
);


CREATE TABLE IF NOT EXISTS "user" (
    id uuid DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
);
