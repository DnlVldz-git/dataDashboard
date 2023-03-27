import httpClient from "./HttpClient";

export default class TableService {
  static async createTable(data) {
    return httpClient.post(`/table`, data);
  }

  static async getAll() {
    return httpClient.get(`/table`);
  }
}
