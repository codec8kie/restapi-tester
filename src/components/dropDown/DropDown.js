import React, { Component } from 'react';

import { Types, Default } from './DropDownTypes';

import { Wrapper, WrapperActive } from './DropDownStyle';

// 선택된 메뉴
const renderActiveDropDown = data => (
  <WrapperActive>
    <p className="text">{data}</p>
  </WrapperActive>
);

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      visible: false
    };
  }

  render() {
    const { index, visible } = this.state;
    const { data } = this.props;
    return <Wrapper>{renderActiveDropDown(data[index])}</Wrapper>;
  }
}

DropDown.propTypes = {
  ...Types
};

DropDown.defaultProps = {
  ...Default
};

export default DropDown;
