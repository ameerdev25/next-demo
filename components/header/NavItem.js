import Link from "next/link";
import { Fragment } from "react";
import { Nav } from "rsuite";

export default function({type, item}) {

    const renderItemType = () => {
        return (
            <Nav.Item><Link href={item.link}>{item.title}</Link></Nav.Item>
        )
    }

    const renderMenuType = () => {
        let itemList = []

        item.items.map(value => {
            itemList.push(<Nav.Item><Link href={value.link}>{value.title}</Link></Nav.Item>)
        })

        return (
            <Nav.Menu title={item.menuTitle}>
                {itemList}
            </Nav.Menu>
        )
    }

    return(
        <Fragment>
            {type === 'item' ? renderItemType() : ''}
            {type === 'menu' ? renderMenuType() : ''}
        </Fragment>        
    )
}