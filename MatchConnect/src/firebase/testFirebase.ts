import { db } from "./firebase";

async function test() {
  await db.collection("users").doc("teste").set({
    nome: "João",
    email: "joao@email.com",
    criadoEm: new Date()
  });

  console.log("Firebase funcionando 🚀");
}

test();