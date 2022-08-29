import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" class="depth" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name=")" class="depth" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C" class="depth" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="CE" class="op" onClick={e => this.props.onClick(e.target.name)}>DEL</button><br/>


                
                <button name="7" class="depth" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" class="depth" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" class="depth" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" class="op" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button name="4" class="depth" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" class="depth" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" class="depth" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" class="op" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="1" class="depth" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" class="depth" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" class="depth" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" class="op" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button name="." class="depth" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" class="zero" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="/" class="op" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>

                <button name="=" class="result" onClick={e => this.props.onClick(e.target.name)}>=</button>
            </div>
        );
    }
}


export default KeyPadComponent;