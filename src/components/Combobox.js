import React, { useEffect, useRef, useState } from "react";

var inputValue = "";
var refdata = [];
const Combobox = (props) => {
  const { textField, options, value, title, setvalue, inputProps } = props;
  const optionsRef = useRef();
  const [isoptions, setIsoptions] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setdata(options);
    refdata = options;
  }, []);

  const handleClickOutside = (event) => {
    if (optionsRef && !optionsRef.current?.contains(event.target)) {
      setIsoptions(false);
      if (inputValue[textField]) {
        let isValuPresent = refdata.findIndex((item, index) => {
          return inputValue[textField] === item[textField];
        });
        console.log("isValuPresent", isValuPresent);
        if (isValuPresent === -1) {
          setvalue("");
        }
        setdata(refdata);
      } else {
        let isValuPresent = refdata.findIndex((item, index) => {
          return inputValue === item;
        });
        if (isValuPresent === -1) {
          setvalue("");
        }
        setdata(refdata);
      }
    }
  };

  const onComboboxFilterChangeFun = (event, textfield) => {
    setvalue(event.target.value);
    inputValue = event.target.value;
    if (!isoptions) {
      setIsoptions(true);
    }

    if (event.target.value !== "") {
      let filteredData;
      if (textfield) {
        filteredData = refdata?.filter((item, index) => {
          return item[textfield]
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
      } else {
        filteredData = refdata?.filter((item, index) => {
          return item.toLowerCase().includes(event.target.value.toLowerCase());
        });
      }
      setdata(filteredData);
    } else {
      setdata(refdata);
    }
  };

  const onOptionClick = (option) => {
    inputValue = option;
    setvalue(option);
    setIsoptions(false);
  };

  return (
    <>
      <div>
        <div className="relative w-28 m-4" id="test" ref={optionsRef}>
          <label>{title ? title : "Combobox"}</label>
          <input
            className="border w-28 p-2 rounded border-violet-500 outline-1 outline-violet-800"
            onClick={() => {
              setIsoptions(!isoptions);
            }}
            onChange={(event) => onComboboxFilterChangeFun(event, textField)}
            {...inputProps}
            value={value[textField] ? value[textField] : value}
          />
          {isoptions && (
            <div className="absolute w-full">
              <div className="h-auto w-full overflow-auto flex-column justify-center shadow-md rounded">
                {data?.length > 0 && (
                  <>
                    {data.map((option, index) => (
                      <p
                        className="py-1 pl-2 hover:bg-violet-300"
                        onClick={() => {
                          onOptionClick(option);
                        }}
                        key={index}
                      >
                        {option[textField] ? option[textField] : option}
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Combobox;
