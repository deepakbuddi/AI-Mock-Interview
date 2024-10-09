/** @type {import ("drizzle-kit").config} */

export default{
    schema:"./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://AI-Interview_owner:IJmz4KbohP3H@ep-tight-salad-a5huhucl.us-east-2.aws.neon.tech/AI-Interview?sslmode=require',
    }
};