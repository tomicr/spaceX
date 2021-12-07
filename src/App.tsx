import React from 'react';
import './scss/App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Header from './main/component/Header';
import MoreDetails from './main/component/MoreDetails';

const App = function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<MoreDetails />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </Router>
  );
};
export default App;
