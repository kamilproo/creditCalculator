import React, {useEffect, useState} from 'react';
import {Switch, Slider} from 'antd';
import '../style/calculatorComponents.css'
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
const CalcComponents = () => {
    const onChangeSwitch = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const [inputValue, setInputValue] = useState(334000);
    const [total, setTotal] = useState(20)
    const [year, setYear] = useState(1)
    const onChangeSlider = (num: number) => {
        setInputValue(num)
    }
    const onChangeTotal = (num: number) => {
        setTotal(num)
    }
    const onChangeYear = (num: number) => {
        setYear(num)
    }

    return(
        <div>
        <div className={"calculator-container"}>
            <p>Получаю зарплату на счёт или карту СберБанка</p>
            <p className={"calc-prop"}>-1%</p>
            <div className={"calculator-switch"}>
                <Switch onChange={onChangeSwitch}></Switch>
            </div>
        </div>
            <div className={"slider-container"} >
            <input
                value={inputValue + ' тыс'}
                className={"input-container"}/>
            <Slider
                style={{width: 500, paddingBottom: 50, position: "absolute", top: 88}}
                min={3334000}
                max={10000000}
                onChange={onChangeSlider}
                value={inputValue}
            />
            </div>
            <div>
                <input
                    value={total + '%'}
                    className={"total-container"}/>
                <Slider
                    style={{width: 500, paddingBottom: 50, position: "absolute", top: 153}}
                    min={20}
                    max={90}
                    onChange={onChangeTotal}
                    value={total}
                />
            </div>
            <div className={"calculator-container2"}>
                <p>Использовать материнский капитал</p>
                <div className={"calculator-switch"}>
                    <Switch></Switch>
                </div>
            </div>
            <div>
                <input
                    value={year}
                    className={"year-container"}/>
                <Slider
                    style={{width: 500,position: "absolute", top: 253 }}
                    min={1}
                    max={30}
                    onChange={onChangeYear}
                    value={year}
                />
            </div>
        </div>
    )
}

export default CalcComponents;