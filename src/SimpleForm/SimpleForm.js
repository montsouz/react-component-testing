import React, {useState} from 'react'


const SimpleForm = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [likeDogs, setLikeDogs] = useState('yes');
    const [list, setList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name, age, likeDogs
        };
        list.push(newItem);
        setList(list)
    };

    const displayItem = (name, age, id) => <p>{name} has {age} years old</p>;


    const formItem = {
        'margin': '10px',
        'padding': '8px',
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={formItem}>
                    <label>Name</label>
                    <input type={'text'} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div style={formItem}>
                    <label>Age</label>
                    <input type={'number'} onChange={(event) => setAge(event.target.value)}/>
                </div>
                <div style={formItem}>
                    <p>Like dogs ??</p>
                    <label htmlFor="no">no</label>
                    <input value={'no'} type={'radio'} name={'dogs'}
                           onChange={(event) => setLikeDogs(event.target.value)}/>
                    <label htmlFor="yes">yes</label>
                    <input value={'yes'} type={'radio'} name={'dogs'}
                           onChange={(event) => setLikeDogs(event.target.value)}/>
                </div>
                <button type={'submit'}>Submit</button>
            </form>

            { list.map(item => displayItem(item.name, item.age)) }

        </div>

    )
};


export default SimpleForm
