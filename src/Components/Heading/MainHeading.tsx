import React from 'react';

import {H1} from './HeadingStyle';
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