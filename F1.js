import "./style.css"
import { useEffect, useState } from "react";


function F1(){
    // const str = '200/100 55';
    // const compute = (str = '') => {
    // let total = 0;
    // str = str.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    // while (str.length) {
    //     total += parseFloat(str.shift());
    // };
    // return total;
    // };
    // console.log(compute(str));

    // Example expression as a string

    // const expression = "2.5+3.75+4*3/3";

    // try {
    // const result = eval(expression);
    // console.log(`Result: ${result}`);
    // } catch (error) {
    // console.error('Error:', error);
    // }

    window.onload = function(){ 
        alert("Welcome To My Fully Functional Calculator!\n"+
        "To clear Output.. Double Click '0' or '⌫'");
    } 

    const [result, setResult] = useState("")

    const computeResult = () => {
        try {
            const answer = eval(result);
            setResult(answer);
        } catch (error) {
            alert('Error:', error);
        }
    }

    const backspace = () => {
        if(result.length != 0){
            try{
                setResult(result.slice(0, -1));
            } catch (error) {
                console.error(error);
                setResult("")
            }
            
        }
    }

    const clearOutput = () => {
        setResult("");
    }

    const showAlert = () => {
        alert("To clear Output.. Double Click '0' or '⌫'");
    }

    return (
        <div id="grad">
            <div class="calc">
                <div class="result">
                    <div class="result_text"><h4>{result}</h4></div>
                </div>
                <div class="buttons">
                    <div class="row">
                        <div class="column1" style={{paddingRight: 0}}>
                            <table>
                                <tr>
                                    <td><button onClick={() => {setResult(result+"7");}} class="btn">7</button></td>
                                    <td><button onClick={() => {setResult(result+"8");}} class="btn">8</button></td>
                                    <td><button onClick={() => {setResult(result+"9");}} class="btn">9</button></td>
                                </tr>
                                <tr>
                                    <td class="num"><button onClick={() => {setResult(result+"4");}} class="btn">4</button></td>
                                    <td class="num"><button onClick={() => {setResult(result+"5");}} class="btn">5</button></td>
                                    <td class="num"><button onClick={() => {setResult(result+"6");}} class="btn">6</button></td>
                                </tr>
                                <tr>
                                    <td class="num"><button onClick={() => {setResult(result+"1");}} class="btn">1</button></td>
                                    <td class="num"><button onClick={() => {setResult(result+"2");}} class="btn">2</button></td>
                                    <td class="num"><button onClick={() => {setResult(result+"3");}} class="btn">3</button></td>
                                </tr>
                                <tr>
                                    <td class="num"><button onDoubleClick={clearOutput} onClick={() => {setResult(result+"0")}} class="btn">0</button></td>
                                    <td class="num"><button onClick={() => {setResult(result+".");}} class="btn">.</button></td>
                                    <td class="num"><button onClick={computeResult} class="btn">=</button></td>
                                </tr>
                            </table>
                        </div>
                        <div class="column2" style={{paddingLeft: 0}}>
                            <table>
                                <tr><td><button onDoubleClick={clearOutput} onClick={backspace} class="btn opr">⌫</button></td></tr>
                                <tr><td><button onClick={() => {setResult(result+"/");}} class="btn opr">÷</button></td></tr>
                                <tr><td><button onClick={() => {setResult(result+"*");}} class="btn opr">×</button></td></tr>
                                <tr><td><button onClick={() => {setResult(result+"-");}} class="btn opr">-</button></td></tr>
                                <tr><td><button onClick={() => {setResult(result+"+");}} class="btn opr">+</button></td></tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default F1;