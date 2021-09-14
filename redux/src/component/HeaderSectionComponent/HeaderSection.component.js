import React from "react";
import PlayButtonCustom from "../CustomButton/playCustomButton/PlayCustomButton.component";
import "./HeaderSection.style.css";

class HeaderSectionComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      backgroundUrl: [
        {
          url: "https://images7.alphacoders.com/511/511221.jpg",
          title: "IRON MAN",
          linkUrl: "play",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div
          className="Header"
          style={{
            backgroundImage: `url(${this.state.backgroundUrl[0].url})`,
          }}
        >
          <div className="HeaderContent">
            <div className="container">
              <h1>{this.state.backgroundUrl[0].title}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled
              </p>

              <PlayButtonCustom link={this.state.backgroundUrl[0].linkUrl}>
                <i class="fas fa-play"></i> Play
              </PlayButtonCustom>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderSectionComponent;
