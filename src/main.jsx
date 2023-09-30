import ReactDOM from "react-dom/client";
import { LinkComponent } from "./components/Link";

const element = (
  <>
    <h1>Strona</h1>
    <main>
      <LinkComponent text="Sprawdź stronę kursu!" shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        deleniti numquam perferendis voluptatum voluptate impedit officiis.
        Quibusdam laborum cum reprehenderit.
      </p>
      <LinkComponent shouldOpenNewTab={false} />
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
