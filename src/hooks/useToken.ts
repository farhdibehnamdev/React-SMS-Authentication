import { useState } from "react";

const useToken = function (): [string | null, Function] {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  const setToken = function (newToken: string) {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};

export default useToken;
