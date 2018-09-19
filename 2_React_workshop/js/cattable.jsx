import React from 'react';
import CategoryRow from "./categoryrow.jsx";
import CatRow from "./catrow.jsx";

class CatTable extends React.Component {
    render() {
        const rows = [];
        var lastCategory = null; //tu będzie płeć
        this.props.kitties.forEach((kitty) => {
        if (kitty.category !== lastCategory) { //jeśli pojawia się nowa kategoria (płeć kociaka)
            rows.push(<CategoryRow category={kitty.category}  key= {kitty.category} />); //dodaj do tablicy rows komponent CatCategoryRow
        }
        switch (this.props.likesKids) {
            case true:
                if (kitty.likesKids && kitty.name.indexOf(this.props.filterText) !== -1 ) {
                    rows.push(<CatRow kitty={kitty} key={kitty.name} />); //dodaj do tablicy rows komponent CatRow (waruenk filtr dziecka i tekstu w name)
                }
                break;
            case false:
                if (kitty.name.indexOf(this.props.filterText) !== -1 ) {
                    rows.push(<CatRow kitty={kitty} key={kitty.name} />); //dodaj do tablicy rows komponent CatRow (waruenk filtr dziecka i tekstu w name)
                }
                break;
        }

        lastCategory = kitty.category; // resetowanie, żeby nie dublować kategorii
        });
        return <table>
                <thead>
                <tr>
                    <th>Name</th><th>Age</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>;
    }
}

export default CatTable;