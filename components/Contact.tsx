type FormInputs = {
    email: string;
    message: string;
};

export default function Contact() {
    
    return (
        <div className="p-4 h-auto container">
            <h2 className="text-4xl font-semibold">Contact</h2>
            <h3 className="pb-5">Get in touch with me!</h3>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-950 focus:border-zinc-950" id="email" name="email" type="email" placeholder="Email" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-zinc-950 focus:border-zinc-950" id="message" name="message" placeholder="Message" required></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Send
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
        </div>
    )
}