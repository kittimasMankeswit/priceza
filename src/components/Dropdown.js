import React, { useState, Fragment } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Gen_Dropdown from '../components/Gen';
const Example = (
  {
    
    prop_value_1,
    prop_value_2,
    prop_value_3,
    onChange,
    text
  }) =>
{
  
  const [value_1, setValue_1] = useState(prop_value_1);
  const [value_2, setValue_2] = useState(prop_value_2);
  const [value_3, setValue_3] = useState(prop_value_3);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function selectValue (params)
  {
    onChange(params);
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);
  function selectValue (params)
  {
    onChange(params);
  }

  return (
    <Fragment>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{width:"100%"}}>
        <DropdownToggle caret color={"warning"} style={{width:"100%"}}>{' '}
          {text}
        </DropdownToggle>
        <DropdownMenu style={{width:"100%"}}> 
          {
            value_1 !== "" && value_1 !== undefined && !null
              ?
              <Fragment>
                <DropdownItem onClick={(e) => { selectValue(value_1) }}>{value_1}</DropdownItem>
                <DropdownItem divider />
              </Fragment>
              :
              ``
          }
          {
            value_2 !== "" && value_2 !== undefined && !null
              ?
              <Fragment>
                <DropdownItem onClick={(e) => { selectValue(value_2) }}>{value_2}</DropdownItem>
                <DropdownItem divider />
              </Fragment>
              :
              ``
          }
          {
            value_3 !== "" && value_3 !== undefined && !null
              ?
              <Fragment>
                <DropdownItem onClick={(e) => { selectValue(value_3) }}>{value_3}</DropdownItem>
                <DropdownItem divider />
              </Fragment>
              :
              ``
          }
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  );
}

export default Example;