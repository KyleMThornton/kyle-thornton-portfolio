import { useEffect, useState } from "react"
import TextTransition, { presets } from 'react-text-transition';

export default function HeaderText() {
    const wordsToDescribeKyle = ["Software Engineer", "Web Developer", "Handsome Devil", "Friend", "Foe?"]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          4000, // every 4 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <header className="flex justify-center h-screen items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-7xl font-bold">Kyle Thornton</h1>
                <h2 className="text-4xl font-light pt-5">
                    <TextTransition springConfig={presets.wobbly}>{wordsToDescribeKyle[index % wordsToDescribeKyle.length]}</TextTransition>
                </h2>
            </div>
        </header>
    )
}