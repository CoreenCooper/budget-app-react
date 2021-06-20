export const apiURL = () => {
    if (process.env.NODE_ENV === "development") { 
        // console.log(process.env) 
        return 'http://localhost:3001'
    }; 
    return "";
}