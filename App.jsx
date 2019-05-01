class InfoField extends React.Component {
  state = {
    level: "",
    height: "",
    arms: "",
    sex: "",
    bowLength: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (this.state.height >= "152" && this.state.height < "165") {
      this.setState({
        bowLength: '60-64"'
      });
    } else if (this.state.height >= "165" && this.state.height < "170") {
      this.setState({
        bowLength: `65-66"`
      });
    } else if (this.state.height >= "170" && this.state.height < "175") {
      this.setState({
        bowLength: `67-68"`
      });
    } else if (this.height >= "175" && this.height <= "178") {
      this.setState({
        bowLength: `69-70"`
      });
    }
  };

  render() {
    const { bowLength, height } = this.state;
    return (
      <React.Fragment>
        <h1>Archery app</h1>
        <h2>Podaj dane</h2>
        <div>
          <label>
            Podaj rozpiętość ramion
            <input
              className="form__input"
              name="arms"
              type="number"
              placeholder="0 cm"
              min="0"
              max="200"
              value={this.props.arms}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Podaj wzrost
            <input
              className="form__input"
              name="height"
              type="number"
              placeholder="0cm"
              min="0"
              max="300"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Podaj stopień zaawansowania
            <select
              className="form__input"
              name="level"
              value={this.state.level}
              onChange={this.handleChange}
            >
              <option value="choose">Choose level</option>
              <option value="beginner">Beginner</option>
              <option value="medium">Medium</option>
              <option value="expert">Expert</option>
            </select>
          </label>
          <br />
          <label>
            Podaj płeć
            <select
              className="form__input"
              name="sex"
              value={this.state.sex}
              onChange={this.handleChange}
            >
              <option value="choose">Choose sex</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </label>
          <br />
          <h2 onChange={this.bowCalculate}>
            Twoje dane:
            {bowLength}
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<InfoField />, document.getElementById("root"));
