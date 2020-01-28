import MockAdapter from "axios-mock-adapter";

export default (mock: MockAdapter) => {
  mock.onGet("https://api.github.com/users/test").reply(200, {
    login: "testlogin",
    name: "testname",
    avatar_url: "#testavatar",
    bio: "testbio"
  });
};
