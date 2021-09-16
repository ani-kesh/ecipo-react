import { Switch, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import { Routes } from "../../constants/router";
import { main } from "./Main.module.css";

export default function Main() {
  return (
    <main>
      <div className={main}>
        <Switch>
          {Object.values(Routes).map((fn) => {
            const { path, component } = fn();
            return (
              <Route exact path={path} component={component} key={nanoid()} />
            );
          })}
        </Switch>
      </div>
    </main>
  );
}
