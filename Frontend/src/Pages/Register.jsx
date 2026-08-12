
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { FinanceContext } from '../Contexts/FinanceContext';
const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
    const { toggle, setToggle } = useContext(FinanceContext);
    const { Username, setUsername } = useContext(FinanceContext);
    const navigate = useNavigate()
    const [time, settime] = useState(0)
    const [verify, setverify] = useState(false)
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        otp: ""
    })
    const handleOtp = async () => {
        const sec = 6;
        settime(6);

        const ResendTime = (secounds) => {
            if (secounds > 0) {
                setTimeout(() => {
                    settime(secounds - 1)
                    ResendTime(secounds - 1)
                }, 1000);

            }
        }
        if (!formData.email?.trim()) {
            toast.warning('Warning Please Enter Email')
        } else {
            toast.success("Sending OTP to your email", { style: { background: "#7af597" } });
            try {
                const response = axios.post(`${API_URL}/sendotp`, {
                    email: formData.email
                })
                const data = response.data;
                // console.log('Email has been send.', data)
            }
            catch (error) {
                console.log(`Something error in the Verification ${error}`)
            }
        }
        ResendTime(sec);
    }
    const handleVerify = async () => {
        if (!formData.otp?.trim()) {
            toast.warning("Please enter the OTP.", { style: { background: "#f79e39" } });
            return;
        }
        else {

            try {
                const response = await axios.post(`/verifyotp`, {
                    otp: formData.otp
                })
                const data = response.data;
                toast.success('OTP has been send.', { style: { background: "#7af597" } })
                if (data.success) {
                    setMessage("OTP Verified")
                    setverify(!verify)
                }
                else {
                    setMessage("OTP Verified Failed")
                }
                console.log(data);
            }
            catch (error) {
                console.log(`Something error in the Verification ${error}`)
            }
        }
        toast.success(Message, { style: { background: "#7af597" } })
    }


    const handleSubmit = async (e) => {
        const Allfields = Object.values(formData).every((value) => value.trim() !== "");
        e.preventDefault();
        if (!Allfields) {
            toast.warning("warning : Please fill all fields");
        }
        else if (formData.password.trim() !== formData.confirmpassword.trim()) {
            toast.error("Password does not match");
        }
        else {
            localStorage.setItem("username", Username || "Guest")
            navigate("/")
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }

        try {
            const response = await axios.post('/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            const data = response.data;
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (data) => {
        setformData({
            ...formData,
            [data.target.name]: data.target.value,
        })
    }

    return (
        <>
            <section>
                <div className={`static w-full  ${toggle == true ? "bg-zinc-700 text-white" : "bg-zinc-100 text-black"} font-light gap-2 h-auto grid justify-center p-20`}>
                    <div className=' shadow-gray-400 bg-zinc-100 shadow-md grid rounded-2xl w-150 h-auto p-10 items-center justify-center'>
                        <div className='grid grid-cols-1 w-fit h-fit p-2 text-center'>
                            <span className='text-3xl font-semibold text-[#1C6C93] m-2 tracking-tight inline-block'><strong className='text-[#2D4E63] mr-2 pl-2'>Signup</strong>to EXPENSIO</span>
                            <span className='text-black tracking-tight inline-block'>Have an account?<strong className='mr-1 pl-1 underline cursor-pointer' ><Link to="/login" className='visited:text-blue-700 active:text-green-300'>Login here!</Link></strong></span>
                        </div>
                        {true && <div className='grid items-center w-fit h-auto p-5 rounded-2xl'>
                            <form onSubmit={handleSubmit} className='flex flex-col w-fit h-auto p-5 rounded-2xl gap-1'>
                                <label className='text-[#708A9E] pointer-events-none text-sm'>Short Username</label>
                                <input onChange={(e) => setUsername(e.target.value)} value={Username} type="text" placeholder='John' min={6} max={10} className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label className='text-[#708A9E] text-sm pointer-events-none'>Name</label>
                                <input onChange={handleChange} value={formData.name} name='name' type="text" placeholder='Name' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label className='text-[#708A9E] text-sm pointer-events-none'>E-mail address</label>
                                <div className='flex w-full h-fit gap-1 items-center'>
                                    <input onChange={handleChange} value={formData.email} name='email' type="text" placeholder='E-mail address' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                    <button type='button' className="w-1/3 h-fit rounded bg-gradient-to-br from-[#EF4765] to-[#FF9A5A] px-2 py-1 text-xs font-medium text-white whitespace-nowrap cursor-pointer transition-shadow duration-200 focus:outline-none " role="resend" onClick={handleOtp} disabled={time > 0}>{time > 0 ? `wait..${time}` : `send`}</button>
                                </div>
                                <div className='flex w-4/5 items-center h-fit justify-between'>
                                    <label className='text-[#708A9E] text-sm pointer-events-none'>OTP Verify</label>
                                    <label className={`text-xs pointer-events-none font-medium ${verify ? "text-green-500" : "text-zinc-600"}`}>{verify ? "Verified" : "Not Verified"}</label>
                                </div>
                                <div className='flex w-full h-fit gap-1 items-center'>
                                    <input onChange={handleChange} value={formData.otp} name='otp' type="text" placeholder='Enter OTP' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                    <button type='button' className="w-1/3 h-fit rounded bg-gradient-to-br from-green-500 to-green-600 px-2 py-1 text-xs font-medium text-white whitespace-nowrap cursor-pointer transition-shadow duration-200 focus:outline-none" role="verify" onClick={handleVerify}>Verify</button>
                                </div>
                                <label className='text-[#708A9E] text-sm pointer-events-none'>Password</label>
                                <input minLength={8} maxLength={16} onChange={handleChange} value={formData.password} name='password' type="password" placeholder='Password' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label className='text-[#708A9E] text-sm pointer-events-none'>Confirm Password</label>
                                <input minLength={8} maxLength={16} onChange={handleChange} value={formData.confirmpassword} name='confirmpassword' type="password" placeholder='Confirm Password' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />

                                <button
                                    type='submit'
                                    className="hover:shadow-zinc-300 hover:cursor-pointer flex w-full font-mono h-auto justify-center rounded-lg bg-[#E4ECF0] px-5 py-2.5 text-[#537188] shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150 select-none"
                                    role="button"
                                >
                                    Signup to Expensios</button>
                            </form>
                            <div className='gap-5 p-5 grid justify-left items-left text-center'>
                                <div className='text-xs text-zinc-400'>...Sign up with other</div>
                                <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with google <p className='p-1'><FontAwesomeIcon icon={faGoogle} className='text-xs' /></p></div>
                                <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with facebook <p className='p-1'><FontAwesomeIcon icon={faFacebookF} className='text-xs' /></p></div>
                                <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with Gthub <p className='p-1'><FontAwesomeIcon icon={faGithub} className='text-xs' /></p></div>
                            </div>
                        </div>}
                        {false &&
                            <>
                                <div className='grid items-center w-fit h-auto p-5 rounded-2xl'>
                                    <div className='flex flex-col w-fit h-auto p-5 rounded-2xl gap-2'>

                                        <label className='text-[#708A9E] text-sm'>
                                            OTP
                                        </label>

                                        <input
                                            type="text"
                                            maxLength={6}
                                            placeholder="Enter 6-digit OTP"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 tracking-widest outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        />

                                        <button
                                            type='submit'
                                            className="hover:shadow-zinc-300 hover:cursor-pointer flex w-full font-mono h-auto justify-center rounded-lg bg-[#535454] px-5 py-2.5 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150 select-none"
                                            role="button"
                                        >
                                            Verify OTP
                                        </button>
                                    </div>
                                    <div className='gap-5 p-5 grid justify-left items-left text-center'>
                                        <div className='text-xs text-zinc-400'>...Sign up with other</div>
                                        <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with google <p className='p-1'><FontAwesomeIcon icon={faGoogle} className='text-xs' /></p></div>
                                        <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with facebook <p className='p-1'><FontAwesomeIcon icon={faFacebookF} className='text-xs' /></p></div>
                                        <div className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with Gthub <p className='p-1'><FontAwesomeIcon icon={faGithub} className='text-xs' /></p></div>
                                    </div>
                                </div>
                            </>
                        }
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
        </>
    )
}

export default Register