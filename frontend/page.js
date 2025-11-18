"use client";
import { useState } from "react";

export default function Home() {
  const [project, setProject] = useState("");
  const [infra, setInfra] = useState("alb");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      project,
      infra,
      owner: "johan",
      environment: "dev"
    };

    await fetch("/api/request-infra", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Solicitud enviada correctamente 😎");
  };

  return (
    <main className="p-10 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Crear Infraestructura</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Nombre del proyecto</label>
          <input
            required
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block">Tipo de infraestructura</label>
          <select
            className="border p-2 w-full"
            value={infra}
            onChange={(e) => setInfra(e.target.value)}
          >
            <option value="alb">ALB</option>
            <option value="ecs">ECS</option>
            <option value="ec2">EC2</option>
          </select>
        </div>

        <button className="bg-blue-600 text-white p-2 rounded">
          Crear Infra
        </button>
      </form>
    </main>
  );
}
