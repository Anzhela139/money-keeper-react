export default function Header() {
  return (
    <div className="app-cabinet fixed left-0 top-0 flex w-full justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-1 pt-1 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="app-cabinet__header flex justify-end ">
            <div className="app-cabinet__header-user">
              <button type="button" className="btn btn-primary">Log out</button>
            </div>
        </div>
    </div>
  )
}
