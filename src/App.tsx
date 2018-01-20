import * as React from "react";

export default class App extends React.Component<{}> {
    interval: number;
    state: any = null;
    context: CanvasRenderingContext2D = null;

    constructor(props: any) {
        super(props);
        this.state = {
            count: 0,
            posx: 50,
            posy: 50
        };
    }

    //This state will be maintained during hot reloads
    componentWillMount() {
        this.interval = window.setInterval(() => { this.tick() }, 16);
    }

    componentDidMount() {
        var canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        var context = canvas.getContext("2d");
        this.context = context;
    }

    tick() {
        this.setState({
            count: (this.state.count + 1) % 300,
            posx: (this.state.posx + 1) % 300,
            posy: (this.state.posy + 0.25) % 200
        })

        if (this.context != null) {
            this.context.clearRect(0, 0, 500, 500);
            this.context.fillStyle = "green";
            this.context.fillRect(this.state.posx, this.state.posy, 40, 40);
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }


    render() {
        return (
            <div>
                <canvas id="gameCanvas" width="500" height="500"></canvas>
                <h2>Preserved state counter: {this.state.count} + 123 = {this.state.count + 123}</h2>
            </div>
        );
    }
}
