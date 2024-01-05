import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
      <>
        <nav>
          <ul className="app-drawer__inner fixed left-0 top-0 flex flex-col justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-1 pt-1 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <li className="app-drawer__rout">
              <Link to="/">Small business money keeper</Link>
            </li>
            <li className="app-drawer__rout" >
              <Link to="/charts">Charts</Link>
            </li>
            <li className="app-drawer__rout">
              <Link to="/history">History</Link>
            </li>
            <li className="app-drawer__rout" >
              <Link to="/contractors">Contractors</Link>
            </li>
            <li className="app-drawer__rout" >
              <Link to="/balance">Balance</Link>
            </li>
            <li className="app-drawer__rout" >
              <Link to="/add-new">Add new</Link>
            </li>
            <li className="app-drawer__rout" >
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    );
}

export default Layout;
