import * as React from "react";

export default class App extends React.Component<{}> {
    interval: number;
    state: { count: number } = null;

    constructor(props: any) {
        super(props);
        this.state = { count: 0 };
    }

    //This state will be maintained during hot reloads
    componentWillMount() {
        this.interval = window.setInterval(() => { this.tick() }, 1000);
    }

    tick() {
        this.setState({ count: this.state.count + 5 })
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }


    render() {
        return (
            <div>
                <h2>Preserved state counter: {this.state.count} + 123 = {this.state.count + 123}</h2>
            </div>
        );
    }
}
