import React, { useLayoutEffect } from 'react';

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            index: 0
        }
    }

    updateIndex (e) {
        // debugger
        this.setState ({
            index: e.currentTarget.getAttribute("index")
        });
        e.currentTarget.style.borderBottom = "none";
    }

    render () {
        return (
            <div>
                <h1>Tabs</h1>
                <div className="bigTab">
                    <ul className="tabs">
                        {this.props.titles.map ((title, idx) => {
                            return <li className="tab" key={idx} index={idx} onClick={this.updateIndex.bind(this)} ><h1>{title.title}</h1></li>
                        })}
                    </ul>
                    <div className="content">
                        <article  >{this.props.titles[this.state.index].content}</article>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tabs;