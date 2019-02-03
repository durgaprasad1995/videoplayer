import React, { Component } from "react";
// import { Link } from "react-router";
import Nav from "./Nav";
// import Footer from "./footer";
// import { isLoggedIn } from "../utils/AuthService";
import { CloudinaryContext, Transformation, Video } from "cloudinary-react";
import axios from "axios";

class Display extends Component {
  state = { videos: [] };

  getVideos() {
    axios.get("./video.json").then(res => {
      console.log(res.data.resources);
      this.setState({ videos: res.data.resources.splice(0, 12) });
    });
  }

  componentDidMount() {
    this.getVideos();
  }
  componentWillUnmount() {
    localStorage.clear();
  }
  render() {
    const { videos } = this.state;

    return (
      <div>
        <Nav />

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
                    poster="https://addpipe.com/sample_vid/poster.png"
                    controls
                  />
                </div>
                {/* <div> Created at {data.created_at} </div>
                 */}
                <h3 className="style-scope ytd-grid-video-renderer">Test</h3>
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
