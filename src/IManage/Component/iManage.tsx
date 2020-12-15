import React, { useEffect, useState } from 'react';
import Category from './category';
import Ajv from "ajv"
import IManageUtils from '../Utils/utils';
import AxiosGateWay from '../../Utils/HTTP/axiosUtils';

interface Props {
    isStart: boolean;
}

export default function IManage(props: Props) {
    let { isStart } = props;
    let [schema, setSchema] = useState(IManageUtils.majorCategorySchema(''));
    let [formData, setFormData] = useState({ value: '', food: '', quantity: 0 })
    let [message, setMessage] = useState('');
    useEffect(() => {
        getPrevData();
    }, [isStart])

    function validateAndSetCategory(category: any) {
        debugger;
        let a = { ...formData }
        let ajv = new Ajv();
        let validator = ajv.compile(IManageUtils.majorCategorySchema(category.value));
        if (category.value && validator(category)) {
            a.value = category.value;
            setFormData(a);
            setSchema(IManageUtils.majorCategorySchema(category.value));
        }
        if (category.food && validator(category)) {
            a.food = category.food;
            setFormData(a);
        }
        if (category.quantity && validator(category)) {
            a.quantity = category.quantity;
            setFormData(a);
        }
        setMessage('');
    }
    function getPrevData() {
        let url = 'http://localhost:5000/im';
        let config = { responseType: 'blob' };

        AxiosGateWay.GET(url).then(
            result => {
                let parsed = result.data;
                setFormData(parsed);
            }
        )
    }
    function submit() {
        // api call here
        let url = 'http://localhost:5000/im';
        AxiosGateWay.POST(url, { data: formData }).then(
            result => {
                setMessage('Saved succesfully');
            }
        )
    }
    return (
        <div className="row">
            <div className="offset-md-4 col-md-4">
                <div className="row">
                    <div className="col-md-12">
                        <Category submit={submit} formData={formData} schema={schema} setCategory={validateAndSetCategory} />
                    </div>
                </div>
                {message.length > 0 &&
                    <div className="row">
                        <div className="col-md-12">
                            {message}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}