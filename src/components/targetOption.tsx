import React from 'react';
import { Select } from 'antd';
import {modelTarget} from "../models/model.target";

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const TargetOption = () => {
    return(
        <Select
            defaultValue="Цель кредита"
            style={{ width: 400, height: 40 }}
            onChange={handleChange}
            options={modelTarget}
        />
    )
}

export default TargetOption;