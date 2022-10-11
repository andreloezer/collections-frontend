import Input from '../../../../shared/components/Input/Input';
import './HeaderRow.css';

const HeaderRow = (props) => {
    const headerCols = [];

    const selectAll = (event) => {
        props.selectAll(event);
    };

    if (props.editable) {
        headerCols.push(
            <div key={0} className="option-checkbox">
                <Input
                    type="checkbox"
                    name="select-all"
                    noLabel
                    onChange={selectAll}
                />
            </div>
        );
    }

    props.fields.forEach((field, key) => {
        headerCols.push(
            <div key={key + 1} data-header-name={field.name}>
                {field.name}
            </div>
        );
    });

    if (props.editable) {
        headerCols.push(
            <div key={headerCols.length} className="options">
                <span>Options</span>
            </div>
        );
    }

    return (
        <li key={0} className="header-row">
            {headerCols}
        </li>
    );
};

export default HeaderRow;
