import pgPromise from 'pg-promise';

const pgp = pgPromise();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'example_blog',
    user: 'postgres',
    password: 'nhfz123!'
})

async function dbConnect() {
    try {
        await db.connect();
        console.log("Connection to database is established");
    } catch (error) {
        console.error('Failed to connect to database', error.message)
    }
}

export { db, dbConnect }