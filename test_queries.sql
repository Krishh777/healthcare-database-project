SELECT * FROM Hospitals WHERE hospital_id = 1;
INSERT INTO Bed_Usage_Log (log_id, hospital_id, date, icu_beds_used, general_beds_used)
VALUES (8, 1, CURDATE(), 2, 3);

UPDATE Bed_Usage_Log
SET icu_beds_used = 1, general_beds_used = 1
WHERE log_id = 8;

#  hospitals in a city with more than 10 ICU beds available
select  name, hospital_id,city
from hospitals
where total_beds >= 10;


# List doctors in your area who are available now.
select  doctor_id, name,available_from,available_to
from doctors
where  available_from <= CURRENT.TIME() AND available_to >= CURRENT.TIME();

# Find which pharmacies in a city have a specific medicine in stock.
select pharmacy_id,city,medicine_id
from Pharmacies,Medicines
where medicine_id = "1";

SELECT pharmacy_id, stock_quantity, medicine_id
FROM Pharmacy_Stock
WHERE stock_quantity <= 50;
