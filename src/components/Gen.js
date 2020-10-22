import React, { useState, Fragment, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (
  {
    name,
    onChange,
    set$Model,
  }) =>
{
  const [value, setValue] = useState("โมเดล");
  const data = {
    Honda: ["Civic", "City", "Accord"],
    Toyota: ["Vios", "Yaris", "Camry", "Ativ"],
    Nissan: ["Note", "Mars", "Almera"],
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);


  function toggle ()
  {

    setDropdownOpen(prevState => !prevState);

  }
  function selectValue (params , name)
  {
    onChange(name+params)
    setValue(params);
    set$Model(params)
  }
  useEffect(() =>
  {
    return () =>
    {
      setValue("เมเดลรถ")
    };
  }, [name]);
  return (
    <Fragment>
      {

        <Fragment>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{width:"100%"}}>
            <DropdownToggle caret color={"warning"} style={{width:"100%"}}>{' '}
              {value}
            </DropdownToggle>
            <DropdownMenu style={{width:"100%"}}>

              {
                name !== undefined && !null && name !== "รถยี่ห้อ" ?
                  <Fragment>
                    {
                      data[name].map((item, i) =>
                      {
                        return (
                          <Fragment key={`Card-${i}`}>
                            <DropdownItem onClick={(e) => { selectValue(item , name) }}>
                              {item}
                            </DropdownItem>
                            <DropdownItem divider />
                          </Fragment>
                        )
                      })
                    }
                  </Fragment>
                  : ``
              }


            </DropdownMenu>
          </Dropdown>
        </Fragment>
      }
    </Fragment>
  );
}

export default Example;