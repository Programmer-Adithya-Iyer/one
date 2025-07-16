import React from "react";
import "./App.css";

import {
	facebook,
	github,
	instagram,
	linkedin,
	mail,
	twitter,
	profile,
} from "./assets/Export";

function App() {
	return (
		<>
			<div className="profile">
				<div className="profile-img"></div>

				<div className="info">
					<h1>Ashley</h1>
					<h2>Frontend Developer</h2>
					<p>work.ashley@gmail.com</p>

					<div className="action-buttons">
						<div className="action" id="mail">
							<img src={mail} alt="Mail icon" />
							<span>Email</span>
						</div>
						<div className="action" id="linkedin">
							<img src={linkedin} alt="Linkedin icon" />
							<span>Linkedin</span>
						</div>
					</div>
				</div>

				<div className="details">
					<h1>About</h1>
					<p>
						I am a frontend developer with a particular interest in making
						things simple and automating daily tasks. I try to keep up with
						security and best practices, and am always looking for new things to
						learn.
					</p>

					<h1>Interests</h1>
					<p>
						Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
						Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
					</p>
				</div>

				<div className="contact">
					<ul>
						<li>
							<img src={twitter} alt="Twitter Icon" />
						</li>
						<li>
							<img src={facebook} alt="Facebook Icon" />
						</li>
						<li>
							<img src={instagram} alt="Instagram Icon" />
						</li>
						<li>
							<img src={github} alt="Github Icon" />
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
