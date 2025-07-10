CREATE VIEW Available_Doctors_View AS
SELECT doctor_id, name, specialization
FROM Doctors
WHERE available_from <= CURTIME() AND available_to >= CURTIME();

select * from Available_Doctors_View;

CREATE VIEW NEAREST_PHARMACY AS
select pharmacy_id, name, city, area
from pharmacies;

select  * from  NEAREST_PHARMACY
where city = "Delhi"








