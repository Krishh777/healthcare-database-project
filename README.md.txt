
🏥 Healthcare Management System – SQL Project

A fully functional MySQL database system designed to manage hospitals, doctors, pharmacies, medicine stock, and bed usage — built using SQL triggers, stored procedures, views, and relational design.

---

📌 Features

- ✅ Real-time doctor availability based on current system time
- ✅ Tracks ICU & general bed usage using `AFTER INSERT` and `AFTER UPDATE` triggers
- ✅ Checks medicine availability using parameterized stored procedures
- ✅ Dynamic  views to simplify pharmacy and doctor access
- ✅ Clean and scalable ER diagram

---
 🗂️ Project Structure

```

healthcare-database-project/
├── schema.sql                # Table creation and insert statements
├── procedures.sql            # Stored procedures (e.g., checkmedicine, available\_doctors)
├── triggers.sql              # Bed usage update/insert triggers
├── views.sql                 # Views for nearest pharmacy and available doctors
├── test\_queries.sql          # Sample calls and test data
└── screenshots/
└── er\_diagram.png        # Auto-generated from MySQL Workbench

````

---

 🧠 Technologies Used

- Database: MySQL 8+
- Design Tool: MySQL Workbench (ERD)
- Concepts:
  - Foreign Keys
  - Joins
  - Stored Procedures
  - Triggers
  - Views
  - Aggregate Logic (like `GREATEST()`)

---

 💡 Key Procedures

🔍 Check Medicine Availability
```sql
CALL checkmedicine('Paracetamol 500mg');
````

Returns pharmacy IDs and stock for the given medicine name.

---

🩺 Find Available Doctors (Real-Time)

```sql
CALL available_doctors();
```

Returns doctors who are currently available based on system time.

---

🔁 Trigger Logic

after\_bed\_insert / after\_bed\_update** triggers auto-update the `available_beds` in `Hospitals` table when new usage is logged in `Bed_Usage_Log`.

---

🧭 ER Diagram

![ER Diagram](screenshots/er_diagram.png)

* `Doctors` → `Hospitals`: One-to-Many
* `Pharmacy_Stock` → `Pharmacies` & `Medicines`: Many-to-Many
* `Bed_Usage_Log` logs daily usage per hospital
* Views and triggers are fully integrated for automation

---

 🧪 Sample Queries

```sql
-- View all medicine stock below 50 units
SELECT pharmacy_id, medicine_id, stock_quantity
FROM Pharmacy_Stock
WHERE stock_quantity < 50;

-- View all hospitals with less than 20 beds available
SELECT * FROM Hospitals WHERE available_beds < 20;
```

---

 🚀 Future Improvements

* Web frontend integration using Python (Flask) or PHP
* Role-based login (Admin, Doctor, Patient)
* Notifications for low medicine stock
* Stored functions for occupancy analytics

---

👨‍💻 Author

Krish Bagga
📚 B.Tech CSE Student | Cloud, DevOps & Backend Enthusiast
🔗 [LinkedIn](https://www.linkedin.com/in/krish-bagga)
📦 [GitHub](https://github.com/Krishh777) 

---
