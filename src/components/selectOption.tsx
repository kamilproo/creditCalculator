import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Select, Space} from 'antd';
import type { SelectCommonPlacement } from 'antd/es/_util/motion';

const SelectOption = () => {
    const [placement, SetPlacement] = useState<SelectCommonPlacement>('topLeft');

    const placementChange = (e: RadioChangeEvent) => {
        SetPlacement(e.target.value);
    };

    return (
        <>
            <Radio.Group value={placement} onChange={placementChange}>
                <Space>
                <Radio.Button value="topLeft">Базовая программа от 15%</Radio.Button>
                <Radio.Button value="topRight">Военная от 15%</Radio.Button>
                <Radio.Button value="bottomLeft">Семейнная от 6%</Radio.Button>
                <Radio.Button value="bottomRight">Гос Сертификат от 2%</Radio.Button>
                </Space>
            </Radio.Group>
            <br />
            <br />
        </>
    );
};

export default SelectOption;