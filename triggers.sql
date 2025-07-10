DELIMITER $$

CREATE TRIGGER after_bed_insert
AFTER INSERT ON Bed_Usage_Log
FOR EACH ROW
BEGIN
	DECLARE total_usage INT;
	SET total_usage = NEW.icu_beds_used + NEW.general_beds_used;

	UPDATE Hospitals
	SET available_beds = GREATEST(available_beds - total_usage, 0)
	WHERE hospital_id = NEW.hospital_id;
END $$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER after_bed_update
AFTER UPDATE ON Bed_Usage_Log
FOR EACH ROW
BEGIN
    DECLARE old_total INT;
    DECLARE new_total INT;
    DECLARE difference INT;
    
    SET old_total = OLD.icu_beds_used + OLD.general_beds_used;
    SET new_total = NEW.icu_beds_used + NEW.general_beds_used;
    SET difference = new_total - old_total;

    UPDATE Hospitals
    SET available_beds = GREATEST(available_beds - difference, 0)
    WHERE hospital_id = NEW.hospital_id;
END $$

DELIMITER ;
