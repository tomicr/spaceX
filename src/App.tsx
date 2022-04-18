import React from 'react';
import './scss/App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main/Main';
import Header from './main/component/Navbar/Navbar';
import MoreDetails from './main/component/MoreDetails/MoreDetails';
import SignUp from './main/component/Signup/SignUp';
import LogIn from './main/component/Login/LogIn';
import AuthProvider from './main/contexts/AuthContext';
import { useTheme } from './main/contexts/ThemeContext';

const App = function App() {
  const { isDarkMode } = useTheme();
  const queryClient = new QueryClient();
  return (
    <div
      data-testid="theme-context"
      className={isDarkMode ? 'darkTheme' : 'lightTheme'}
    >
      <AuthProvider>
        <Router>
          <div className="App">
            <QueryClientProvider client={queryClient}>
              <Header />
              <Switch>
                <Route exact path="/" component={SignUp} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/allLaunches" component={Main} />
                <Route exact path="/:id" component={MoreDetails} />
              </Switch>
            </QueryClientProvider>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
};
export default App;
