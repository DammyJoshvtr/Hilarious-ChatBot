import { useState } from "react"
import { MdSend } from "react-icons/md";

const ChatBody = () => {

  const [inputChat, setInputChat] = useState('')

  const changeInputState = (e) => e.target.value

  const reponses = [
    "I'm not saying you're wrong, but have you tried turning it off and on again?",
  "Do you ever wonder if AI dreams of electric sheep? I do... sometimes.",
  "I was going to make a joke about time travel, but you didn’t like it.",
  "Error 404: Sense of humor not found. Just kidding! 😂",
  "I'd agree with you, but then we’d both be wrong.",
  "Why did the React developer break up? Because they didn’t get enough ‘props’!",
  "You talk, I talk. Fair deal, right? 😆",
  "My therapist says I should charge for my jokes… but I’m a free bot.",
  "I'm not lazy; I’m just on energy-saving mode.",
  "I’d tell you a joke about React, but you wouldn't ‘render’ it properly!"
  ];

  return (
    <>
      <div>
        <input className='bg-amber-50 border-black border-2 rounded-lg fixed bottom-0 flex justify-center items-center outline-none left-1/2 -translate-x-1/2 w-3/7 h-15 m-2 p-1.5'
          type="text"
          placeholder="Type..."
          value={inputChat}
          onChange={ changeInputState }
        />

        <button className='fixed bottom-0 right-3/5'>
          <MdSend size={24} />
        </button>
      </div>
    </>
  )
}

export default ChatBody