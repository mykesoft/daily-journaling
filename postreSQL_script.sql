CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
	publication_date DATE NOT NULL UNIQUE,
    content TEXT
);