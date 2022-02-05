import React, {KeyboardEvent, useEffect} from 'react';
import styles from './SelectByDimych.module.css'

export type ItemType = {
    title: string
    value: any
}


type SelectDimychPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[];

}

const SelectByDimych = (props: SelectDimychPropsType) => {

    const [active, setActive] = React.useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = React.useState(props.value)

    const selectedItem = props.items.find((item) => item.value === props.value)
    const hoveredItem = props.items.find((item) => item.value === hoveredElementValue)


    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {

            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = event.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }
        }


        if(event.key === "Escape" || event.key === "Enter") {
            toggleItems()
        }

    }

    return (
        <div className={`${styles.select}`} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map((item) => <div
                        onMouseEnter={() => setHoveredElementValue(item.value)}
                        className={styles.item + ' ' + (hoveredItem === item ? styles.selected : '')}
                        onClick={() => {
                            props.onChange(item.value);
                            toggleItems();
                        }}
                        key={item.value}>
                        {item.title}
                    </div>)}
                </div>}

        </div>)

};

export default SelectByDimych;