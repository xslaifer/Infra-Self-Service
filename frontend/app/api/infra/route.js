export async function POST(req) {
  const body = await req.json();

  console.log("Petición recibida:", body);

  // Aquí llamarías a tu backend / Lambda / Jenkins / GitHub Actions
  // Ejemplo:
  // await fetch("https://backend.example.com/deploy", { method: "POST", body });

  return Response.json({ status: "ok" });
}
