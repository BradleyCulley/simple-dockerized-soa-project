import React from 'react';

class App extends React.Component<any, any> {
    componentDidMount(): void {
        fetch("http://localhost:8080/todo").then(response => response.text())
            .then(data => console.log(data));
    }

    render() {
        const {classes} = this.props;

        return (
            <div>Hello world</div>
        );
    }
}

export default App;
