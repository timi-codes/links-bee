CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS "link" (
    id uuid DEFAULT uuid_generate_v4(),
    original_url VARCHAR (255) NOT NULL,
    bee_id VARCHAR (255) NOT NULL,
    visits INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    UNIQUE (original_url, bee_id)
);