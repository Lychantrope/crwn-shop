import React from 'react';

import Directory from "../../components/directory/directory.component";

import './homepage.styles.scss';

class Homepage extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      didMount: false,
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({didMount: true})
    }, 90)
    
  }


  // console.log(props);
  render() {
    const didMount = this.state.didMount;

    return (

      <div className={`homepage comp-fade-in ${didMount && 'visible'}`}>
        <h1>Welcome to my Homepage</h1>
        <Directory />
      </div>
    )
  }
};


export default Homepage;