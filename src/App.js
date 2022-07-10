import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { addminRouter, userRouter } from "./common/router";
import LayoutUser from "./layout/user/LayoutUser";

function App() {
  return (
    <div className="App">
      <Suspense>
        <Switch>
          {userRouter.map((page, index) => (
            <Route
              key={index}
              exact={page.isExact}
              path={page.path}
              render={() => (
                <LayoutUser>
                  <page.component />
                </LayoutUser>
              )}
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
