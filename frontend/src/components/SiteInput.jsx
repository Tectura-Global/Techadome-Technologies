import { useState } from "react"

export default function SiteInput ({classTitle, onSend}) {

    const [inputText, setInputText] = useState('')

    const updateText = (e) => {
        const newText = e.target.value
        setInputText(e.target.value)
    }

    return (
        <div className={`input-container ${classTitle}`}>
            <input 
                type="email"
                value={inputText}
                onChange={updateText}
                onClick={onSend}
                placeholder='Email Address'
            />
            <button className="site-btn primary">
                Book a Call
            </button>
        </div>
    )
}