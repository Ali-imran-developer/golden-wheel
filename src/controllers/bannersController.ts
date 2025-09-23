import { apiRequest } from "./apiController";

class BannersController {
  static getBanners() {
    return apiRequest("get", "/api/banners/get");
  }
  static deleteBanner(id: string) {
    return apiRequest("delete", `/api/banners/delete/${id}`);
  }
}

export default BannersController;