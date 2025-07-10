create database healthcare;

create table Hospitals (
    hospital_id INT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(50),
    area VARCHAR(50),
    total_beds INT,
    available_beds INT
);
INSERT INTO Hospitals
VALUES
(1, 'CityCar', 'Delhi', 'Karol Bagh', 120, 30),
(2, 'Sunrise ', 'Mumbai', 'Andheri', 80, 10),
(3, 'GreenLife ', 'Bangalore', 'BTM Layout', 100, 20),
(4, 'Metro ', 'Hyderabad', 'Begumpet', 90, 15);


create table Doctors (
    doctor_id INT PRIMARY KEY,
    name VARCHAR(100),
    specialization VARCHAR(50),
    hospital_id INT,
    available_from TIME,
	available_to TIME,
    FOREIGN KEY (hospital_id) REFERENCES Hospitals(hospital_id)
);
INSERT INTO Doctors (doctor_id, name, specialization, hospital_id, available_from, available_to) VALUES
(1, 'Dr. Ayesha Khan', 'Cardiologist', 1, '10:00:00', '14:00:00'),
(2, 'Dr. Ravi Mehta', 'Orthopedic', 2, '09:00:00', '13:00:00'),
(3, 'Dr. Neha Sinha', 'Pediatrician', 3, '12:00:00', '16:00:00'),
(4, 'Dr. Ajay Verma', 'Neurologist', 4, '11:00:00', '15:00:00'),
(5, 'Dr. Sneha Roy', 'Dermatologist', 1, '14:00:00', '18:00:00');


create table Pharmacies (
    pharmacy_id INT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(50),
    area VARCHAR(50)
);
INSERT INTO Pharmacies (pharmacy_id, name, city, area) VALUES
(1, 'MediPlus Pharmacy', 'Delhi', 'Karol Bagh'),
(2, 'WellCare Drugs', 'Mumbai', 'Andheri'),
(3, 'HealthFirst Pharmacy', 'Bangalore', 'BTM Layout'),
(4, 'QuickMeds', 'Hyderabad', 'Begumpet');


create table Medicines (
    medicine_id INT PRIMARY KEY,
    name VARCHAR(100),
    brand VARCHAR(50),
    price DECIMAL(10,2)
);
INSERT INTO Medicines (medicine_id, name, brand, price) VALUES
(1, 'Paracetamol 500mg', 'Cipla', 20.00),
(2, 'Amoxicillin 250mg', 'Sun Pharma', 35.00),
(3, 'Cough Syrup', 'Zydus', 50.00),
(4, 'Vitamin D Tablets', 'Himalaya', 60.00),
(5, 'Antacid', 'Abbott', 25.00);



create table Pharmacy_Stock (
    pharmacy_id INT,
    medicine_id INT,
    stock_quantity INT,
    FOREIGN KEY (pharmacy_id) REFERENCES Pharmacies(pharmacy_id),
    FOREIGN KEY (medicine_id) REFERENCES Medicines(medicine_id),
    PRIMARY KEY (pharmacy_id, medicine_id)
);
INSERT INTO Pharmacy_Stock (pharmacy_id, medicine_id, stock_quantity) VALUES
(1, 1, 100),
(1, 2, 50),
(1, 4, 40),
(2, 1, 30),
(2, 3, 20),
(3, 2, 60),
(3, 5, 35),
(4, 1, 45),
(4, 4, 50),
(4, 5, 60);




create table Bed_Usage_Log (
    log_id INT PRIMARY KEY,
    hospital_id INT,
    date DATE,
    icu_beds_used INT,
    general_beds_used INT,
    FOREIGN KEY (hospital_id) REFERENCES Hospitals(hospital_id)
);
INSERT INTO Bed_Usage_Log (log_id, hospital_id, date, icu_beds_used, general_beds_used) VALUES
(1, 1, '2025-07-08', 12, 30),
(2, 1, '2025-07-09', 15, 28),
(3, 2, '2025-07-08', 8, 20),
(4, 2, '2025-07-09', 7, 18),
(5, 3, '2025-07-09', 10, 25),
(6, 4, '2025-07-08', 5, 10),
(7, 4, '2025-07-09', 6, 12);






