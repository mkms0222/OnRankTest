// import { http, HttpResponse } from "msw";

// export const handlers = [
//   http.get("/login/users", () => {
//     return HttpResponse.json([
//       { id: 1, name: "Alice" },
//       { id: 2, name: "Bob" },
//     ]);
//   }),

//   // 구글 로그인 후 사용자 확인
//   http.post("/auth/oauth/check", () => {
//     return HttpResponse.json({
//       isNewUser: false, // false로 변경하면 바로 메인 페이지로 이동
//       message: "User check successful",
//     });
//   }),

//   // 신규 사용자 회원가입
//   http.post("/auth/oauth/add", async ({ request }) => {
//     const userData = await request.json();
//     return HttpResponse.json({
//       success: true,
//       message: "회원가입이 완료되었습니다",
//       user: userData,
//     });
//   }),

//   // 기존 사용자 로그인
//   http.post("/auth/oauth", () => {
//     return HttpResponse.json({
//       success: true,
//       message: "로그인 성공",
//       token: "mock-token",
//       user: {
//         id: 1,
//         email: "user@example.com",
//         name: "User Name",
//       },
//     });
//   }),
// ];
