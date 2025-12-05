export const config = {
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/nhs-nursing-validator',
    apiKey: process.env.API_KEY || 'your-api-key-here',
    environment: process.env.NODE_ENV || 'development',
};