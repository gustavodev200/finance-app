import { AuthData } from "../contexts/Auth";

const signIn = (email: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "123456") {
        resolve({
          token: "JWTTokenMock",
          email: email,
          name: "Gustavo",
        });
      } else {
        reject(new Error("credenciais incorretas"));
      }
    }, 1000);
  });
};

export const authService = {
  signIn,
};
