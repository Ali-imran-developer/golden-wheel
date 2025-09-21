import { apiRequest } from "./apiController";

class BlogsController {
  static createBlog(data: any) {
    return apiRequest("post", "/api/blogs/create", data);
  }
  static getBlog() {
    return apiRequest("get", "/api/blogs/get");
  }
  static getBlogDetail(id: string) {
    return apiRequest("get", `/api/blogs/get?id=${id}`);
  }
}

export default BlogsController;