import fetch from "isomorphic-unfetch";
import aws4 from "aws4";
import appConfig from '../config/app';

const request = (path, options = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {environments, env} = appConfig;
      const host = environments[env].apiHost;

      const method = options.method || "GET";
      let { body } = options;

      const credentials = {
        accessKeyId: "",
        secretAccessKey: ""
      };

      let headers = {};

      let opts = {
        service: "execute-api",
        method: method,
        region: "us-east-1",
        host: host,
        path: path
      };

      if (method == "POST") {
        body = JSON.stringify(body);
        headers = {
          "Content-Type": "application/json",
          "Content-Length": body.length
        };
        opts.headers = headers;
        opts.body = body;
      }

      aws4.sign(opts, credentials);

      const res = await fetch(`https://${host}/${path}`, {
        method: opts.method,
        headers: opts.headers,
        body: opts.body
      });

      const data = await res.json();

      if (res.status != 200) {
        return reject({
          message: data.message
        });
      }

      return resolve(data);
    } catch (e) {
      reject({
        message: "Something went wrong !",
        details: e
      });
    }
  });
};

export default request;
