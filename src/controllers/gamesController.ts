import { apiRequest } from "./apiController";

class GamesController {
  static createGames(data: any) {
    return apiRequest("post", "/api/games/create", data);
  }
  static getAllGames() {
    return apiRequest("get", "/api/games/get");
  }
  static updateGames(id: string, data: any) {
    return apiRequest("put", `/api/games/update?id=${id}`, data);
  }
  static deleteGames(id: string) {
    return apiRequest("delete", `/api/games/delete?id=${id}`);
  }
}

export default GamesController;