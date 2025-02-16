import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 모든 요청에 credentials 포함
});

// API 요청 함수들
export const authAPI = {
  // 구글 소셜 로그인 - 백엔드에서 리다이렉트 처리
  googleLogin: () => api.get("/oauth"),

  // 회원 정보 입력
  addUserInfo: (userData) => api.post("/oauth/add", userData),

  // 로그아웃
  logout: async () => {
    await api.post("/logout");
    window.location.href = "/";
  },
};

// 요청 인터셉터 - 요청 전에 실행
api.interceptors.request.use(
  (config) => {
    // 토큰이 있다면 헤더에 추가
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 - 응답 받은 후 실행
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 에러 처리
    if (error.response.status === 401) {
      // 인증 에러 처리
      localStorage.removeItem("token");
      // 로그인 페이지로 리다이렉트 등의 처리
    }
    return Promise.reject(error);
  },
);

export default api;
