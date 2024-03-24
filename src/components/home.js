import { useSelector, useDispatch } from 'react-redux';
import { useGetUsersQuery } from './../store/usersApi';
import { login, logout } from './../store/authSlice';

function Home() {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  const login = useSelector((state) => state.auth.value);
  const dispatch = useDispatch()
  
  function handleClick(e) {
    e.preventDefault();
    console.log('Была нажата ссылка.', this);
    dispatch(login());
  }

  return (
    <div>
      <div className="app-page__banner-title dark">
        <h2 className="h2__title">{ login ? "Home" : "Start page" }</h2>
        <h4>Login as</h4>
      </div>
      <div className="container home__container">   
        {error ? (
            <div>Oh no, there was an error</div>
          ) : isLoading || isFetching ? (
            <div>Loading...</div>
          ) : data ? (
            data.map((user, index) => (
              <div className="user-card" key={`"user.id"` + index} onClick={handleClick.bind(user)}>
                <div>{user?.name}</div>
                <div className="user-card__img-wrapper">
                  <img src={`../public/avatars/${user.avatar}`} alt=""/>
                </div>
              </div>
            ))
          ) : null}
      </div>
    </div>
  );
}

export default Home;
