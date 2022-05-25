// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

const adminToken = {
  username: "admin",
  roles: ["v-admin"],
  accessToken: "eyJhbGciOiJIUzUxMiJ9.admin"
};

const testToken = {
  username: "test",
  roles: ["v-test"],
  accessToken: "eyJhbGciOiJIUzUxMiJ9.test"
};

export default [
  {
    url: "/getUserToken",
    method: "get",
    response: ({ query }) => {
      if (query.name === "admin") {
        return {
          code: 0,
          data: adminToken
        };
      } else {
        return {
          code: 0,
          data: testToken
        };
      }
    }
  }
] as MockMethod[];
