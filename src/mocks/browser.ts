import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { User } from "../api/user";

const Users: Record<string, User> = {
  "1": {
    id: "1",
    color: "tomato",
    name: "bulbasaur",
  },
  "2": {
    id: "2",
    color: "mediumseagreen",
    name: "charmander",
  },
  "3": {
    id: "3",
    color: "bisque",
    name: "squirtle",
  },
};

export const worker = setupWorker(
  http.post("/token", () => {
    return HttpResponse.json({ token: `token-${new Date().getTime()}` });
  }),
  http.get("/users/:id", ({ params, request }) => {
    const token = request.headers.get("Authorization");

    if (token) {
      const split = token.split("-");
      const date = new Date(parseInt(split[1]));
      if (Date.now() - date.getTime() > 15000) {
        return new HttpResponse(null, { status: 401 });
      }

      const id = params.id as string;
      const user = Users[id];
      if (user) {
        return HttpResponse.json(user);
      }
      return new HttpResponse(null, { status: 404 });
    }
    return new HttpResponse(null, { status: 401 });
  })
);
