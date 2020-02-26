import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";

import AppNavigator from "./src/navigation";
import store from "./src/redux/store";

const App = () => (
  <StoreProvider store={store}>
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  </StoreProvider>
);

export default App;
