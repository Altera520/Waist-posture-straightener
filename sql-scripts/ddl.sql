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
	field_10             INTEGER NULL,
	field_11             INTEGER NULL,
	field_12             INTEGER NULL,
	field_13             INTEGER NULL,
	field_14             INTEGER NULL,
	field_15             INTEGER NULL,
	field_16             INTEGER NULL,
	field_17             INTEGER NULL,
	field_18             INTEGER NULL,
	field_19             INTEGER NULL,
	field_20             INTEGER NULL,
	field_21             INTEGER NULL,
	field_22             INTEGER NULL,
	field_23             INTEGER NULL,
	field_24             INTEGER NULL,
	field_25             INTEGER NULL,
	field_26             INTEGER NULL,
	field_27             INTEGER NULL,
	field_28             INTEGER NULL,
	field_29             INTEGER NULL,
	field_30             INTEGER NULL,
	field_31             INTEGER NULL,
	created              DATE NOT NULL,
	pos                  INTEGER NOT NULL,
	seq                  INTEGER NOT NULL
);



ALTER TABLE center
ADD PRIMARY KEY (created,pos,seq);



CREATE TABLE pos
(
	pos                  INTEGER NOT NULL,
	seq                  INTEGER NOT NULL
);



ALTER TABLE pos
ADD PRIMARY KEY (pos,seq);



CREATE TABLE user
(
	seq                  INTEGER NOT NULL AUTO_INCREMENT,
	name                 VARCHAR(20) NOT NULL,
	pos                  INTEGER NOT NULL
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



ALTER TABLE user
ADD PRIMARY KEY (seq);



ALTER TABLE center
ADD FOREIGN KEY R_11 (pos, seq) REFERENCES pos (pos, seq);



ALTER TABLE pos
ADD FOREIGN KEY R_10 (seq) REFERENCES user (seq);


