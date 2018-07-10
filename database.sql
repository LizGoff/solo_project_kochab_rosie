CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    name VARCHAR (80) UNIQUE NOT NULL
);

INSERT INTO "topics" ("name")
VALUES ('Politics'), ('Health'), ('Education'), ('LBGTQ Community'), ('Our Story'), ('Empowerment'), ('The Arts'), ('Technology'), ('Science'), ('Business'), ('Resources'), ('Global Issues'), ('Environment'), ('Social Justice'), ('Women Our History'), ('Women Now'), ('Charity'), ('Fundraising'), ('Family'), ('Economics'), ('Racial Equality'), ('Ending Violence'), ('Reproductive Rights'), ('The Wage Gap'), ('Fight Human Trafficking'), ('Equality'), ('Social Services'), ('Votes for Women'), ('Medical Field');

INSERT INTO "topics" ("name")
VALUES ('Music'), ('Finances'), ('Addiction'), ('Mental Heath'), ('Grief and Loss'), ('Justice System'), ('A Call To Action'), ('Engineering'), ('Mathematics');

INSERT INTO "topics" ("name")
VALUES ('Help Suuport Us');

INSERT INTO "topics" ("name")
VALUES ('Fashion');

CREATE TABLE "links" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR UNIQUE NOT NULL,
    "topic_id" INTEGER
);

CREATE TABLE "links" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR,
    "topic_id" INTEGER,
    "user_id" INTEGER
);

CREATE TABLE "comments" (
    "id" SERIAL PRIMARY KEY,
    "comment" VARCHAR,
    "user_id" INTEGER,
    "topic_id" INTEGER
);

SELECT * FROM comments
ORDER BY id;

ALTER TABLE "comments"
ADD "subtopic_id" INTEGER;

ALTER TABLE "person"
ADD "type_user" VARCHAR;

CREATE TABLE "subtopics" (
    "id" SERIAL PRIMARY KEY,
    "subtopic" VARCHAR,
    "user_id" INTEGER,
    "topic_id" INTEGER
);

CREATE TABLE "subtopics" (
    "id" SERIAL PRIMARY KEY,
    "subtopic" VARCHAR,
    "person_id" INT REFERENCES person
);

CREATE TABLE "comments" (
    "id" SERIAL PRIMARY KEY,
    "comment" VARCHAR,
	"person_id" INT REFERENCES person,
    "topic_id" INTEGER,
    "subtopic_id" VARCHAR
);

INSERT INTO "subtopics" ("subtopic", "topic_id")
VALUES ('How do I run for political office?', 2), ('Which women do you think will run for President next?', 2);

INSERT INTO "subtopics" ("subtopic", "topic_id")
VALUES ('Who is your favorite female educator?', 4), ('Are there any scholarships that help women become educators in my area?', 4);