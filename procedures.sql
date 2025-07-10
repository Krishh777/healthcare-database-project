
# procedure to check the availability of doctors nearby
DELIMITER $$

CREATE PROCEDURE available_doctors()
BEGIN
	SELECT doctor_id, name, available_from, available_to
	FROM Doctors
	WHERE available_from <= CURTIME() AND available_to >= CURTIME();
END $$

DELIMITER ;

CALL available_doctors();

DELIMITER $$

# procedure to check the availability of  medicine


CREATE PROCEDURE checkmedicine(IN name_med VARCHAR(50))
BEGIN
	SELECT 
		Pharmacy_Stock.pharmacy_id,
		Pharmacy_Stock.medicine_id,
		Medicines.name,
		Pharmacy_Stock.stock_quantity
	FROM Pharmacy_Stock
	JOIN Medicines ON Pharmacy_Stock.medicine_id = Medicines.medicine_id
	WHERE Medicines.name = name_med;
END $$

DELIMITER ;
CALL checkmedicine('Paracetamol 500mg');



# procedure to check the nearest pharmacy
DELIMITER $$

CREATE PROCEDURE GetNearestPharmacy(IN city_name VARCHAR(50))
BEGIN
	SELECT pharmacy_id, name, city, area
	FROM Pharmacies
	WHERE city = city_name;
END $$

DELIMITER ;
