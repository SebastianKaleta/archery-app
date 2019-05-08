class InfoField extends React.Component {
  state = {
    level: "",
    height: "",
    armsLength: "",
    pullForce: "",
    bowstring: "",
    arrow: "",
    sex: "",
    bowLength: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.value < 152) {
      this.setState({
        bowLength: "brak danych",
        pullForce: "brak danych",
        bowstring: "brak danych"
      });
    }
    if (e.target.value >= 152 && e.target.value <= 165) {
      this.setState({
        bowLength: `60-64"`,
        pullForce: `24 LBS i mniej`,
        bowstring: `8 do 20" - 10 powyżej 20"`
      });
    } else if (e.target.value > 165 && e.target.value <= 170) {
      this.setState({
        bowLength: `65-66"`,
        pullForce: `25-26 LBS`,
        bowstring: "10 dla łuków między 20 a 35 LBS"
      });
    } else if (e.target.value > "170" && e.target.value <= "175") {
      this.setState({
        bowLength: `67-68"`,
        pullForce: `27-28 LBS`,
        bowstring: "10 dla łuków między 20 a 35 LBS"
      });
    } else if (e.target.value > "175" && e.target.value <= "178") {
      this.setState({
        bowLength: `69-70"`,
        pullForce: `29 LBS i więcej`,
        bowstring: `* 10 dla łuków między 20 a 35 LBS \n* 12 dla łuków między 35 a 45 LBS \n* 14 dla łuków między 45 a 55 LBS`
      });
    }
  };

  handleLengthArrowAndLengthTension = e => {
    this.setState({
      armsLength: e.target.value
    });
    if (e.target.value < 61) {
      this.setState({
        arrow: "brak danych"
      });
    } else if (e.target.value >= 61 && e.target.value < 63.5) {
      this.setState({
        arrow: "63cm"
      });
    } else if (e.target.value >= 63.5 && e.target.value <= 66) {
      this.setState({
        arrow: "65-68cm"
      });
    } else if (e.target.value >= 68.6 && e.target.value <= 71) {
      this.setState({
        arrow: "71-73cm"
      });
    } else if (e.target.value >= 73.7) {
      this.setState({
        arrow: "76cm i więcej"
      });
    }
  };
  render() {
    const { bowLength, pullForce, bowstring, arrow } = this.state;
    return (
      <React.Fragment>
        <h1>Archery app</h1>
        <h2>Podaj dane</h2>
        <div>
          <label>
            Podaj długość naciągu
            <input
              className="form__input"
              name="arms"
              type="number"
              placeholder="0 cm"
              min="0"
              max="200"
              value={this.state.armsLength}
              onChange={this.handleLengthArrowAndLengthTension}
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
          <h2>Twoje dane:</h2>
          <p onChange={this.bowCalculate}>Długość łuku: {bowLength}</p>
          <p>Siła naciągu: {pullForce}</p>
          <p> Liczba nitek w cięciwie powinna wynosić: {bowstring}</p>
          <p>Długość strzały: {arrow}</p>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<InfoField />, document.getElementById("root"));
