import React, { Component } from 'react';

import _Fetch from './commons/fetch';

// import DropDown from './components/dropDown/DropDown';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'test'
    };

    this.select = '';
    this.input = '';
    this.textarea = '';
  }

  handleSubmit = async () => {
    const select = this.select.value;
    const input = this.input.value;
    const textarea = this.textarea.value;

    const api = {
      method: select,
      url: input
    };

    try {
      const res = await _Fetch(api, '');
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {/* <DropDown data={['GET', 'POST', 'PUT', 'DELETE']} /> */}
        <select
          ref={ref => {
            this.select = ref;
          }}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <input
          type="text"
          placeholder="path"
          ref={ref => {
            this.input = ref;
          }}
        />

        <div>
          <textarea
            placeholder="data"
            ref={ref => {
              this.textarea = ref;
            }}
          />
        </div>

        <button type="button" onClick={this.handleSubmit}>
          Send
        </button>
      </div>
    );
  }
}

export default App;
