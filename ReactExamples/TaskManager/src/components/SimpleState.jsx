import { useState } from "react";
import "./tasks.css"
function SimpleState() {
    let [isImportant, setIsImportant] = useState(true);
    console.log(isImportant);
    function updateTitle() {
        setIsImportant(oldValue => !oldValue)
        console.log(isImportant);
    }
    return (
        <div>
            <h1>Do you want to learn React?</h1>
            <button onClick={updateTitle}>
                {
                    isImportant ? "YES" : "NO"
                }
            </button>
        </div>
    )
}

export default SimpleState;