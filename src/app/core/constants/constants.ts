
const API_URL = 'http://localhost:8080/api';

export const APIEndPoint = {
    Auth:{
        Login:`${API_URL}/auth/login`,
        Register:`${API_URL}/auth/register`,
        OAuth:`${API_URL}/auth/oauth-user`,
        forgotPassword:`${API_URL}/auth/forgot-password`,
        resetPassword:`${API_URL}/auth/reset-password`,
        logout:`${API_URL}/auth/logout`,
    }
}
