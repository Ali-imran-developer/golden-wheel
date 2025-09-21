import { apiRequest } from "./apiController";

class BannersController {
  static getBanners() {
    return apiRequest("get", "/api/banners/get");
  }
}

export default BannersController;