import React, { useState } from 'react'
import "./Calculator.css"

const CalculatorPage = () => {

    const [result, setresult] = useState("");
    const handleClick = (e) => {
        setresult(result.concat(e.target.value))
    }
    const calCulate = () => {
        try {
            setresult(eval(result).toString())
        } catch (error) {
            setresult("Error")
        }
    }
    const ClearValue = () => {
        setresult("")
    }
    return (
        <>
            <div style={{ backgroundColor: "black", height: "100vh" }}>

                <div className='mainDiv'>
                    <div>
                        <h4 className='heading'>Calculator</h4>
                        <input className="input" type="text" contentEditable="false" value={result} name="" id="" />
                    </div>

                    <div className='buttonDiv'>
                        <button value="7" onClick={handleClick}>7</button>
                        <button value="8" onClick={handleClick}>8</button>
                        <button value="9" onClick={handleClick}>9</button>
                        <button value="/" onClick={handleClick}>/</button>
                    </div>
                    <div className='buttonDiv'>
                        <button value="4" onClick={handleClick}>4</button>
                        <button value="5" onClick={handleClick}>5</button>
                        <button value="6" onClick={handleClick}>6</button>
                        <button value="*" onClick={handleClick}>*</button>
                    </div>
                    <div className='buttonDiv'>
                        <button value="1" onClick={handleClick}>1</button>
                        <button value="2" onClick={handleClick}>2</button>
                        <button value="3" onClick={handleClick}>3</button>
                        <button value="-" onClick={handleClick}>-</button>
                    </div>
                    <div className='buttonDiv'>
                        <button value="." onClick={handleClick}>.</button>
                        <button value="0" onClick={handleClick}>0</button>
                        <button value="+" onClick={handleClick}>+</button>
                        <button onClick={calCulate}>=</button>
                    </div>
                    <div className='buttonDiv'>
                        <button onClick={ClearValue}>Clear</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CalculatorPage