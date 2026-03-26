import { Pool } from 'pg'

declare global {
  var pool: Pool | undefined
}

const pool = globalThis.pool ?? new Pool({
  connectionString: process.env.DATABASE_URL,
})

if (process.env.NODE_ENV !== 'production') {
  globalThis.pool = pool
}

export default pool




