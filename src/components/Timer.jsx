export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: {},
            breakRemainingSeconds: 3
        };
    }

    countDown = () => {
        setInterval(() => {
            this.setState({ breakRemainingSeconds: this.state.breakRemainingSeconds - 1 })
            if (this.state.breakRemainingSeconds == 0) {
                this.props.history.push("/result")
            }
        }, 1000)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.countDown}>START</button>
                {this.state.breakRemainingSeconds}
            </div>
        );
    }
}

