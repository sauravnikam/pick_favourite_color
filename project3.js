const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")
const result = document.querySelector("#result")
const colorSet = document.querySelector(".colorBox")

const button3 = document.querySelector("#btn3")

// function to generate random color number
const generateColor = () => {
    const colorId = "0123456789ABCDEF"
    let symbol = "#";
    for (i = 0; i < 6; i++) {
        symbol += colorId[Math.floor(Math.random() * 16)]
    }
    return symbol;
}

let intervals;
const startBtn = () => {                     //function to start button
    button1.addEventListener("click", () => {

        let ChangeColor = () => {    // function the change color after 1 second
            intervals = setInterval(() => {

                colorSet.style.backgroundColor = generateColor()
                result.innerHTML = generateColor()
            }, 1000)
        }
        ChangeColor()
    })
}

startBtn()

const stopBtn = () => {               //function to stop button
    button2.addEventListener("click", () => {
        const clear = () => {         //function to clear interval

            clearInterval(intervals)
            intervals = null;
        }
        clear()
    })
}
stopBtn()


const clearAll = () => {
    button3.addEventListener("click", () => {
        colorSet.style.backgroundColor = null
        result.innerHTML = null

    })
}
clearAll()