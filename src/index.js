import React, {Component} from 'react'; // this manages the components and there flow
import ReactDom from 'react-dom'; //this is responsible for rendering components output to the DOM.
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search'; // will be a function
import VideoList from './components/videoList';
import Player from './components/player'

const API_KEY = 'AIzaSyAs5EQVJLJRFeaZi3RkJt8Ylr3oM4bYmls';

/*const App = () => {      // this is the function component and dont have state concept
  return <div> hello world </div>;
}*/

class App extends Component { //this is a class component
  constructor(props){
    super(props);
    this.state = { videoData:[], selectedVideo:null };

    //this.searchBarText('america');

  }


  searchBarText(searchValue){
    //this is not instance request, this will be a network request, it will take sometime to process the data
    YTSearch({key:API_KEY, searchValue: searchValue}, data => {
      this.setState({
        videoData:data,
        selectedVideo:data[0]
      });
      console.log('data for searchValue '+ searchValue + " is ", data);
    })

  }

  render(){
    return(
      <div>
      <SearchBar updatedText = {(searchValue) => {
        this.searchBarText(searchValue);
        console.log('In searchBar', searchValue);
      }}/>
      <Player viData = {this.state.selectedVideo}/>
      <VideoList
      vData = {this.state.videoData}
      onVideoSelect = {(selectedVideo)=>this.setState({selectedVideo:selectedVideo})}
      />
      </div>
    );
  }
}


//<App /> is the instance of the component App or class component App, ReactDom gets the output of the
//component and renders to the DOM.
ReactDom.render(<App />, document.querySelector('.container'));
