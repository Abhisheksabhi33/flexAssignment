

MYSQL CLI COMMANDS:
mysql -h bpffm0sekcbbwrjtdwqa-mysql.services.clever-cloud.com -P 3306 -u ubks0geq63ss4jvt -p bpffm0sekcbbwrjtdwqa

PASSWORD:
bpffm0sekcbbwrjtdwqa



USE bpffm0sekcbbwrjtdwqa;

CREATE TABLE Users (
    ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Age INTEGER NOT NULL CHECK (Age > 0 AND Age < 100),
    Email VARCHAR(100) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Batch VARCHAR(20) CHECK (Batch IN ('6-7AM', '7-8AM', '8-9AM', '5-6PM')),
    userRegistrationDate DATE DEFAULT (CURRENT_DATE),
    LastBatchChangeDate DATE DEFAULT (CURRENT_DATE)
);

CREATE TABLE Payment (
    ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    UserID INTEGER REFERENCES Users(ID),
    LastPaymentDate DATE DEFAULT (CURRENT_DATE),
    PaymentStatus CHAR(1) DEFAULT 'F' CHECK (PaymentStatus IN ('T', 'F'))
);



