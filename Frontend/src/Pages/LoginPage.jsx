import { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import axios from "axios";
import { toast, Toaster } from 'sonner';
import { FinanceContext } from "../Contexts/FinanceContext.jsx";
import { Link } from "react-router-dom";
export default function LoginPage() {
    const { toggle, setToggle } = useContext(FinanceContext);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtpField, setShowOtpField] = useState(false);
    const [time, settime] = useState(0)
    const [Message, setMessage] = useState("")
    const PORT = 3070;


    const handleSendOtp = () => {
        const sec = 6;
        settime(sec);
        const click = (secounds) => {
            if (secounds > 0) {
                setTimeout(() => {
                    settime(secounds - 1)
                    click(secounds - 1)
                }, 1000);
            }
        }
        if (!email) {
            toast.warning("Please enter your email.", { style: { background: "#f79e39" } });
            click(sec);
        }
        else {
            toast.success("Sending OTP to your email", { style: { background: "#7af597" } });
            try {
                const response = axios.post(`http://localhost:${PORT}/emailcheck`, {
                    email: email
                })
                const data = response.data;
                // console.log('Email has been send.', data)
            }
            catch (error) {
                console.log(`Something error in the Verification ${error}`)
            }
            click(sec);
        }
        setShowOtpField(true);
    };
    const handleVerify = async () => {
        if (!otp) {
            toast.warning("Please enter the OTP.", { style: { background: "#f79e39" } });
            return;
        }
        try {
            const response = await axios.post(`http://localhost:${PORT}/verifyotp`, {
                otp,
            })
            const data = response.data;
            toast.success('OTP has been send.', { style: { background: "#7af597" } })
            if (data.success) {
                setMessage("OTP Verified")
            }
            else {
                setMessage("OTP Verified Failed")
            }
            console.log(data);
        }
        catch (error) {
            console.log(`Something error in the Verification ${error}`)
        }
        toast.success(Message, { style: { background: "#7af597" } })
    }
    return (<>
        <section>
            <div className={`static w-full  ${toggle == true ? "bg-zinc-700 text-white" : "bg-zinc-100 text-black"} font-light gap-2 h-auto grid justify-center p-20`}>
                <div className=' shadow-gray-400 bg-zinc-100 shadow-md grid rounded-2xl w-150 h-auto p-10 items-center justify-center'>
                    <div className='grid grid-cols-1 w-full h-fit p-2 text-center'>
                        <span className='text-3xl font-semibold text-[#1C6C93] m-2 tracking-tight inline-block'><strong className='text-[#2D4E63] mr-2 pl-2'>Signup</strong>to EXPENSIO</span>
                        <span className='text-black tracking-tight inline-block'>Have an account?<strong className='mr-1 pl-1 underline cursor-pointer' ><Link to="/register" className='visited:text-blue-700 active:text-green-300'>SignUp here!</Link></strong></span>
                    </div>
                    <form className="flex flex-col w-full max-w-md p-5 rounded-2xl gap-4">
                        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                            Email Verification
                        </h1>

                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                onClick={handleSendOtp}
                                className={`w-full rounded-lg active:scale-98 duration-200 bg-blue-500 py-3 font-medium text-white transition cursor-pointer hover:bg-blue-700}`}
                                disabled={time > 0}
                            >
                                {time > 0 ? `Resend OTP... ${time}` : "send OTP"}
                            </button>
                            {showOtpField && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />

                                    <button
                                        onClick={handleVerify}
                                        className={`w-full rounded-lg active:scale-98 duration-200 bg-green-500 py-3 font-medium text-white transition cursor-pointer hover:bg-green-700}`}
                                    >
                                        Verify
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                    <div className='gap-5 p-5 grid justify-left items-left text-center'>
                        <div className='text-xs text-zinc-400'>...Sign up with other</div>
                        <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with google <p className='p-1'><FontAwesomeIcon icon={faGoogle} className='text-xs' /></p></div>
                        <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with facebook <p className='p-1'><FontAwesomeIcon icon={faFacebookF} className='text-xs' /></p></div>
                        <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with Gthub <p className='p-1'><FontAwesomeIcon icon={faGithub} className='text-xs' /></p></div>
                    </div>
                </div>
                <div className='w-100 h-auto text-[15spx] justify-center gap-1 p-1 font-medium'>
                    <span>By using Spendee you agree with Spendee’s</span>
                    <a className={`underline underline-offset-1 ${toggle == true ? "text-red-400 hover:text-red-500" : "text-gray-900"} cursor-pointer hover:no-underline hover:text-gray-500`}>Terms of Use</a>
                    <span>, and</span>
                    <a className={`underline underline-offset-1 ${toggle == true ? "text-red-400 hover:text-red-500" : "text-gray-900"} cursor-pointer hover:no-underline hover:text-gray-500`}> Privacy Policy</a>
                    <span>Pre-contractual Terms.</span>
                </div>

            </div>
        </section>
    </>);
}
