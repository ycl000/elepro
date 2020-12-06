export default {
    getCookie(){
        document.cookie.split(";")[0].split("=")[1];
    }
}