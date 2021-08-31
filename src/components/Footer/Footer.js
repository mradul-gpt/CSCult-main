import "./Footer.css";
import hexa from "./assets/greenhexa.png";
import insta from "./assets/ig.svg";
import linkedin from "./assets/linkedin.svg";
import youtube from "./assets/yt.svg";
import discord from "./assets/discord.svg";
import git from "./assets/git.svg";
import spotify from "./assets/spotify.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="cscult">
        <h1>
          <span>CS</span>Cult
        </h1>
        <div className="image">
          <img src={hexa} />
        </div>
      </div>
      <div className="main">
        <div className="explore">
          <ul>
            <h6>EXPLORE</h6>
            <br></br>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#community">Community</a>
            </li>
            <li>
              <a href="/#events">Events</a>
            </li>
            <li>
              <a href="/#products">Products</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <h6>SOCIAL MEDIA</h6>
          <br></br>
          <div className="first">
            <a target="_blank" href="https://www.instagram.com/cs.cult/">
              <img src={insta} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/cscult">
              <img id="linkedin" src={linkedin} />
            </a>
          </div>
          <div className="second">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCn2bhZWnwi51vGFVr3bqR8w"
            >
              <img id="youtube" src={youtube} />
            </a>
            <a target="_blank" href="https://discord.com/invite/8SxAWCPpDM">
              <img id="discord" src={discord} />
            </a>
          </div>
          <div className="third">
            <a target="_blank" href="https://github.com/CSCult">
              <img src={git} />
            </a>
            <a target="_blank" href="https://open.spotify.com/show/7cPdUTgXDhYvM26YrM3QV2">
              <img src={spotify} />
            </a>
          </div>
        </div>
        <div className="connect">
          <h6>CONNECT !</h6>
          <br></br>
          <div className="buttons">
            <a href="https://discord.gg/tbBvANUQYT" target="_blank">
              <button>DISCORD BRO</button>
            </a>
            <br></br>
            {/* React Router to About Section */}
            <a href="https://www.linkedin.com/company/cscult/about" target="_blank">
              <button>LET'S TALK</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
