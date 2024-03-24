// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useGetUsersQuery } from './store/services/userApi';
// import { decrement, increment, reset } from './store/features/counterSlice';
// import { useAppDispatch, useAppSelector } from "./store/hooks";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './styles/base.css';
import Header from './components/header';
import History from './components/history';
import Addnew from './components/addNew';
import Balance from './components/balance';
import Settings from './components/settings';
import Charts from './components/charts';
import Contractors from './components/contractors';
import Home from './components/home';
import Layout from './components/layout';
import NoMatch from './components/noMatch';

function App() {
  const login = useSelector((state) => state.auth.value);
  return (
    <div className="app">
      <BrowserRouter>
        <div>
        {login && 
          <Header />
        }
        </div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="history" element={<History />} />
              <Route path="addnew" element={<Addnew />} />
              <Route path="balance" element={<Balance />} />
              <Route path="settings" element={<Settings />} />
              <Route path="charts" element={<Charts />} />
              <Route path="contractors" element={<Contractors />} />
              {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
          <Outlet />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
