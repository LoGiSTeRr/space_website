import React from 'react';
import {FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-center">
                        <div className="font-bold text-[16px]">Community</div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube/>
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaGithub/>
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaDiscord/>
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </div>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-center">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram/>
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaTwitter/>
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaLinkedin/>
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </div>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-center">
                        <div className="font-bold text-[16px]">About</div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </div>
                        <div className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">plumyuzbor@gmail.com</span>
                        </div>
                    </div>

                    <div className="mb-[20px] text-[15px] text-center">
                        &copy; WebChain Dev 2023 Inc. All Rights Reserved.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;