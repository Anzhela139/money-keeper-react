import Image from 'next/image'

export default function Header() {
  return (
    <div className="app-cabinet">
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
                <div className="app-cabinet__user-dropdown_row">Press this to logout</div>
                <div className="app-cabinet__user-dropdown_row">
                <a href="/logout" className="btn btn-primary">Log out</a>
                </div>
            </div>
        </div>
        </div>
    <div>
    <div className="app-drawer">
        <div className="app-drawer__inner">
        <a href="/" className="app-drawer__head">
            <div className="app-drawer__icon" to="/cabinet">
            <span className="iconify" data-inline="false" data-icon="ic:outline-business-center"></span>
            </div>
            <div className="app-drawer__name">
            Small business money keeper
            </div>
        </a>
        <div className="app-drawer__nav">
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
        </div>
        </div>
    </div>
    </div>
  )
}
