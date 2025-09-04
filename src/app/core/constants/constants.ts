// import { environment } from "../../../environments/environment.development";

const API_URL = 'http://localhost:8080/api/v1';
//const API_URL = environment.API_URL;

export const APIEndPoint = {
    Auth:{
        Login:`${API_URL}/auth/login`,
        Register:`${API_URL}/auth/register`,
        OAuth:`${API_URL}/auth/oauth-user`,
        forgotPassword:`${API_URL}/auth/forgot-password`,
        resetPassword:`${API_URL}/auth/reset-password`,
        changePassword:`${API_URL}/auth/change-password`,
        logout:`${API_URL}/auth/logout`,
    },
    global:{
        AskMe:`${API_URL}/global/ask-me-anything`,
        BecomeMember:`${API_URL}/global/become-a-member`
    }
}
