import github_logo from "../assets/images/github.png";
import link_icon from "../assets/images/link.png";

import IconButtonText from "./Inputs/IconButtonText";
import Separator from "./Separator";

import "./Footer.css";
import Horizontal from "../layouts/Horizontal";

function Footer() {
    return (
        <div className="footer" >

            <Horizontal>
                <IconButtonText
                    icon={github_logo}
                    href="https://github.com/pedroditersimon/todo-tasks-frontend"
                    text="GitHub"
                />
                <IconButtonText
                    icon={link_icon}
                    href="https://pedroditersimon.github.io/"
                    text="Portfolio"
                />
            </Horizontal>

        </div>
    );
}

export default Footer;