import React from 'react';
import $ from 'jquery';

class BottomBox extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      active: 'content-stdin',
    };

    this.onClickTabNav = this.onClickTabNav.bind(this);
    this.onChangeSTDIN = this.onChangeSTDIN.bind(this);
  }

  onClickTabNav(e)
  {
    $('.tab-content > *').hide();
    switch(e.target.name)
    {
      case 'tab-stdin':
        $('.content-stdin').show();
        break;
      case 'tab-debug':
        $('.content-debug').show();
    }
  }

  onChangeSTDIN(e)
  {
    this.props.onChangeSTDIN(e);
  }

  render()
  {
    return (
      <div className="bottom-box">
        <ul className="tab-nav">
          <li><a name="tab-stdin" onClick={this.onClickTabNav}>STDIN</a></li>
          <li><a name="tab-debug" onClick={this.onClickTabNav}>Result</a></li>
        </ul>
        <div className="tab-content">
          <div className="content-stdin" style={{display: 'block'}}>
            <textarea name="stdin" value={this.props.stdin} onChange={this.onChangeSTDIN} />
          </div>
          <pre className="content-debug" style={{display: 'none'}}>
            {this.props.debug}
          </pre>
        </div>
      </div>
    );
  }
}

export default BottomBox;
