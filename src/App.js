import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { adminRouter, userRouter } from "./common/router";
import LayoutUser from "./layout/user/LayoutUser";
import { PrivateRouter } from "./components/Router/PrivateRouter";

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
          {adminRouter.map((c, index) => {
            const Component = c.component;
            return (
              <Route
                key={index}
                exact={c.isExact}
                path={c.path}
                render={() => (
                  <PrivateRouter>
                    <Component />
                  </PrivateRouter>
                )}
              ></Route>
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
