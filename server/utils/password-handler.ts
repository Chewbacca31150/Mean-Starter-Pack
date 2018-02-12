import { pbkdf2Sync, randomBytes } from "crypto";
import { Injectable } from "@decorators/di/src/decorators/injectable";

@Injectable()
export class PasswordHandler {


    /**
     * @description Checks if the password entered in the login corresponds to the password of the user
     * @param passwordToCheck 
     * @param passwordUser 
     * @param salt 
     * @returns boolean
     */
    checkPassword(passwordToCheck, passwordUser, salt): boolean {
        let hash = pbkdf2Sync(passwordToCheck, salt, 100000, 64, 'sha512').toString('hex');
        return hash === passwordUser;
    }

    /**
     * @description Checks if the password equals the one entered in the confirm input
     * @param password 
     * @param passwordConfirm 
     */
    checkPasswordForgottenPassword(password: string, passwordConfirm: string) {
        return password === passwordConfirm;
    }

    /**
     * @description Generates salt
     * @returns string
     */
    generateSalt(): string {
        return randomBytes(16).toString('hex');
    }

    /**
     * @description Generates a password
     * @param salt 
     * @returns string
     */
    generatePassword(salt, password): string {
        return pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');

    }
}