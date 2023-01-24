import React from "react";
import logo from "./logo.svg"

class SearchBar extends React.Component {

    render(){
        return (
            <div className="searchBar">
                <input placeholder="Suche nach Titel oder ISBN" value={this.term} />
            </div>
        )
    }
}

class Logo extends React.Component {
    render(){
        return(
            <div className="navBar-logo">
                <img src={logo} alt="Bookshelf logo"/>
            </div>
        )
    }
}






export class NavBar extends React.Component {
    render(){
        return(
            <div className="navBar">
                <Logo />
                <SearchBar term={this.searchTerm} />
            </div>
        )
    }
}