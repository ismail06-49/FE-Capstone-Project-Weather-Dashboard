import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContetxt";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const { dark } = useContext(ThemeContext);

    return (
        <div className={` ${dark ? 'dark-footer' : 'light-footer'} p-4`}>
            <hr className={`${dark ? 'dark-break' : 'light-break'} w-4/5 mx-auto lg:my-8`} />
            <div className="flex flex-col mt-4 sm:w-3/4 sm:mx-auto sm:flex-row justify-between items-center">
                <div className="text-center sm:text-left">
                    © 2024 <a href="https://github.com/ismail06-49" target="_blank" className="font-semibold hover:underline">Ismail Haddad</a>. All Rights Reserved.
                </div>
                <ul className="flex space-x-4 mt-2 sm:mt-0">
                    <li>
                        <a href="https://github.com/ismail06-49" target="_blank" className="text-gray-600 hover:text-blue-500">
                            <FaGithubSquare size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/ismail.hadda.50" target="_blank" className="text-gray-600 hover:text-blue-500">
                            <FaFacebookSquare size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ismailhaddad/" target="_blank" className="text-gray-600 hover:text-blue-500">
                            <FaLinkedin size={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}