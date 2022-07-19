import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { adminRouter, userRouter } from "./common/router";
import LayoutUser from "./layout/user/LayoutUser";
<<<<<<< HEAD
import AdminLayout from "./layout/AdminLayout";
=======
import { PrivateRouter } from "./components/Router/PrivateRouter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
>>>>>>> 2ebbd5e (use-detail)

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading page...</div>}>
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
                  <AdminLayout>
                    <Component />
                  </AdminLayout>
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
