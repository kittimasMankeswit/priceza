import React, { useState, Fragment, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (
  {
    name,
    model,
    years,
    onChange,
  }) =>
{
  const [value, setValue] = useState("ประเภทประกันภัย");
  const data = {
    Honda: {
      Civic:
      {
        2017: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2016: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2015: ["ชั้นที่ 1", "ชั้นที่ 2"],
      },
      City:
      {
        2020: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2019: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2018: ["ชั้นที่ 1", "ชั้นที่ 2"],
      },
      Accord:
      {
        2014: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2013: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2012: ["ชั้นที่ 1", "ชั้นที่ 2"],
      }
    },
    Toyota: {
      Vios:
      {
        2020: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2019: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2018: ["ชั้นที่ 1", "ชั้นที่ 2"],
      },
      Yaris:
      {
        2017: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2016: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2015: ["ชั้นที่ 1", "ชั้นที่ 2"],
      },
      Camry:
      {
        2014: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2013: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2012: ["ชั้นที่ 1", "ชั้นที่ 2"],
      },
      Ativ:
      {
        2011: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2010: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2009: ["ชั้นที่ 1", "ชั้นที่ 2"],
      }
    },
    Nissan: {
      Note:
      {
        2017: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2016: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2015: ["ชั้นที่ 1", "ชั้นที่ 2"],
      },
      Mars:
      {
        2020: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2019: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2018: ["ชั้นที่ 1", "ชั้นที่ 2"],
      },
      Almera:
      {
        2014: ["ชั้นที่ 1", "ชั้นที่ 2", "ชั้นที่ 3"],
        2013: ["ชั้นที่ 1", "ชั้นที่ 3"],
        2012: ["ชั้นที่ 1", "ชั้นที่ 2"],
      }
    },
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggle ()
  {

    setDropdownOpen(prevState => !prevState);

  }
  function selectValue (params)
  {
    onChange(params.substring(8))
    setValue(params);
  }
  useEffect(() =>
  {
    return () =>
    {
      setValue("ประเภทประกันภัย")
    };
  }, [years]);
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

                years !== undefined && !null && years !== "---" && years !== "ประเภทประกันภัย" ?
                  <Fragment>
                    {
                      data[name][model][`${years}`].map((item, i) =>
                      {
                        return (
                          <Fragment key={`Card-${i}`}>
                            <DropdownItem onClick={(e) => { selectValue(item) }}>
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