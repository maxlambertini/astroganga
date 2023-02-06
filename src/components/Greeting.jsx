import {h} from 'preact';
import {useState} from 'preact/hooks';

export default function Greeting( {messages} ) {
    const rndMesg = () => messages[Math.floor(Math.random()*messages.length)]

    const [greeting,setGreeting] = useState(rndMesg());

    const doGreeting = function() {
        setGreeting(rndMesg())
        console.log(greeting)
    }

    return (
        <div>
            <h3>{greeting}! thank you for stopping here!</h3>
            <button onclick={() => doGreeting() }>
                New Greeting
            </button>
        </div>
    )
}