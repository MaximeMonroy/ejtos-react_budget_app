import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Select, { components } from "react-select";

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    console.log(currency)
    const options = [
        { value: "£", label: "£ Uk" },
        { value: "₹", label: "₹ India" },
        { value: "€", label: "€ Europe" },
        { value: "CAD", label: "CAD Canada" },
    ];

    const Control = ({ children, ...props }) => (
        <components.Control {...props}>
          Currency {children}
        </components.Control>
    );

    const customStyles = {
        width: "50%",
        control: (base, state) => ({
            ...base,
            background: "#A5E1A0",
            color: "white",
            // match with the menu
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            // Overwrittes the different states of border
            borderColor: "#A5E1A0",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            paddingLeft: "10px",
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: "#A5E1A0"
            }
        }),
        menu: base => ({
            ...base,
            // override border radius to match the box
            borderRadius: "0px 0px 5px 5px",
            // kill the gap
            marginTop: 0,
            background: "#A5E1A0",
            color: "black",
        }),
        singleValue: (base) => ({
          ...base,
          padding: "5px 10px",
          borderRadius: 5,
          background: currency,
          color: "white",
          display: "flex",
          width: "fit-content",
          backgroundColor: "#A5E1A0"
        }),
        option: (base) => ({
            textAlign: "center",
            height: "2rem",
            "&:hover": {
                // Overwrittes the different states of border
                backgroundColor: "white",
                color: "black",
            }
        }),
        dropdownIndicator: styles => ({ 
            color: 'white', 
        }),
        indicatorSeparator: (styles) => ({display:'none'})
        
    };

    const changeCurrency = (val) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: val,
        });
    };

    return (
        <div className="alert alert-secondary">
            <Select 
                options={options} 
                onChange={(event) => changeCurrency(event.value)}
                components={{ Control }}
                styles={customStyles}
                placeholder=""
            />
            {/* {
                <select
                    name="Currency"
                    id="Currency"
                    onChange={(event) => changeCurrency(event.target.value)}
					placeholder="toto"
                >
                    <option value="£">Uk(£)</option>
                    <option value="₹">India(₹)</option>
                    <option value="€">Europe(€)</option>
                    <option value="CAD">Canada(CAD)</option>
                </select>
            } */}
        </div>
    );
};

export default Currency;
