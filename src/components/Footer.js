import logo2 from '../../public/images/LOGO 2.png';
import app_store_badges from '../../public/images/app_store_badges.png';
import chef_img from '../../public/images/Cartoon-character-Little-chef-Illustration-on-transparent-background-PNG.png';


import { ImFacebook2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaSnapchatGhost } from "react-icons/fa";

function Footer() {
    return (
        <>
        <div className="p-5 flex justify-evenly bg-zinc-100">
            <div className="flex flex-col gap-4 items-start justify-center w-64">
                <img src={logo2} alt="" />
                <img src={app_store_badges} alt="" />
                <div className="text-sm">Company # 490039-445, Registered withHouse of companies.</div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-center w-64">
                <div>
                    <div className="font-bold">Get Exclusive Deals in your Inbox</div>
                    <div className="flex bg-white rounded-full">
                        <input className="rounded-l-full px-4 py-2 text-sm outline-none" placeholder="youremail@gmail.com" type="email" />
                        <button className="bg-zinc-400 font-semibold text-sm rounded-full py-2 px-4">Subscribe</button>
                    </div>
                </div>
                <div className="font-semibold text-xs">we wont spam, read our <span className="underline underline-offset-1 decoration-black">email policy</span></div>
                <div className="flex gap-4 items-center justify-center text-3xl">
                    <ImFacebook2 />
                    <FaSnapchatGhost />
                    <TiSocialInstagram />
                    <TiSocialTwitter />
                </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-center text-sm w-64">
                <div className="underline underline-offset-1">Terms and conditions</div>
                <div className="underline underline-offset-1">Privacy</div>
                <div className="underline underline-offset-1">Cookies</div>
                <div className="underline underline-offset-1">Modern Slavery Statement</div>
            </div>

            <div className="flex flex-col gap-4 items-start justify-center text-sm w-64">
                Enjoy a seamless food ordering experience with fresh, delicious meals delivered straight to your door. Choose from a wide variety of cuisines to satisfy every craving. Contact our support team for assistance. © 2024 Foodies. All rights reserved. Eat well, live well! ❤️💕
            </div>
            <div className="max-h-48 max-w-40 ">
                <img className="h-full" src={chef_img} alt="" />
            </div>
        </div>
        <div className="h-10 text-zinc-100 flex items-center justify-center bg-black w-full"> Made by Akash Singh Patel 👋 © 2024 Foodies. All rights reserved.</div>
        </>
    )
}

export default Footer