export default function NavBar() {
    return (
      // <div className="flex justify-between sticky top-0 p-5 mt-20 bg-white">
      //     <h2 className="hover:underline">Home</h2>
      //     <h2 className="hover:underline">Projects</h2>
      //     <h2 className="hover:underline">About</h2>
      //     <h2 className="hover:underline">Contact</h2>
      // </div>
      // <div className="flex justify-center sticky top-0">
      //     <ul className="steps w-5/6 p-5">
      //         <li className="step">Home</li>
      //         <li className="step">Projects</li>
      //         <li className="step">About</li>
      //         <li className="step">Contact</li>
      //     </ul>
      // </div>
      <div className="navbar bg-base-100 sticky top-0 p-5">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">title</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    );
}