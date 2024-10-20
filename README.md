# Baby App

## Bring your own mariadb database

1. Start a mysql shell with `sudo mysql`
2. Run `CREATE USER 'baby'@'localhost' IDENTIFIED BY '<password>';`
3. Run `source initialize_database.sql`

## Run locally

1. npm install
2. Set database connection string as env

`export mysqlConnectionString=mysql://baby:<password>@localhost/baby

3. npm run dev

## Run in container

1. Build image `docker build --build-arg="PORT=3001" -t baby-app-api .`
2. Run container

```
docker run -d --restart unless-stopped --net="host" --env mysqlConnectionString=mysql://baby:<password>@localhost/baby --env PORT=3001 baby-app-api
```
