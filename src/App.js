import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { addminRouter, userRouter } from "./common/router";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Suspense>
        <Switch>
          {userRouter.map((page, index) => (
            <Route
              key={index}
              exact={page.isExact}
              path={page.path}
              component={page.component}
            />
          ))}
          {addminRouter.map((page, index) => (
            <Route
              key={index}
              exact={page.isExact}
              path={page.path}
              component={page.component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
