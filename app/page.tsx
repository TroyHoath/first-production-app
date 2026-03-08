"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  async function loadCount() {
    const res = await fetch("/api/counter");
    const data = await res.json();
    setCount(data.count);
  }

  async function increment() {
    const res = await fetch("/api/counter", { method: "POST" });
    const data = await res.json();
    setCount(data.count);
  }

  useEffect(() => {
    loadCount();
  }, []);

  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>The Button</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={increment}
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </main>
  );
}