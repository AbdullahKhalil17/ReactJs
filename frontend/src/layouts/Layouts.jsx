import { Outlet } from "react-router-dom";

export default function Layouts() {

  return<>
    <header>
      <div className="items-center">
      <span>Header</span>
      </div>
    </header>
    <main>
      <Outlet></Outlet>
    </main>
    <footer>Footer</footer>
  </>
}