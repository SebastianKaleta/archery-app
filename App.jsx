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
          <label>
            Podaj rozpiętość ramion
        <input className="form__input" name="arms" type="number" placeholder="0" min="0" max="200" value={this.props.arms} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Podaj wzrost
        <input className="form__input" name="hight" type="number" placeholder="0" min="0" max="300" value={this.state.hight} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Podaj stopień zaawansowania
        <select className="form__input" name="level" value={this.state.level} onChange={this.handleChange}>
              <option value="choose">Choose level</option>
              <option value="beginner">Beginner</option>
              <option value="medium">Medium</option>
              <option value="expert">Expert</option>
            </select>
          </label>
          <br />
          <label>
            Podaj płeć

            <select className="form__input" name="sex" value={this.state.sex} onChange={this.handleChange}>
              <option value="choose" >Choose sex</option>
              <option value="male" >male</option>
              <option value="female" >female</option>
            </select>
            {/* Tu ma być dopisany wybór M/K w select lub checkbox */}
          </label>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<InfoField />, document.getElementById("root"));
