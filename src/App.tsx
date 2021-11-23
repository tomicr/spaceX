import React from 'react';
import './scss/App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './main/Main';

const App = function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div>
          <Main />
        </div>
      </QueryClientProvider>
    </div>
  );
};
export default App;
