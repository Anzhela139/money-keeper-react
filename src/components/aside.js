

export default function Aside() {
    return (
      <div className="app-drawer__inner fixed left-0 top-0 flex flex-col justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-1 pt-1 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <a href="/" className="app-drawer__head app-drawer__rout">
          <div className="app-drawer__icon">
  
          </div>
          <div className="app-drawer__name">
              Small business money keeper
          </div>
        </a>
        <a className="app-drawer__rout" href="/chart">
          <div className="app-drawer__rout-icon">
              <span className="iconify" data-inline="false" data-icon="mdi-light:chart-bar"></span>
          </div>
          <div className="app-drawer__rout-name">
              Charts
          </div>
          </a>
          <a className="app-drawer__rout" href="/history">
          <div className="app-drawer__rout-icon">
              <span className="iconify" data-inline="false" data-icon="mdi-light:alarm"></span>
          </div>
          <div className="app-drawer__rout-name">
              History
          </div>
          </a>
          <a className="app-drawer__rout" href="/contractor">
          <div className="app-drawer__rout-icon">
              <span className="iconify" data-inline="false" data-icon="fluent:contact-card-20-regular"></span>          </div>
          <div className="app-drawer__rout-name">
              Contractors
          </div>
          </a>
          <a className="app-drawer__rout" href="/balance">
          <div className="app-drawer__rout-icon">
              <span className="iconify" data-inline="false" data-icon="mdi-light:wallet"></span>
          </div>
          <div className="app-drawer__rout-name">
              Balance
          </div>
          </a>
          <a className="app-drawer__rout" href="/post">
          <div className="app-drawer__rout-icon">
              <span className="iconify" data-inline="false" data-icon="mdi-light:camera"></span>
          </div>
          <div className="app-drawer__rout-name">
              Add new
          </div>
          </a>
          <a className="app-drawer__rout" href="/settings">
          <div className="app-drawer__rout-icon">
              <span className="iconify" data-inline="false" data-icon="mdi-light:cog"></span>
          </div>
          <div className="app-drawer__rout-name">
              Settings
          </div>
        </a>
      </div>
    )
  }