// pages/ErrorPage/ErrorPage.jsx
import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Ha ocurrido un error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
