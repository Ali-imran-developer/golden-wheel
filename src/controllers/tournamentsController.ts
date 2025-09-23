import { apiRequest } from "./apiController";

class TournamentsController {
  static createTournament(data: any) {
    return apiRequest("post", "/api/tournaments/create", data);
  }
  static getAllTournament() {
    return apiRequest("get", "/api/tournaments/get");
  }
  static updateTournament(id: string, data: any) {
    return apiRequest("put", `/api/tournaments/update/${id}`, data);
  }
  static deleteTournament(id: string) {
    return apiRequest("delete", `/api/tournaments/delete/${id}`);
  }
}

export default TournamentsController;