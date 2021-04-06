CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS "link" (
    id uuid DEFAULT uuid_generate_v4(),
    original_link VARCHAR (255) UNIQUE NOT NULL,
    bee_link VARCHAR (255) UNIQUE NOT NULL,
    
);