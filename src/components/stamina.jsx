import { useState } from "react"

function Stamina() {

    const [stamina, setStamina] = useState(100)

    const [clickCount, setClickCount] = useState(0)

    function handleClick(){

        let newClickCount = clickCount + 1

        setClickCount(newClickCount)

        if(newClickCount % 5 === 0){

            setStamina((prev)=> Math.max(prev - 15,0))
        }

        else{

            setStamina((prev)=> Math.max(prev - 2,0))
        }
    }

    return(
        <>
            <h2>Developer Stamina : {stamina}</h2>

            <button
                onClick={handleClick}
                disabled={stamina <= 0}
            >
                {
                    stamina <= 0
                    ?
                    "Burnout! Rest Required"
                    :
                    "Write Code"
                }
            </button>
        </>
    )
}

export default Stamina