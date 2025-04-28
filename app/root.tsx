import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
//import "./app.css";
import stylesheet from "app/app.css?url"; //Vite에서 제공하는 기능
import Navigation from "./common/components/navigation";

console.log("테스트 : ",stylesheet);
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: stylesheet,
  },
];

// 레이아웃 컴포넌트
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links /> 
      </head>
      <body>
        {/*<Navigation/>  에러페이지(바운더리) 에서도 네비게이션 컴포넌트 사용하고싶으면 여기에.. */}
        {children}
        <ScrollRestoration /> {/* 스크롤 위치 복원 컴포넌트 / 페이지 이동 했다가 이전 페이지로 돌아갈때 스크롤 위치를 복원해줌 */}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Navigation/> {/* 네비게이션 컴포넌트 */}
      <Outlet/> {/* 현재 라우트에 따라 렌더링되는 컴포넌트 */}
    </>
  )
  
}

// 에러 처리 컴포넌트
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
