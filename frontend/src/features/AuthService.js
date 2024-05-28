import { jwtDecode } from "jwt-decode";

class AuthService {
  async login(email, password) {
    try {
      const response = await fetch("http://localhost:5267/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();

      if (!data.token) {
        throw new Error("No token found in response");
      }

      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      throw new Error(error.message || "An error occurred during login.");
    }
  }

  async register(username, email, password) {
    try {
      const response = await fetch("http://localhost:5267/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        return await this.login(email, password);
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      throw new Error(
        error.message || "An error occurred during registration."
      );
    }
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
