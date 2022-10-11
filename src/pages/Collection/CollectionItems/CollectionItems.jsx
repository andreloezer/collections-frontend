import {
    DISPLAY_ITEMS_AS_TABLE,
    DISPLAY_ITEMS_AS_GRID,
} from '../StyleConstant';
import ItemRow from './ItemRow/ItemRow';
import HeaderRow from './HeaderRow/HeaderRow';
import './CollectionItems.css';

const ItemsList = (props) => {
    const itemsList = [];
    let classes = 'items-list';

    if (props.style === DISPLAY_ITEMS_AS_TABLE) {
        classes += ' table';
        itemsList.push(
            <HeaderRow
                key={0}
                fields={props.fields}
                editable={props.editable}
                selectAll={props.selectAll}
            />
        );
    } else if (DISPLAY_ITEMS_AS_GRID) {
        classes += ' grid';
    }

    props.items.forEach((item, index) => {
        itemsList.push(
            <ItemRow
                fields={props.fields}
                item={item}
                key={index + 1}
                index={index}
                editable={props.editable}
                selected={item.selected}
                selectItem={props.selectItem}
                editItem={props.editItem}
                deleteItem={props.deleteItem}
            />
        );
    });

    return (
        <section className={classes}>
            <ul>{itemsList}</ul>
        </section>
    );
};

export default ItemsList;
