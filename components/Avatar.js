import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}

class Avatar extends React.Component {
  state = {
    // Imagem Padrão - Pode subir qualquer imagem e colocar em qualquer servidor cloud
    photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: {
        "X-API-KEY": ["63158f6ecf6a157be7bdce3310b7f0"],
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ photo: response[0].photo });

        this.props.updateName(response[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
