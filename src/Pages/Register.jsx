
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { FinanceContext } from '../Contexts/FinanceContext';

const Register = () => {
    const { toggle, setToggle } = useContext(FinanceContext);
    const { Username, setUsername } = useContext(FinanceContext);
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
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
            toast.success('Account created successfully!')
            setTimeout(() => {
                window.location.reload();
            }, 3000);

            // console.log(formData.name)
            // console.log(formData.password);
            // console.log(formData.email);
        }
        // const response = await fetch('http://127.0.0.1:5000/register', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: formData.name,
        //         email: formData.email,
        //         password: formData.password
        //     })
        // });

        try {
            const response = await axios.post("http://127.0.0.1:3050/register", {
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
                            <span className='text-black tracking-tight inline-block'>Have an account?<strong className='mr-1 pl-1 underline'>Login here!</strong></span>
                        </div>

                        <div className='grid items-center w-fit h-auto p-5 rounded-2xl'>
                            <form onSubmit={handleSubmit} className='flex flex-col w-fit h-auto p-5 rounded-2xl gap-1'>
                                <label className='text-[#708A9E] text-sm'>Username</label>
                                <input onChange={(e) => setUsername(e.target.value)} value={Username} type="text" placeholder='Username' min={6} max={10} className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label className='text-[#708A9E] text-sm'>Name</label>
                                <input onChange={handleChange} value={formData.name} name='name' type="text" placeholder='Name' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label className='text-[#708A9E] text-sm'>E-mail address</label>
                                <input onChange={handleChange} value={formData.email} name='email' type="text" placeholder='E-mail address' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label className='text-[#708A9E] text-sm'>Password</label>
                                <input minLength={8} maxLength={16} onChange={handleChange} value={formData.password} name='password' type="password" placeholder='Password' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label className='text-[#708A9E] text-sm'>Confirm Password</label>
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
        </>
    )
}

export default Register