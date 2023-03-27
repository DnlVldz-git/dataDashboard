import httpClient from "./HttpClient";

export default class MainService {
  static async finByYear(year) {
    return httpClient.get(`/main/year/${year}`);
  }

  static async finByMonthYear(year, month) {
    return httpClient.get(`/main/year-month/${year}/${month}`);
  }

  static async finByDayMonthYear(year, month, day) {
    return httpClient.get(`/main/year-month-day/${year}/${month}/${day}`);
  }
}
