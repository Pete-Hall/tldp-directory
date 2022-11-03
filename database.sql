CREATE TABLE directory (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR (255),
    "phone" VARCHAR (255),
    "job" VARCHAR (255),
    "location" VARCHAR (255),
    "salary" VARCHAR (255),
    "hr" BOOLEAN,
    "manager" INTEGER,
);

INSERT INTO directory ("username", "password", "name", "phone", "job", "location", "salary", "hr", "manager") VALUES ('pete', 'heyjude', 'Pete', '123-456-7890', 'TLDP Software Engineer', 'St. Paul, MN', '$1,000,000', false, 3);

INSERT INTO directory ("username", "password", "name", "phone", "job", "location", "salary", "hr", "manager") VALUES ('oscar', 'heyjude', 'Oscar', '234-567-8901', 'Human Resources Business Parnter', 'Hartford, CT', '$1,000,000', true, 0);

INSERT INTO directory ("username", "password", "name", "phone", "job", "location", "salary", "hr", "manager") VALUES ('ola', 'heyjude', 'Ola', '345-678-9012', 'Director, Software Engineering', 'Irvine, CA', '$3,000,000', false, 0);

INSERT INTO directory ("username", "password", "name", "phone", "job", "location", "salary", "hr", "manager") VALUES ('chris', 'heyjude', 'Chris', '456-789-0123', 'Senior Software Engineer', 'Astoria, OR', '$2,000,000', false, 3)