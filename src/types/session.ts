import {SessionData} from "express-session";

declare module "express-session" {
    interface SessionData {
        user : {
            name: String,
            username: String
            email: String,
            password: String,
            email_confirmation_token: String
            email_confirmed: Boolean,
            password_reset_token: String
            role: String,
        };
    }
}