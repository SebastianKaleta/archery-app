class InfoField extends React.Component {
  state = {
    level: "",
    height: "",
    armsLength: "",
    pullForce: "",
    bowstring: "",
    arrow: "",
    sex: "",
    maleStats: [],
    femaleStats: [],
    bowLength: "",
    info: "",
    age: ""
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
  handleChangeAge = e => {
    this.setState({
      age: e.target.value
    });

    if (e.target.value === "8-12") {
      this.setState({
        infoAge: "/8-12 lat – 8 kg/"
      });
    } else if (e.target.value === "12-15") {
      this.setState({
        infoAge: "12-15 lat – 10-14 kg"
      });
    } else if (e.target.value === "15-18") {
      this.setState({
        infoAge: "15-18 lat – 14-16kg"
      });
    } else if (e.target.value === "18>") {
      this.setState({
        infoAge: "powyżej 18 lat – 16kg w zwyż"
      });
    }
  };
  handleChangeSex = e => {
    this.setState({
      sex: e.target.value
    });
    if (e.target.value === "male" && age !== "8-12") {
      this.setState({
        maleStats: [
          "8-12 lat – 8-10 kg, ",
          "12-15 lat – 13-15kg, ",
          "15-18 lat – 16-18kg"
        ],
        femaleStats: []
      });
    } else if (e.target.value === "male" && age === "8-12") {
      this.setState({
        maleStats: ["8-12 lat – 8-10 kg !!!! "],
        femaleStats: []
      });
    } else if (e.target.value === "female") {
      this.setState({
        maleStats: [],
        femaleStats: [
          "8-12 lat – 8 kg, ",
          "12-15 lat – 10-14 kg, ",
          "15-18 lat – 14-16kg"
        ]
      });
    } else {
      this.setState({
        maleStats: [],
        femaleStats: []
      });
    }
  };
  handleChangeLvl = e => {
    this.setState({
      level: e.target.value
    });

    if (e.target.value === "beginner") {
      this.setState({
        info:
          "Jesteś na początku swojej drogi. Nie zaleca się przeceniania swoich możliwości. Dobierz łuk słabszy, który pozwoli ci ćwiczyć celność i technikę i nie narazi na kontuzje. To bardzo ważne!"
      });
    } else if (e.target.value === "medium") {
      this.setState({
        info:
          "Jesteś na półmetku, sporo już umiesz, ale musisz się douczyć. Wiesz już, jak wazne jest dobranie odpowiedniej siły i rozmiaru łuku. Podpowiedzi w programie są znikome. Uważaj i miłej zabawy ;)"
      });
    } else if (e.target.value === "expert") {
      this.setState({
        info:
          "Wyszkolony łucznik, a może nawet mistrz? Jesteśmy zaskoczeni oraz zaszczyceni, że taka osoba nas odwiedza. Podpowiedzi i ciekawostki są dla ciebie wyłączone, najprawdopodobniej wiesz więcej niż my. Ta aplikacja to dla ciebie tylko ułatwienie by nie pamiętać rozmiarów."
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
            Podaj wiek
            <select
              className="form__input"
              name="level"
              value={this.state.age}
              onChange={this.handleChangeAge}
            >
              <option value="chooseAge">Określ przedział wiekowy</option>
              <option value="8-12">8-12</option>
              <option value="12-15">12-15</option>
              <option value="15-18">15-18</option>
              <option value="18>">18 i więcej</option>
            </select>
          </label>
          <br />
          <label>
            Podaj stopień zaawansowania
            <select
              className="form__input"
              name="level"
              value={this.state.level}
              onChange={this.handleChangeLvl}
            >
              <option value="choose">Wybierz swój poziom zaawansowania</option>
              <option value="beginner">Dopiero zaczynam</option>
              <option value="medium">Strzelam dłuższy czas</option>
              <option value="expert">
                Długo strzelam oraz posiadam duże doświadczenie
              </option>
            </select>
          </label>

          <br />
          <label>
            Podaj płeć
            <select
              className="form__input"
              name="sex"
              value={this.state.sex}
              onChange={this.handleChangeSex}
            >
              <option value="choose">Wybierz płeć</option>
              <option value="male">męska</option>
              <option value="female">żeńska</option>
            </select>
          </label>
          <br />
          <h2>Twoje dane:</h2>
          <p onChange={this.bowCalculate}>Długość łuku: {bowLength}</p>
          <p>Siła naciągu: {pullForce}</p>
          <p> Liczba nitek w cięciwie powinna wynosić: {bowstring}</p>
          <p>Długość strzały: {arrow}</p>
          {/* ---------------------------------------------------- */}
          {/* płeć i sugestie mają być w osobnym div jako informacja-narazie sprawdzenie */}
          <p>
            Orientacyjne siły naciągu według płci i wieku:
            <br />
            {this.state.maleStats}
            {this.state.femaleStats}
          </p>
          <p>Zalecenia według wieku: {this.state.infoAge}</p>
          {/* Poziom narazie bez znaczenia */}
          <p>Level: {this.state.info}</p>
          {/* ----------------------------------------------------------- */}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<InfoField />, document.getElementById("root"));
