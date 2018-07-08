import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){//will be executing all the time whenver we call this class
    super(props); //will be needing this to access this in constructor.
    this.state = { searchValue:'' };
  }

  //onChangeInput(e){ //not working need to check later
    //this.setState({
      //this.searchValue: e.target.value
  //  })
  //}



  render(){
    return (
      <div>
        <input value = {this.state.searchValue} onChange={(e) =>{
          this.setState({searchValue:e.target.value});
          //console.log(e.target.value);
          console.log('searchValue is', this.state.searchValue);
          this.props.updatedText(this.state.searchValue);
        }} />
        <div> {this.state.searchValue} </div>
      </div>
    );
  }

}

export default SearchBar;
