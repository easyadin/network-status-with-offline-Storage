CREATE TABLE IF NOT EXISTS company(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    companyName TEXT,
    headquater TEXT,
    ceo TEXT,
    headcount INTEGER
);

INSERT
    or IGNORE INTO company
VALUES (1, 'Amazon', 'USA', 'Jeff Bezos', 3500);
INSERT
    or IGNORE INTO company
VALUES (2, 'Google', 'USA', 'Sundar Pichai', 7600);
INSERT
    or IGNORE INTO company
VALUES (3, 'Microsoft', 'USA', 'Satya Nadella', 4000);