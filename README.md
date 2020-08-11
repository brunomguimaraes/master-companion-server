# master-companion-server

<img align="center" src="https://pm1.narvii.com/7391/6582a3fbde307f314a040280a411b29bd6470a2cr4-750-375_00.jpg"/> 

## Requirements
- NodeJS v12.16.3
- Docker v2.3.0.4
- Postgres v2.3.5 

## Step by step:
### Installation 
`yarn install` or just `yarn`

### Set up dotenv(.env)
- Create `.env` file
- Set env variables

##### my defaults(create your own!):
```
POSTGRES_USER=master
POSTGRES_PASSWORD=M@ST3RRComp41n10n
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=master_companion_db
POSTGRES_PORT=54330
```
### Create docker container
`docker-compose up -d`

### Create DB(migrations)

`yarn migrate:up`

### Generate types
Run `yarn dev`, open another terminal window and run `yarn generate:types`

### Run

`yarn dev`

### Build

`yarn build`
