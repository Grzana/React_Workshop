import React from 'react';

class SearchBar extends React.Component {
    sendTextInfo = (e) => {
      if (typeof this.props.onTextChange === 'function') {
          this.props.onTextChange(e.target.value)
      }
    };
    sendCheckInfo = (e) => {
        if (typeof this.props.onCheckChange === 'function') {
            this.props.onCheckChange(e.target.checked);
            console.log(e.target.checked);
        }
    };
    render() {
        return <form>
            <input onChange={this.sendTextInfo} value={this.props.filterText}
                   type="text" placeholder="Search..." />
            <p><input onChange={this.sendCheckInfo} checked={this.props.likesKids}
                      type="checkbox" /> Only show kitties that like kids</p>
        </form>;
    }
}

export default SearchBar;