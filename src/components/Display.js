import React, { Component } from "react";
// import { Link } from "react-router";
import Nav from "./Nav";
// import Popup from "./Popup";

// import Footer from "./footer";
// import { isLoggedIn } from "../utils/AuthService";
import { CloudinaryContext, Video } from "cloudinary-react";
import axios from "axios";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      Modal: false,
      videos: []
    };
  }

  getVideos() {
    axios.get("./video.json").then(res => {
      console.log(res.data.resources);
      this.setState({ videos: res.data.resources.splice(0, 50) });
    });
  }

  componentDidMount() {
    this.getVideos();
  }
  componentWillUnmount() {
    localStorage.clear();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { videos } = this.state;

    return (
      <div>
        <Nav />
        <hr />
        <hr />

        <div className="col-sm-12">
          <CloudinaryContext cloudName="unicodeveloper">
            {videos.map((data, index) => (
              <div className="col-sm-4" key={index}>
                <div className="embed-responsive embed-responsive-4by3">
                  <Video
                    publicId={data.public_id}
                    width="300"
                    height="300"
                    poster={data.poster}
                    controls
                    onClick={this.togglePopup.bind(this)}
                  />
                </div>
                {/* <div> Created at {data.created_at} </div>
                 */}
                <h3 className="style-scope ytd-grid-video-renderer">
                  {data.description}
                </h3>

                {/* {this.state.showPopup ? (
                  <div>
                    <Popup closePopup={this.togglePopup.bind(this)} />
                  </div>
                ) : null} */}
              </div>
            ))}
          </CloudinaryContext>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default Display;
