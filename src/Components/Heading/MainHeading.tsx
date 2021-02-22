import React from 'react';
interface Props {
    name: string;
}

class MainHeading extends React.Component<Props> {
    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}

export default MainHeading;