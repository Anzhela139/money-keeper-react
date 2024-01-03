// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useGetUsersQuery } from './store/services/userApi';
// import { decrement, increment, reset } from './store/features/counterSlice';
// import { useAppDispatch, useAppSelector } from "./store/hooks";
import './styles/base.css';
import Header from './components/header'
import Aside from './components/aside'

function App() {
  return (
    <div className="app">
      <div>
        <Header />
        <Aside />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </div>
  );
}

export default App;
