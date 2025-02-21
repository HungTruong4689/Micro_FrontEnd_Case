import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

const withReduxStore = <P extends object>(Component: React.ComponentType<P>) => {
  return function WrappedComponent(props: P) {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
};

export default withReduxStore;
