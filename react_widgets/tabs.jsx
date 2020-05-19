import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props); // this.props.arr => arr
    this.state = {
      selectedTabIdx: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  };

  selectTab(event) {
    debugger;
    this.setState({ selectedTabIdx: event.currentTarget.id })
  }

  render() {
    const tabTitles = this.props.arr.map((el, i) => {
      return (
        <li key={i} id={i} onClick={this.selectTab}>
          <h1>{el.title}</h1>
        </li>
      );
    });

    return (
      <div className="tabsContainer">
        <ul className="headers">
          {tabTitles}
        </ul>
        <article className="content">
          {this.props.arr[this.state.selectedTabIdx].content}
        </article>
      </div>
    );
  }
};

export default Tabs;