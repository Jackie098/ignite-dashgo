import { createServer, Factory, Model } from "miragejs";
import { Faker, pt_BR } from "@faker-js/faker";

const faker = new Faker({
  locale: [pt_BR],
});

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `${i + 1} ${faker.person.firstName()}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent({ days: 10 });
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      // Make this because the next use '/api' too for the next API
      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
