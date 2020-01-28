import axios, { AxiosStatic } from "axios";
import MockAdapter from "axios-mock-adapter";

import mockaxiosRoutes from "./mockaxiosRoutes";

if (process.env.NODE_ENV === "test") {
  const mock = new MockAdapter(axios);
  mockaxiosRoutes(mock);
}

export default axios;
