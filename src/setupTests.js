import { server } from "./mocks/server";

// 테스트 전에 서버 시작
beforeAll(() => server.listen());

// 각 테스트 후 핸들러 초기화
afterEach(() => server.resetHandlers());

// 테스트 후 서버 종료
afterAll(() => server.close());
