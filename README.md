#  Inventory Management Sytem Backend

A simple inventory management backend built with **Node.js**, **Express**, and **MySQL** — deployed on **Railway** with Swagger documentation.

---

## 🚀 Features

- User registration and authentication (**JWT**)
- Product management: **Add**, **List**, **Update Quantity**
- Pagination support for `GET /products`
- Public API docs via **Swagger UI**
- MySQL integration with Sequelize ORM

---

## 🌐 Live API Docs

Access the live OpenAPI (Swagger) documentation here:  
**[https://inventory-management-production-9d5c.up.railway.app/api-docs/](https://inventory-management-production-9d5c.up.railway.app/api-docs/)**

Access the  deployed Backend here:  
**[https://inventory-management-production-9d5c.up.railway.app/](https://inventory-management-production-9d5c.up.railway.app/)**

Access the Postman collection here:
**[https://schema.postman.com/json/collection/v2.1.0/collection.json](https://schema.postman.com/json/collection/v2.1.0/collection.json)**


---

## 🛠 Prerequisites

Before starting, ensure you have:

- **Node.js** (v16+)
- **MySQL** (local or Railway MySQL database)

---

## 📥 Local Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/EshaDhoot/Inventory-Management.git
```

---

### 2️⃣ Create `.env` File

Create a `.env` file in the root folder with your DB and JWT config:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=inventory
JWT_SECRET=your_jwt_secret
```


---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Create Database & Run Migrations

If using Sequelize, run the following commands in the `src` folder:

```bash
npx sequelize-cli db:create
```

```bash
npx sequelize-cli db:migrate
```

Or manually create tables in MySQL using schema.

---

### 5️⃣ Start the Server

```bash
npm start
```

The API will be available at:

```
http://localhost:4000
```

---

### 6️⃣ Access Swagger API Docs

Visit:

```
http://localhost:4000/api-docs
```

---

## 📂 Folder Structure

```
├── src/
│   ├── controllers/         # Route handlers
│   ├── middlewares/         # Auth, validation
│   ├── services/            # Business logic
│   ├── routes/              # Express routes
│   └── index.js              # App setup & swagger config
├── openapi.yaml              # OpenAPI spec
├── .env                      # Local config (ignored by Git)
├── package.json
└── README.md
```

---

## 🧰 Tech Stack

- **Runtime:** Node.js, Express
- **Database:** MySQL (Sequelize ORM)
- **Auth:** JWT
- **Docs:** Swagger UI (`openapi.yaml` → `/api-docs`)
- **Hosting:** Railway

---


## 💡 Notes
- If you face DB connection issues on Railway, ensure the **public hostname** and **port** are correctly set.

---
