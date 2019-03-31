const Arms = props => {
  return (
    <React.Fragment>
      <label>
        Podaj rozpiętość ramion
        <input name="arms" type="number" />
      </label>
      <br />
    </React.Fragment>
  );
};

const Hight = props => {
  return (
    <React.Fragment>
      <label>
        Podaj wzrost
        <input name="hight" type="number" placeholder="np.175" />
      </label>
      <br />
    </React.Fragment>
  );
};
const Level = props => {
  return (
    <React.Fragment>
      <label>
        Podaj stopień zaawansowania
        <select name="level">
          <option value="1">Beginner</option>
          <option value="2">Medium</option>
          <option value="3">Expert</option>
        </select>
      </label>
      <br />
    </React.Fragment>
  );
};

const Sex = props => {
  return (
    <React.Fragment>
      <label>
        Podaj płeć
        {/* Tu ma być dopisany wybór M/K w select lub checkbox */}
      </label>
      <br />
    </React.Fragment>
  );
};

class InfoField extends React.Component {
  state = {
    level: "",
    hight: "",
    arms: "",
    sex: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Archery app</h1>
        <h2>Podaj dane</h2>
        <div>
          <Level value={this.state.level} onChange={this.handleChange} />
          <Hight value={this.state.hight} onChange={this.handleChange} />
          <Arms value={this.props.arms} onChange={this.handleChange} />
          <Sex value={this.props.sex} onChange={this.handleChange} />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<InfoField />, document.getElementById("root"));
