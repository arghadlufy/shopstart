import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/(store)/_layout/")({ component: App });

function App() {
return (
  <div>
    <h1>Store Layout Index</h1>
  </div>
);
}