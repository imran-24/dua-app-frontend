'use client'
interface SelectProps{
    label: string,
    value?: Record<string, any>,
    onChange:(value: Record<string, any>) => void,
    options: Record<string, any>[],
    disabled: boolean
}
import ReactSelect from 'react-select'

const Select: React.FC<SelectProps> = ({
    label,
    value,
    options,
    onChange,
    disabled
})=>{
    return(
        <div>
            <label
            className='text-sm 
            font-medium
            leading-6
            block
            text-gray-900'
            >
                {label}
            </label>
            <div className="mt-2">
                <ReactSelect 
                    isDisabled={disabled}
                    value={value}
                    onChange={onChange}
                    isMulti
                    options={options}
                    menuPortalTarget={document.body}
                    styles={{
                        menuPortal: (base) =>({
                            ...base,
                            zIndex: 9999
                        }),
                    }}
                    classNames={{
                        control: () => 'text-sm'
                    }}
                />
            </div>
        </div>
    )
}

export default Select