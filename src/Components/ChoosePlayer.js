import React, { Component } from 'react'

class ChoosePlayer extends Component {

    subitHandlerHere = (e) => {
        e.preventDefault();
        this.props.setPlayer(e.target.player.value);
    }

    render() {
        return (
            <form onSubmit={this.subitHandlerHere}>
                <label>
                    Player Hasan
                    <input type="radio" name='player' value="Hasan" />
                </label>
                <label>
                    Player Mahmud
                    <input type="radio" name='player' value="Mahmud" />
                </label>
                <button type="submit">Start</button>                
            </form>
        )
    }
}
export default ChoosePlayer;