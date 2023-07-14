SELECT COLUMN_NAME
FROM information_schema.COLUMNS
WHEN TABLE_NAME = 'languages';

INSERT INTO languages (name)
VALUES ('HTML'), ('CSS'), ('JavaScript')
RETURNING *;
