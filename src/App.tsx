import { QueryClientProvider } from "@tanstack/react-query";
import { Users } from "./components/Users";
import { queryClient } from "./api/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
