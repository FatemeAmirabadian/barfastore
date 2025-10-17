// lib/db.ts
import { Pool } from "pg";

const pool = new Pool({
  user: "admin",               // همون کاربری که تو docker-compose زدی
  host: "localhost",           // چون کانتینر روی لوکال پورت 5432 map شده
  database: "barfastore",      // اسم دیتابیسی که ساختی
  password: "admin123",        // رمز عبور
  port: 5432,
});

export default pool;
