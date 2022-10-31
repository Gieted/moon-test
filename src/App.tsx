import React, {useState} from 'react';
import './App.css';

function visualOffset(r: number, o: number) {
    const diff = r - o;
    return diff / (Math.PI * Math.PI);
}

function App() {
    const [moonWidth, setMoonWidth] = useState(() => 33);
    const position = 150;
    const moonSize = 100;
    const r = moonSize / 2;
    const lastPoint = position + moonWidth / 2;
    const center = position - (lastPoint - position - r) / 2 - visualOffset(moonSize, moonWidth);

    return (
        <div className="App">
            <svg height={500} width={500}>
                <circle fill='#1D1D1D' r={100} cx={position} cy={position}/>
                <mask id='moon' height={position} width={position}>
                    <circle fill='white' r={r + moonWidth} cx={center} cy={position}/>
                    <circle fill='black' r={r} cx={center + moonWidth} cy={position}/>
                </mask>
                <circle fill='#FF8E09' r={r} cx={center} cy={position} mask="url(#moon)"/>
            </svg>
            <label>{moonWidth}</label>
            <input type='range' min={0} max={moonSize} style={{width: 500}} value={moonWidth}
                   onInput={(event) => setMoonWidth(+event.currentTarget.value)}/>
        </div>
    );
}

export default App;
