declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PROTOCOL : string;
            APP_HOST : string;
            APP_PORT : number;
            APP_EMAIL: string;

            API_VERSION : string;

            MAIL_HOSTNAME : string;
            MAIL_USER : string;
            MAIL_PASS : string;
            MAIL_PORT : number;
            MAIL_REQUIRE_TLS : boolean;
            MAIL_SECURE : boolean;
            MAIL_TLS_CIPHERS : string;

            SQLITE_TYPE : "sqlite";
            SQLITE_PATH : string;
            
            MONGODB_TYPE : string;
            MONGODB_HOST : string;
            MONGODB_PORT : number;
            MONGODB_DATABASE : string;

            MYSQL_TYPE : string;
            MYSQL_HOST : string;
            MYSQL_PORT : number;
            MYSQL_USER : string;
            MYSQL_PASS : string;
            MYSQL_DATABASE : string;

            POSTGRES_TYPE : string;
            POSTGRES_HOST : string;
            POSTGRES_PORT : number;
            POSTGRES_USER : string;
            POSTGRES_PASS : string;
            POSTGRES_DATABASE : string;

            ORACLE_TYPE : string;
            ORACLE_HOST : string;
            ORACLE_PORT : number;
            ORACLE_USER : string;
            ORACLE_PASS : string;
            ORACLE_SID : string;
            ORACLE_SYNC : boolean;
            
            REDIS_HOST : string;
            REDIS_PORT : number;
            REDIS_SECRET : string;

            SESSION_COOKIE : string;
            SESSION_DURATION : number;

            DEFAULT_JWT_SECRET : string;
            DEFAULT_SALT_WORK_FACTOR : number;
        }
    }
}
  
export {};  