import logo from "./logo.svg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Main from "./component/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
