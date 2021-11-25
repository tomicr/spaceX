import React from 'react';
import './scss/App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './main/Main';
import Header from './main/component/Header';

const App = function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Main />
      </QueryClientProvider>
    </div>
  );
};
export default App;
