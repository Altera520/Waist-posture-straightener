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
	created              DATETIME NOT NULL,
	position                  INTEGER NOT NULL,
	name                  VARCHAR(20) NOT NULL
);



ALTER TABLE center
ADD PRIMARY KEY (created,position,name);



CREATE TABLE pos
(
	position                  INTEGER NOT NULL,
	name                 VARCHAR(20) NOT NULL
);


ALTER TABLE pos
ADD PRIMARY KEY (position,name);

CREATE TABLE user
(
	name                 VARCHAR(20) NOT NULL,
	PRIMARY KEY (name)
);



ALTER TABLE center
ADD FOREIGN KEY R_11 (position, name) REFERENCES pos (position, name);



ALTER TABLE pos
ADD FOREIGN KEY R_10 (name) REFERENCES user (name);


