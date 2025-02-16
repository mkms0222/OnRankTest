import { authAPI } from "../../../api";

function Main() {
  return <button onClick={() => authAPI.logout()}>로그아웃</button>;
}

export default Main;
