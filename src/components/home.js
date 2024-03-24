import { useSelector } from 'react-redux';
import { post, removePost, edit } from './../store/usersSlice';
import { formatDate, formatPrice } from './../utils/formatters';
import { useGetUsersQuery } from './../store/usersApi';

function Home() {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  return (
    <div>
      <div className="app-page__banner-title dark">
        <h2 className="h2__title">Home</h2>
        <h4>Login as</h4>
      </div>
      <div className="container home__container">   
        {error ? (
            <div>Oh no, there was an error</div>
          ) : isLoading || isFetching ? (
            <div>Loading...</div>
          ) : data ? (
            data.map((user, index) => (
              <div className="user-card" key={`"user.id"` + index}>
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
