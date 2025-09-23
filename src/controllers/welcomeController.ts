import { apiRequest } from "./apiController";

class WelcomeController {
  static createWelcome(data: any) {
    return apiRequest("post", "/api/welcome/create", data);
  }
  static getWelcome() {
    return apiRequest("get", "/api/welcome/get");
  }
  static updateWelcome(data: any) {
    return apiRequest("put", "/api/welcome/update", data);
  }
  static deleteWelcome() {
    return apiRequest("delete", "/api/welcome/delete");
  }
}

export default WelcomeController;