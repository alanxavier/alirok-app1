import dotenv from 'dotenv'
dotenv.config()

export default {
  APP_NAME: process.env.APP_NAME ?? 'rok-timestamp',
  APP_PORT: process.env.APP_PORT ?? 8000 
}
