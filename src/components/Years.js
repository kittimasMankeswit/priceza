import React, { useState, Fragment, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (
  {
    model,
    onChange,
    set$Years,
  }) =>
{
  const [value, setValue] = useState("ปีจดทะเบียน");
  const data = {
    HondaCity: ["2020 (2563)", "2019 (2562)", "2018 (2561)"],
    HondaCivic: ["2017 (2560)", "2016 (2559)", "2015 (2558)"],
    HondaAccord: ["2014 (2557)", "2013 (2556)", "2012 (2555)"],

    ToyotaVios: ["2020 (2563)", "2019 (2562)", "2018 (2561)"],
    ToyotaYaris: ["2017 (2560)", "2016 (2559)", "2015 (2558)"],
    ToyotaCamry: ["2014 (2557)", "2013 (2556)", "2012 (2555)"],
    ToyotaAtiv: ["2011 (2554)", "2010 (2553)", "2009 (2552)"],

    NissanNote: ["2020 (2563)", "2019 (2562)", "2018 (2561)"],
    NissanMars: ["2017 (2560)", "2016 (2559)", "2015 (2558)"],
    NissanAlmera: ["2014 (2557)", "2013 (2556)", "2012 (2555)"],
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);


  function toggle ()
  {

    setDropdownOpen(prevState => !prevState);

  }
  function selectValue (params, model)
  {
    onChange(model + params.substring(0,4))
    setValue(params.substring(0,4));
    set$Years(params.substring(0,4))

  }
  useEffect(() =>
  {
    return () =>
    {
      setValue("ปีจดทะเบียน")
    };
  }, [model]);
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
                model !== undefined && !null && model !== "---" ?
                  <Fragment>
                    {
                      data[model].map((item, i) =>
                      {
                        return (
                          <Fragment key={`Card-${i}`}>
                            <DropdownItem onClick={(e) => { selectValue(item, model) }}>
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