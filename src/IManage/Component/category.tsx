import Form from "@rjsf/core";
import Select from 'react-select';

interface Props {
    setCategory: (category: any) => void;
    schema: any;
    formData: any;
    submit: () => void;
}

export default function Category(props: Props) {
    let { setCategory, formData, schema, submit } = props;
    const formatGroupLabel = (data: any) => (
        <div >
          <span>{data.label}</span>
        </div>
      );

    function optionSet(values: any[]) {
        let list = [];
        for (let i = 0; i < values.length; i++) {
            list.push({value: values[i], label: values[i]})
        }
        return list;
    }  
    const uiSchema = {
        "category": {
            "ui:widget": (props: any) => {
                let options = [];
                for (let i = 0; i < props.schema.enum.length; i++) {
                    options.push({label: props.schema.enum[i].label, options: optionSet(props.schema.enum[i].value) })
                }
                return (
                    <Select
                        value={{label: formData.value, value: formData.value}}
                        onChange={setCategory}
                        options={options}
                        formatGroupLabel={formatGroupLabel}
                    />
                );
            }
        }
    };
    return (
        <div className="row">
            <div className="col-md-12">
                <Form onSubmit={submit} formData={formData} uiSchema={uiSchema} onChange={(e) => setCategory(e.formData)} schema={schema} />
            </div>
        </div>
    )
}