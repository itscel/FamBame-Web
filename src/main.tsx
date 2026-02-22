// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDOM from "react-dom/client";
import App from "./App";

const button = document.getElementById("loadReact");

button?.addEventListener("click", () => {
  const root = ReactDOM.createRoot(
    document.getElementById("react-root")!
  );

  root.render(<App />);
});