import { jwtDecode } from "jwt-decode";

class AuthService {
  login(email, password) {
    return fetch("http://localhost:5267/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  }

  register(username, email, password) {
    return fetch("http://localhost:5267/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  getUserId() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("JWT token is missing.");
    }

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.nameid;
      return userId;
    } catch (error) {
      throw new Error("Failed to decode JWT token.");
    }
  }
}

const authService = new AuthService();
export default authService;
