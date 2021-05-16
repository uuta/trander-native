import axios from "axios";
import { ServiceStorage } from "@/services/common/storage";

// Common process for a request
axios.interceptors.request.use(async (config) => {
  const apiToken = await ServiceStorage.getItem(ServiceStorage.KEY_API_TOKEN);
  config['apiToken'] = apiToken.value;
  config.params = {...config.params, apiToken: apiToken.value}
  return config;
});

// Common process for a response
axios.interceptors.response.use(
  (response) => response,
  (error) => error.response || error
);
