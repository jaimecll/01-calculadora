import { useState } from 'react'
import './calculator.css'
import Button from './button.jsx'

function Calculator(){
    const [data, setData] = useState({operation: '', result:''})
    const numberClick = () => {
        setData({ ...data , operation:`${data.operation}` + event.target.innerText})
    }
    const operatorClick = () => {
        
        if(data.operation.slice(-1) == event.target.innerText || data.operation.length == 0 && (event.target.innerText == '*'|| event.target.innerText == '/' )) return
        if(!parseInt(data.operation.slice(-1))) {
            overwrite();  
        }else{
            numberClick();
        }
        
    }
    const resetData = () => {
        setData({operation:'', result: ''})
    }
    const deleteData = () => {
        
        if( data.operation.length == 0 ) return
        setData({operation:data.operation.slice(0, data.operation.length-1)})
        
    }
    const result = () => {
        let result=0;
        if(!parseInt(data.operation.slice(-1))) {
            result = parseFloat(eval(data.operation.slice(0, data.operation.length-1)).toFixed(6));
            
        }else{
            result = parseFloat(eval(data.operation).toFixed(6));
            
        }
        setData({...data, operation: '', result: result});
        
        
    }
    const changeOperator = () => {
        let operator = '+';
        let operation = data.operation;
        if(!parseInt(data.operation.substring(0, 1))){
            operation = data.operation.substr(1);
            if(data.operation.substring(0, 1)=='+'){
                operator = '-';
            }else{
                operator = '+';
                
            }
        }else{
            operator = '-';
        }
        
        
        setData({...data , operation:operator + operation})
    }
    const overwrite = () => {
        let value = data.operation.slice(0, data.operation.length-1);
        value=value + event.target.innerText;
        setData({...data , operation:value})
        
    }
    return(
        <div className="calculator">
            <label type="text" className="calculator-result">{data.result}</label>
            <input type="text" className="calculator-operation" value={data.operation} disabled></input>
            <div className='calculator-button-container'>
                <div className='calculator-row'>
                    <Button name="C" color='grey-button' buttonClick={resetData}></Button>
                    <Button name="+/-" color='grey-button' buttonClick={changeOperator}></Button>
                    <Button name="%" color='grey-button' buttonClick={operatorClick}></Button>
                    <Button name="/" color='blue-button' buttonClick={operatorClick}></Button>    
                </div>
                <div className='calculator-row'>
                    <Button name="1" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="2" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="3" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="*" color='blue-button' buttonClick={operatorClick}></Button>   
                </div>
                <div className='calculator-row'>
                    <Button name="4" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="5" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="6" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="-" color='blue-button' buttonClick={operatorClick}></Button>   
                </div>
                <div className='calculator-row'>
                    <Button name="7" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="8" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="9" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="+" color='blue-button' buttonClick={operatorClick}></Button> 
                </div>
                <div className='calculator-row'>
                    <Button name="." color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="0" color='grey-button' buttonClick={numberClick}></Button>
                    <Button name="Back" color='grey-button' buttonClick={deleteData}></Button>
                    <Button name="=" color='blue-button' buttonClick={result}></Button>
                </div>
            </div>
        </div>
    )
}
export default Calculator