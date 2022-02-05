import React from 'react';
import styles from './Select.module.css'
import arrow from './arrow.png'

export type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {

    title: string
    currentValue?: any
    collapsed: boolean
    onClick: () => string
    onChange?: (value: any) => void
    items: ItemType[];
    openClosedMenu:(flag: boolean) => void
}

const Select = (props: SelectPropsType) => {

    let arrowStyle = styles.arrow
    if (!props.collapsed) {
        arrowStyle = styles.arrow_bottom
    }

    const userIdCallback = (event: any) => {
        let userId = event.target.id
        console.log(event)
        if(userId){
            //@ts-ignore
            props.onChange(userId)
        }
    }

    const openClosed =() => {
        props.openClosedMenu(!props.collapsed)
    }
    return (
        <div>
            <div onClick={openClosed}
                 className={styles.title}>
               { props.title }
                <img className={arrowStyle} src={arrow} alt={'arrow'}/>

            </div>
            <div> {!props.collapsed &&
                <div className={styles.item}>
                    {props.items.map((item) =>
                        <div className={styles.item} onClick={userIdCallback} id={item.value} key={item.value}>{item.title}</div>)}
                </div>}
            </div>

        </div>
    );
};

export default Select;