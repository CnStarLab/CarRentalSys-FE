"use client";

import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

// 定义选项的类型
interface OptionType {
  value: string;
  label: string;
}

// 定义 SelectField 组件的 props 类型
interface SelectFieldProps {
  placeholder: string;
  options: OptionType[];
  onChange: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ placeholder, options, onChange }) => (
  <Select
    className="w-full mb-4"
    showSearch
    placeholder={placeholder}
    optionFilterProp="label"
    onChange={onChange}
  >
    {options.map(({ value, label }) => (
      <Option key={value} value={value} label={label}>{label}</Option>
    ))}
  </Select>
);

export default SelectField;