import React from "react";
import { NavBar } from "../NavBar";
import ReactDOM from "react-dom"

class Bild extends React.Component {
    render() {
        return (
            <div>
                <img src={this.image} alt={this.titel} />
            </div>
        )
    }
}

class BuchProp extends React.Component {
    render() {
        return (
            <div className="buchProp">
                <div className="buchProp-label">{this.label}</div>
                <div className="buchProp-value">{this.value}</div>
            </div>
        )
    }
}

class Preis extends React.Component {
    render() {
        return (
            <div className="artikel-preis">
                {this.value}
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {

        let contactClass;
        let contactText;

        if (this.contact.includes('@')) {
            contactClass = "contact-mail"
            contactText = "Schreibe eine E-Mail an: " + contact
        } else {
            contactClass = "contact-whatsapp";
            contactText = "Schreibe " + contact + "auf WhatsApp"
        }

        return (
            <div>
                <div className={contactClass}>
                    {/* // place holder für icon */}
                    {contactText}
                </div>
            </div>
        )
    }
}

class ArtikelInfo extends React.Component {
    render() {
        artikelID = this.articleID
        return (
            <div>
                {/* // hier müssen die daten von der api abgefragt werden, in abhängigkeit von der articleID */}
                <Bild image={null} titel={null} />
                <Preis value={null} />
                <div>
                    <BuchProp label="Titel" value={null} />
                    <BuchProp label="ISBN" value={null} />
                    <BuchProp label="Zustand" value={null} />
                    <BuchProp label="Sprache/Fach" value={null} />
                    {/* <BuchProp label="" value={null} /> */}
                </div>
            </div>
        )
    }
}

class ArtikelSeite extends React.Component {
    render() {
        return (
            <div>
                <NavBar searchTerm={null} />
                <ArtikelInfo articleID={null} />
            </div>
        )
    }
}

ReactDOM.render(
    <ArtikelSeite />,
    document.getElementById('root')
)