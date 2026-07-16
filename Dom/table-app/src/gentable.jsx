import React, { useState } from 'react'

const GenTable = () => {

    const [num, setNum] = useState("")
    const [count, setCount] = useState(1)

    const handleNum = (e) => {
        setNum(e.target.value)
        setCount(1)
    }

    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    let a = 0, b = 1, c;
    let fibo = "";

    for (let i = 1; i <= num; i++) {
        fibo = fibo + a + " ";
        c = a + b;
        a = b;
        b = c;
    }

    let square=num*num;
    let cube=num*num*num;
    

    return (
        <div>

            num = <input type="number" onChange={handleNum} />

            <h2>
                TABLE 
              
            </h2>

            

            {num && count >= 1 && (
                <div>
                    <h4>{num} * 1 = {num * 1}</h4>
                    <button onClick={() => setCount(2)}>+</button>
                </div>
            )}

            {num && count >= 2 && (
                <div>
                    <h4>{num} * 2 = {num * 2}</h4>
                    <button onClick={() => setCount(3)}>+</button>
                </div>
            )}

            {num && count >= 3 && (
                <div>
                    <h4>{num} * 3 = {num * 3}</h4>
                    <button onClick={() => setCount(4)}>+</button>
                </div>
            )}

            {num && count >= 4 && (
                <div>
                    <h4>{num} * 4 = {num * 4}</h4>
                    <button onClick={() => setCount(5)}>+</button>
                </div>
            )}

            {num && count >= 5 && (
                <div>
                    <h4>{num} * 5 = {num * 5}</h4>
                </div>
            )}

            <hr />

           

            <h2>FIBONACCI SERIES</h2>
            {num && <h4>{fibo}</h4>}

            <hr />

            

            <h2>FACTORIAL</h2>
            {num && <h4>{fact}</h4>}  { /*jr num mdhe value aahe trch kr otherwise nko */}

           <hr />

            <h2>EVEN ODD</h2>
            {num && (
                <h4>
                    {num % 2 == 0 ? "Even Number" : "Odd Number"}
                </h4>
            )}

            <hr />

            <h2>Square </h2>
            {num && <h4>{square}</h4>
                
            }

            <hr />

            <h2>Cube</h2>
            {
                num && <h4>{cube}</h4>
            }

            <hr />

            {/* <h2>addition upto that terms : </h2>
            {
                num &&{if (num>=0){

                } }
            } */}

        </div>
        
    )
}

export default GenTable