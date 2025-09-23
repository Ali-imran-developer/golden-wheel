import { apiRequest } from "./apiController";

class SportsController {
  static createSports(data: any) {
    return apiRequest("post", "/api/sports/create", data);
  }
  static getAllSports() {
    return apiRequest("get", "/api/sports/get");
  }
  static updateSports(id: string, data: any) {
    return apiRequest("put", `/api/sports/update/${id}`, data);
  }
  static deleteSports(id: string) {
    return apiRequest("delete", `/api/sports/delete/${id}`);
  }
}

export default SportsController;