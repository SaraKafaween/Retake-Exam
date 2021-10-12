import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Login from './Login';
import MyFavorites from './components/MyFavorites';
import AllDataAPI from './components/AllDataAPI';
import FavModal from './components/FavModal';
import axios from 'axios';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
constructor(props){
  super(props);
  data:[];
  favs:[];
  title: "";
  image:"";
  showModal : false;
  item: "";

componentDidMount() 
axios.get(`${process.env.BACKEND_PORT}/data`).then(res =>{
data : res.body
})
axios.get(`${process.env.BACKEND_PORT}/favs`).then(res =>{
  favs : res.body
  })
 

const addToFav=() =>{
axios.post(`${process.env.BACKEND_PORT}/creat-fav`).then(res =>{
  favs:res.body
}
)}

const UpdateFav =() =>{
  let UpdatedItems ={
    title: title,
    Image: Image
  }
  
  
  axios.put(`${process.env.BACKEND_PORT}/update-fav` , UpdatedItems).then(res =>{
    favs : res.body
  })
}

const DeleteFav = () =>{
  axios.delete(`${process.env.BACKEND_PORT}/delete-fav`).then(res =>{
    favs: res.body
  })
}

const handleTitle = (e) =>{
  this.setState=
title= e.target.value
}

const handleImage =(e) =>{
  this.setState={
  Image= e.target.value
}}

const handleModalClose = () =>{
  this.setState=
  showModal=false
}

const handleModalOpen = () =>{
  this.setState=
  showModal= true
}


}
  render() {
    return(
      <>
        <Router>
            <Header />
            <Switch>

              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? <MyFavorites /> : <Login />}
              </Route>

              <Route path="/profile">
                <Profile/>
              </Route>

              <Route path="/getAPIData">
                <AllDataAPI data={this.state.data} addToFav={this.addToFav}/>
              </Route>

              <Route path="/getFavData">
                <MyFavorites favs={this.state.favs} handleModalOpen={this.handleModalOpen} />
                
                <FavModal 
                title={this.state.title}
                handleTitle={this.handleTitle}
                image={this.state.image}
                handleImage={this.handleImage}
                showModal={this.showModal}
                handleModalClose={this.handleModalClose}
                UpdateFav={this.UpdateFav}
                DeleteFav={this.DeleteFav}

                />
              </Route>
              
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

