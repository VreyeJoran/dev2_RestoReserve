import postgres, { Sql } from 'postgres';
import dotenv from 'dotenv';

const SB_POSTGRES_URL:string = process.env.POSTGRES_URL || 'postgres://postgres.qkuhbvmxjjwxqurnmhfi:QqDxpcGZUWAtThy9@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x';
const sql: Sql = postgres(SB_POSTGRES_URL);

export default sql;