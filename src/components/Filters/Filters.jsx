import React from 'react';
import { Select, Slider } from 'antd';
import { brands } from '../../helpers/brands';

const Filters = () => {
    return (
        <div style={{ marginTop: "20px" }}>
            <Select placeholder="Filter by brand" style={{ width: "100%" }} allowClear mode='multiple'>
                {brands.map((item) => (<Select.Option
                    key={item.id} value={item.brand}>{item.brand}</Select.Option>))}
            </Select>
            <Slider defaultValue={[1, 1000000]} min={0} max={1000000} step={100} range />
        </div>
    );
};

export default Filters;