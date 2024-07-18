# learning-prisma

1. Initializing Prisma
`bunx prisma init`

Initializing Prisma with a specific database
`bunx prisma init --datasource-provider <DB_NAME>`
> Example: `bunx prisma init --datasource-provider sqlite`

2. Modifying the env variables
`DATABASE_URL="YOUR_DATABASE_URL"`
> Example: `DATABASE_URL="file:./dev.db"`

3. Migrate the database
`bunx prisma migrate dev --name <MIGRATION_NAME>`
> Example: `bunx prisma migrate dev --name init`

Migrate means to apply the changes to the database. It's like telling your database to create/alter the tables.

4. Generate Prisma Client
`bunx prisma generate`
> Although the client is generated with the Migrate command as well, you can generate a new client if you don't want to apply the changes to the database.

5. Visualize Data
`bunx prisma studio`