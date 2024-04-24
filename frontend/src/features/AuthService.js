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

  logout() {
    localStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }
}

const authService = new AuthService();
export default authService;
