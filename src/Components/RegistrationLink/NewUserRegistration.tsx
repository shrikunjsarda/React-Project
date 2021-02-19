import React from 'react';
import RegistrationLinkStyle from './RegistrationLink';


interface Props {
    name: string;
    linkText: string;
}


class NewUserRegistration extends React.Component<Props> {
    render() {
        return (
            <p> {this.props.name} <RegistrationLinkStyle> {this.props.linkText}</RegistrationLinkStyle></p>
            
        );
    }
}

export default NewUserRegistration;