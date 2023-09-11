export default function NavBar() {
    return (
        // <div className="flex justify-between sticky top-0 p-5 mt-20 bg-white">
        //     <h2 className="hover:underline">Home</h2>
        //     <h2 className="hover:underline">Projects</h2>
        //     <h2 className="hover:underline">About</h2>
        //     <h2 className="hover:underline">Contact</h2>
        // </div>
        <div className="flex justify-center sticky top-0">
            <ul className="steps w-5/6 p-5 mt-10">
                <li className="step">Home</li>
                <li className="step">Projects</li>
                <li className="step">About</li>
                <li className="step">Contact</li>
            </ul>
        </div>
    )
}