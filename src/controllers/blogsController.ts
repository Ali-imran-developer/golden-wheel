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
  static updateBlog(id: string, data: any) {
    return apiRequest("put", `/api/blogs/update/${id}`, data);
  }
  static deleteBlog(id: string) {
    return apiRequest("delete", `/api/blogs/delete/${id}`);
  }
}

export default BlogsController;