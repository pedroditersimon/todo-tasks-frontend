
import "./ListField.css";
import edit_icon from "../../assets/images/edit.png";
import IconButton from "./IconButton.jsx";
import FormField from "../Forms/FormField.jsx";

function ListField({title, error_msg, onClick, texts=[]}) {

    function createItems(texts) {
        if (texts === undefined || texts.length === 0)
            return (<li key={0}>Select</li>);

        return texts.map( (text, index) => (
            <li key={index}>
                {text}
                <br />
            </li>
        ));
    }

    const countText = texts.length > 0 ? `(${texts.length})` : "";

    return (
        <FormField title={`${title} ${countText}`} error_msg={error_msg} >
            <div className="list-field-value" onClick={onClick}>
                <ul className="list-field-ul">
                    {createItems(texts)}
                </ul>
                <IconButton icon={edit_icon} className="list-field-icon" onClick={onClick} />
            </div>
        </FormField>
    );
}

export default ListField;