import { config } from "dotenv";

config({ path:`.env.${process.env.NODE_ENV || 'development'}.local`})

export  const { PORT , DB_HOST , DB_PORT , DB_DATABASE , NODE_ENV } = process.env


// export 