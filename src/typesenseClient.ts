import * as Typesense from "typesense";




const client: Typesense.Client = new Typesense.Client({
  nodes: [
    {
      host: "localhost", 
      port: 8108, 
      protocol: "http", 
    },
  ],
  apiKey: "sua chave de api",
  connectionTimeoutSeconds: 5,
});

export default client;