
import {NavigationContainer} from "@react-navigation/native"
import { Provider } from "react-redux";
import RootNavigation from "./src/navigaiton/rootNavigation";
import { reduxStore } from "./src/redux/store";

const App: React.FC = () => {
  return (
  <Provider store={reduxStore}>
 <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  </Provider>
  );
};
export default App;
