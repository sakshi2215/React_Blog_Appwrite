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
            console.log("Appwrite auth:: createAccount::error", error);
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            console.log("Appwrite auth:: Login::error", error);
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
            console.log("Appwrite auth:: getCurrentUser::error", error);
        } 
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite auth:: logout ::error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
