const apiBaseUrl = 'http://localhost:8080/api/';

export class APIEndpoints {
  static readonly AUTH_TOKEN = apiBaseUrl + 'auth/signin';
  static readonly AUTH_REGISTER = apiBaseUrl + 'auth/signup';
  static readonly USER_API = apiBaseUrl + 'test/';
  static readonly VERTICALS_API = apiBaseUrl + 'v1/verticals';
}
