import React from 'react';
import ReactDOM from 'react-dom';
interface Props {
    name: string;
}

class Heading extends React.Component<Props> {
    render() {
        return (
            <h2> {this.props.name} </h2>
        );
    }
}

export default Heading;