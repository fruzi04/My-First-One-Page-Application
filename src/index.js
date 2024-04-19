import { createRoot } from "react-dom/client";
import App from "./components/app/app.js";
import AppInfo from "./components/app-info/app-info.js";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);