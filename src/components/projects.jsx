import React from "react";
import "./style.css";

const Projects = () => {
  return (
    <>
      <header>
        <div className="content-fit">
          <div className="logo">LunDev</div>
          <nav>
            <ul>
              <li>Contacts</li>
              <li>Category</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="section" id="banner">
        <div className="content-fit">
          <div className="title" data-before="WEBSITEDESIGN">3D ANIMATION</div>
        </div>
        {/* <img src="img/flower.png" className="decorate" alt="" style={{ width: "50vw", bottom: 0, right: 0 }} />
        <img src="img/leaf.png" className="decorate" alt="" style={{ width: "30vw", bottom: 0, left: 0 }} /> */}
        <p>Images are currently unavailable.</p>
      </div>

      <div className="section" id="intro">
        <div className="content-fit">
          <div className="number">01</div>
          <div className="des">
            <div className="title">3D animation design for website</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </div>

      <div className="section" id="description">
        <div className="content-fit">
          <div className="number">02</div>
          <div className="des">
            <div className="title">LUNDEV</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
          </div>
        </div>
        {/* <img src="img/leaf1.png" className="decorate" alt="" style={{ width: "70vw", bottom: 0, right: 0, zIndex: 101 }} /> */}
      </div>

      <div className="section" id="contact">
        <div className="content-fit">
          <div className="number">03</div>
          <div className="des">
            <div className="title">CONTACT</div>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>test@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>+841.231.235</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>lundevweb.com</td>
                </tr>
                <tr>
                  <td>Youtube</td>
                  <td>@lundeveloper</td>
                </tr>
              </tbody>
            </table>
            <div className="sign">Lundev</div>
          </div>
        </div>
      </div>

      <div id="container3D"></div>
    </>
  );
};

export default Projects;
