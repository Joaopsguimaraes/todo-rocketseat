/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
