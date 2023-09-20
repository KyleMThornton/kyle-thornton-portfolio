import { useEffect, useState } from "react"
import TextTransition, { presets } from 'react-text-transition';

export default function HeaderText() {
    const wordsToDescribeKyle = ["Hello!", "¡Hola!", "Bonjour!", "Guten Tag!"]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          2000, // every 4 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <header className="flex justify-center h-screen items-center">
            <div className="flex flex-col p-5">
                <h1 className="text-3xl text-black pb-1"><TextTransition springConfig={presets.wobbly}>{wordsToDescribeKyle[index % wordsToDescribeKyle.length]}</TextTransition></h1>
                <h1 className="text-3xl text-black pb-1">I'm <span>Kyle Thornton</span>.</h1>
                <h1 className="text-4xl font-bold text-black">A full stack web developer with a <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-800">passion for fashion.</span></h1>
            </div>
        </header>
    )
}