import { environment } from "../../../environments/environment.development";

const API_URL = '';

export const APIEndPoint = {
    Auth:{
        Login:`${API_URL}/auth/login`,
        Register:`${API_URL}/auth/register`,
        OAuth:`${API_URL}/auth/oauth-user`,
        forgotPassword:`${API_URL}/auth/forgot-password`,
        resetPassword:`${API_URL}/auth/reset-password`,
        logout:`${API_URL}/auth/logout`,
    },
    global:{
        AskMe:`${API_URL}/ask-me-anything`
    }
}
