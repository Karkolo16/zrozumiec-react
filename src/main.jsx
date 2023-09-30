import ReactDOM from "react-dom/client";
import { LinkComponent } from "./components/Link";
import { HeadingItalic } from "./components/HeadingItalic";
import { Logger } from "./components/Logger";
const element = (
  <>
    <Logger>
      <HeadingItalic>Nasza Strona</HeadingItalic>
    </Logger>
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
