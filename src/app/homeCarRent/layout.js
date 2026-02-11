"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
          {modal}
        </Provider>
      </body>
    </html>
  );
}
