import conf from '../conf/conf'
import {Client, Account,ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique,email,password,name);
            if(userAccount){
                //call another method
                return this.login({email,password})
            }
            else{
                return userAccount; // need to be handled
            }
        }
        catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            const getUser= await this.account.get();
            if(getUser){
                return getUser;
            }else{
                return null;
            }
        }
        catch(error){
            throw error;
        } 
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            return error;
        }
    }
}

const authService = new AuthService();
export default authService;
