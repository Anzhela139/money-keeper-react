import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useGetUsersQuery } from './store/services/userApi';
import { decrement, increment, reset } from './store/features/counterSlice';
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Header from './components/header'
import Aside from './components/aside'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mockupBackend/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    enableMocking().then(() => {
      <>
        <div>
          <Header />
          <Aside />
        </div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <h4 style={{ marginBottom: 16 }}>{count}</h4>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button
              onClick={() => dispatch(decrement())}
              style={{ marginInline: 16 }}
            >
              decrement
            </button>
            <button onClick={() => dispatch(reset())}>reset</button>
          </div>
          {error ? (
            <p>Oh no, there was an error</p>
          ) : isLoading || isFetching ? (
            <p>Loading...</p>
          ) : data ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: 20,
              }}
            >
              {data.map((user) => (
                <div
                  key={user.id}
                  style={{ border: "1px solid #ccc", textAlign: "center" }}
                >
                  <img
                    src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                    alt={user.name}
                    style={{ height: 180, width: 180 }}
                  />
                  <h3>{user.name}</h3>
                </div>
              ))}
            </div>
          ) : null}
        </main>
      </>
    })
  )
}
