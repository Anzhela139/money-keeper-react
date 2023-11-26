export default function Header() {
  return (
    <div className="app-cabinet fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="app-cabinet__header">
            <div className="app-cabinet__header-greeting">Hello, </div>
            <div className="app-cabinet__header-description">This is your </div>
            <div className="app-cabinet__header-style">
                <div className="app-cabinet__header-style_icon">
                <button type="button">
                    <span className="iconify" data-inline="false" data-icon="bx:bx-moon"></span>
                </button>
                </div>
            </div>
            <div className="app-cabinet__header-user">
                <button type="button">
                <span className="iconify" data-inline="false" data-icon="mdi-light:account"></span>
                </button>
                <div className="app-cabinet__user-dropdown">
                    <div className="app-cabinet__user-dropdown_row">
                        <a href="/logout" className="btn btn-primary">Log out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
