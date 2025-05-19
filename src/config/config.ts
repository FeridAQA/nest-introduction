import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
})

export default{

    port:process.env.PORT || 3000,

    database: {
        host: process.env.DATABASE_HOST ,
        port: process.env.DATABASE_PORT ,
        username: process.env.DATABASE_USERNAME ,
        password: process.env.DATABASE_PASSWORD ,
        database: process.env.DATABASE_NAME ,
    },
    
    jwtSecret: process.env.JWT_SECRET
}
