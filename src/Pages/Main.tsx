import React from "react";
import InputSearchCity from "../components/inputSearchCity";
import SelectOption from "../components/selectOption";
import '../style/main.css'
import TargetOption from "../components/targetOption";
import TableCalculator from "../components/tableCalculator";
import CalcComponents from "../components/calcComponents";
import FormOrder from "../components/formOrder";

export const Main = () => {

    return(
            <div className={"Main-container"}>
            <InputSearchCity/>
            <TargetOption/>
            <SelectOption/>
                <div className={"Main-container2"}>
            <CalcComponents/>
                </div>
                <TableCalculator/>
                <FormOrder/>
            </div>

    )
}

