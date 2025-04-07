
'use client';
import { useState } from "react";

export default function Home() {
  const [investment, setInvestment] = useState(0);
  const projectTotal = 260000; // Precio propiedad + reforma + otros gastos
  const collected = 120000; // Simulación de inversión recogida

  const percentageCollected = (collected / projectTotal) * 100;

  return (
    <main style={{ padding: 20 }}>
      <h1>Bienvenido a UrbaNova Capital</h1>
      <h2>Invierte en propiedades reales</h2>

      <p>Proyecto en curso: Vivienda reformada en Valencia</p>
      <p>Objetivo de financiación: {projectTotal.toLocaleString()}€</p>
      <p>Inversión recibida: {collected.toLocaleString()}€</p>

      <progress value={percentageCollected} max="100" style={{ width: "100%", height: "24px" }} />
      <p>{percentageCollected.toFixed(2)}% completado</p>

      <div style={{ marginTop: 20 }}>
        <label>Tu inversión (€): </label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button onClick={() => alert("Inversión registrada!")}>Invertir</button>
      </div>
    </main>
  );
}
