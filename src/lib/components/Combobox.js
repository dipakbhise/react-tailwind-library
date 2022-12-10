import React, { useEffect, useRef, useState } from "react";
import { CloseIcon } from "./icons/Icons";

var inputValue = "";
var refdata = [];
const Combobox = (props) => {
  const {
    textField,
    options,
    value,
    title,
    setvalue,
    inputProps,
    multiselect,
  } = props;
  const optionsRef = useRef(null);
  const [isoptions, setIsoptions] = useState(false);
  const [data, setdata] = useState([]);
  const [ismultioptions, setismultioptions] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setdata(options);
    refdata = options;
  }, []);

  const handleClickOutside = (event) => {
    if (optionsRef && !optionsRef.current?.contains(event.target)) {
      if (multiselect) {
        setismultioptions(false);
      } else {
        setIsoptions(false);
        if (inputValue[textField]) {
          let isValuPresent = refdata.findIndex((item, index) => {
            return inputValue[textField] === item[textField];
          });
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
    }
  };

  const onComboboxFilterChangeFun = (event, textfield) => {
    if (multiselect) {
    } else {
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
            return item
              .toLowerCase()
              .includes(event.target.value.toLowerCase());
          });
        }
        setdata(filteredData);
      } else {
        setdata(refdata);
      }
    }
  };

  const onOptionClick = (option) => {
    if (multiselect) {
      let modifyValue = [...value];
      if (textField) {
        let isValuPresent = modifyValue.findIndex((item, index) => {
          return item[textField] === option[textField];
        });
        if (isValuPresent === -1) {
          modifyValue.push(option);
          setvalue(modifyValue);
        }
      } else {
        let isValuPresent = modifyValue.findIndex((item, index) => {
          return item === option;
        });
        if (isValuPresent === -1) {
          modifyValue.push(option);
          setvalue(modifyValue);
        }
      }
      setismultioptions(false);
    } else {
      inputValue = option;
      setvalue(option);
      setIsoptions(false);
    }
  };

  const removeValue = (option, index) => {
    console.log("index", index);
    let modifyValue = [...value];
    modifyValue.splice(index, 1);
    setvalue(modifyValue);
    // if (textField) {
    // } else {
    //   let modifyValue = [...value];
    //   modifyValue.splice(index, 1);
    //   setvalue(modifyValue);
    // }
  };

  return (
    <>
      {multiselect ? (
        <>
          <div className="relative w-44 m-4 p-1" ref={optionsRef}>
            <div className="flex p-1 flex-wrap justify-start border  rounded border-violet-500 outline-1 outline-violet-800">
              {value?.map((option, index) => (
                <div className="flex items-center py-1 px-2 bg-slate-400 rounded-2xl text-white my-2 ml-1">
                  <p className="mr-1" key={index}>
                    {option[textField] ? option[textField] : option}
                  </p>
                  <div
                    onClick={(e) => removeValue(option, index)}
                    style={{ cursor: "pointer" }}
                  >
                    <CloseIcon color="yellow" size={"18"} bg={"white"} />
                  </div>
                </div>
              ))}
              <input
                className="outline-none p-1"
                onClick={() => {
                  setismultioptions(!ismultioptions);
                }}
                onChange={(event) =>
                  onComboboxFilterChangeFun(event, textField)
                }
                {...inputProps}
                // value={value[textField] ? value[textField] : value}
              />
            </div>

            {ismultioptions && (
              <div className="absolute w-full">
                <div className="h-auto w-[99%] overflow-auto flex-column justify-center shadow-md rounded bg-white z-10">
                  {data?.length > 0 && (
                    <>
                      {data.map((option, index) => (
                        <p
                          className={`py-1 pl-2 hover:bg-violet-300 cursor-pointer`}
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
        </>
      ) : (
        <>
          <div>
            <div className="relative w-28 m-4" id="test" ref={optionsRef}>
              <label>{title ? title : "Combobox"}</label>
              <input
                className="border w-28 p-2 rounded border-violet-500 outline-1 outline-violet-800"
                onClick={() => {
                  setIsoptions(!isoptions);
                }}
                onChange={(event) =>
                  onComboboxFilterChangeFun(event, textField)
                }
                {...inputProps}
                value={value[textField] ? value[textField] : value}
              />
              {isoptions && (
                <div className="absolute w-full z-10">
                  <div className="h-auto w-[99%] overflow-auto flex-column justify-center shadow-md rounded bg-white">
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
      )}
    </>
  );
};

export default Combobox;
