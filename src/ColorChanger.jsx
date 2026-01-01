import { useState } from "react"
import Style from './ColorChanger.module.css'

function ColorChanger() {

    let [color, setColor] = useState('');

    let randColor = ["red", "yellow", "green", "orange", "purple", "blue"];

    let randomColor = () => {
       let randomIndex = Math.floor(Math.random() * randColor.length);
       document.body.style.backgroundColor = randColor[randomIndex];
    }

    let handleSubmit = (value) => {
        value.preventDefault();
        document.body.style.backgroundColor = color;
    }

    let resetHandle = () => {
        window.location.reload();
    }

  return (
    <div>
        <h1>Color Changer</h1>
        <section className={Style.colorSection}>
            <button onClick={randomColor}>Random Color</button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter color name' 
                    value={color} onChange={(e) => setColor(e.target.value)}
                />
                <input type="submit" value="Apply Color" />
                <button className={Style.resetButton} onClick={resetHandle}>Reset</button>
            </form>
        </section>
        <div className={Style.currentColor}>Current Color : {color}</div>
    </div>
  )
}

export default ColorChanger