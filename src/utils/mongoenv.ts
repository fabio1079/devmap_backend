const mongoDevUri = () => {
  const DB_LINK = process.env.DB_LINK;
  const DB_NAME = process.env.DB_NAME;

  return `mongodb+srv://${DB_LINK}/${DB_NAME}?retryWrites=true&w=majority`;
};

export const getMongoUriByEnv = () => {
  const ENV = (process.env.NODE_ENV || "").trim();
  let uri = "";

  switch (ENV) {
    case "production":
      break;
    case "test":
      break;
    case "dev":
      uri = mongoDevUri();
      break;
    default:
      throw new Error(`Invalid environment: ${ENV}`);
  }

  return uri;
};
