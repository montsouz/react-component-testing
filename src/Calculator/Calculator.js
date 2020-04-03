import React,{useState} from 'react'
import './Calculator.css'
import Buttons from './Buttons/Buttons'
import TextArea from "./Screen/Textarea";

const Calculator = () => {

    const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*'];
    const [query, setQuery] = useState(['']);
    const [textQuery , setTexQuery] = useState('');

    function is_numeric(str){
        return /^\d+$/.test(str);
    }

    const insertInQuery = (value) => {
        if(is_numeric(value)){
            query[query.length -1] = query[query.length -1] + value;
            setQuery(query)
        }else {
            query.push(value);
            query.push('');
            setQuery(query)
        }
        setTexQuery(textQuery + value)
    };

    const clear = () => {
      setQuery(['']);
      setTexQuery('')
    };

    const makeop = (op, num ) => {
        op.sum = Number(op.sum);
        switch (op.lastOp) {
            case '+':
                return op.sum + num;
            case '-':
                return op.sum - num;
            case '/':
                return op.sum / num;
            case  '*':
                return op.sum * num;
            default:
               return 'ERROR!'
        }
    };

    const processOperation = () => {
        const operations = ['+', '-', '/', '*'];
        try {
            let op = {
                sum: query[0],
                lastOp: query[1]
            };
            for (let i = 2; i < query.length; i++) {
                if(operations.includes(query[i])){
                    op.lastOp = query[i]
                }else {
                    op.sum = makeop(op, Number(query[i]))
                }
            }
            setQuery(['']);
            setTexQuery(op.sum)
        }catch (e) {
            console.log(e);
            setQuery('ERROR!')
        }
    };

    return (
        <>
            <div>
                <TextArea testId={'screen'} text={textQuery.toString()}/>
            </div>
            <div className={'Calculator-Buttons'}>
                {symbols.map(symbol => {
                    return <Buttons testId={symbol} key={symbol} symbol={symbol} operation={insertInQuery}/>
                })}
                <Buttons key={'='} symbol={'='} testId='=' operation={processOperation}/>
                <Buttons color={'rgb(102, 162, 57)'} testId={'clear'} key={'Clear'} symbol={'Clear'} operation={clear}/>
            </div>

        </>

    )
};


export default Calculator
