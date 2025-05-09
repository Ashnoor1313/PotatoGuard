import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Analyzer from "@/pages/Analyzer";
import Guide from "@/pages/Guide";
import Diseases from "@/pages/Diseases";
import Prevention from "@/pages/Prevention";
import Learning from "@/pages/Learning";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/analyzer" component={Analyzer}/>
      <Route path="/guide" component={Guide}/>
      <Route path="/diseases" component={Diseases}/>
      <Route path="/prevention" component={Prevention}/>
      <Route path="/learning" component={Learning}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Toaster />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
