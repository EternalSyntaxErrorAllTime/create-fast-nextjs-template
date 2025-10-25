"use node";
import "reflect-metadata";
import "server-only";

import { DataSource } from "typeorm";

import AlleEntities from "./entities";
import AllMigration from "./migration";

export const pgConfig = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
} as const;

const isProduction = process.env.NODE_ENV === "production";

export const dataSource = new DataSource({
  ...pgConfig,
  synchronize: !isProduction,
  logging: !isProduction,
  migrationsRun: !isProduction,
  installExtensions: true,
  subscribers: [],
  entities: AlleEntities,
  migrations: AllMigration,
});

declare global {
  var _typeormDataSource: DataSource | undefined;
}

export async function getDataSource(): Promise<DataSource> {
  if (!isProduction && global._typeormDataSource?.isInitialized) {
    await global._typeormDataSource.destroy();
    global._typeormDataSource = undefined;
  }

  if (global._typeormDataSource && global._typeormDataSource.isInitialized) {
    return global._typeormDataSource as DataSource;
  }

  global._typeormDataSource = dataSource;
  if (!global._typeormDataSource.isInitialized) {
    await global._typeormDataSource.initialize();
  }

  return global._typeormDataSource as DataSource;
}
