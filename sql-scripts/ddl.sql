

/*IF (SELECT EXISTS (
  SELECT 1 
  FROM Information_schema.tables 
  WHERE table_name = 'user' 
  AND table_schema = 'waist' 
) AS flag = 1){
	DROP TABLE left_1;
	DROP TABLE left_2;
	DROP TABLE left_3;
	DROP TABLE right_1;
	DROP TABLE right_2;
	DROP TABLE right_3;
	DROP TABLE center;
	DROP TABLE dataset;
	DROP TABLE user;
}*/

CREATE TABLE center
(
	field_1              INTEGER NULL,
	field_2              INTEGER NULL,
	field_3              INTEGER NULL,
	field_4              INTEGER NULL,
	field_5              INTEGER NULL,
	field_6              INTEGER NULL,
	field_7              INTEGER NULL,
	field_8              INTEGER NULL,
	field_9              INTEGER NULL,
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE center
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE dataset
(
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE dataset
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE left_1
(
	field_1              INTEGER NULL,
	field_2              INTEGER NULL,
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE left_1
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE left_2
(
	field_1              INTEGER NULL,
	field_2              INTEGER NULL,
	field_3              INTEGER NULL,
	field_4              INTEGER NULL,
	field_5              INTEGER NULL,
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE left_2
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE left_3
(
	field_1              INTEGER NULL,
	field_2              INTEGER NULL,
	field_3              INTEGER NULL,
	field_4              INTEGER NULL,
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE left_3
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE right_1
(
	field_1              INTEGER NULL,
	field_2              INTEGER NULL,
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE right_1
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE right_2
(
	field_1              INTEGER NULL,
	field_2              INTEGER NULL,
	field_3              INTEGER NULL,
	field_4              INTEGER NULL,
	field_5              INTEGER NULL,
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE right_2
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE right_3
(
	field_1              INTEGER NULL,
	field_2              INTEGER NULL,
	field_3              INTEGER NULL,
	field_4              INTEGER NULL,
	seq                  INTEGER NOT NULL,
	created_at           DATE NOT NULL
);



ALTER TABLE right_3
ADD PRIMARY KEY (seq,created_at);



CREATE TABLE user
(
	seq                  INTEGER NOT NULL,
	height               INTEGER NOT NULL,
	weight               INTEGER NOT NULL
);



ALTER TABLE user
ADD PRIMARY KEY (seq);



ALTER TABLE center
ADD FOREIGN KEY R_5 (seq, created_at) REFERENCES dataset (seq, created_at);



ALTER TABLE dataset
ADD FOREIGN KEY R_3 (seq) REFERENCES user (seq);



ALTER TABLE left_1
ADD FOREIGN KEY R_4 (seq, created_at) REFERENCES dataset (seq, created_at);



ALTER TABLE left_2
ADD FOREIGN KEY R_2 (seq, created_at) REFERENCES dataset (seq, created_at);



ALTER TABLE left_3
ADD FOREIGN KEY R_1 (seq, created_at) REFERENCES dataset (seq, created_at);



ALTER TABLE right_1
ADD FOREIGN KEY R_6 (seq, created_at) REFERENCES dataset (seq, created_at);



ALTER TABLE right_2
ADD FOREIGN KEY R_7 (seq, created_at) REFERENCES dataset (seq, created_at);



ALTER TABLE right_3
ADD FOREIGN KEY R_8 (seq, created_at) REFERENCES dataset (seq, created_at);


