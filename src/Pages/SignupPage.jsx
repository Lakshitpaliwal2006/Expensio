import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SignupPage = () => {
    return (
        <>
            <section>
                <div className='w-full bg-zinc-100 text-black font-light gap-2 h-auto grid justify-center p-20'>
                    <div className=' shadow-gray-400 shadow-md grid rounded-2xl w-150 h-auto p-10 items-center justify-center'>
                        <div className='grid grid-cols-1 w-fit h-fit p-2 text-center'>
                            <span className='text-3xl font-semibold text-[#1C6C93] m-2 tracking-tight inline-block'><strong className='text-[#2D4E63] mr-2 pl-2'>Signup</strong>to EXPENSIO</span>
                            <span className='text-black tracking-tight inline-block'>Have an account?<strong className='mr-1 pl-1 underline'>Login here!</strong></span>
                        </div>
                        <div className='grid items-center w-fit h-auto p-5 rounded-2xl'>
                            <form action="/Signup" className='flex flex-col w-fit h-auto p-5 rounded-2xl gap-1'>
                                <label htmlFor="" className='text-[#708A9E] text-sm'>Name</label>
                                <input type="text" placeholder='Name' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label htmlFor="" className='text-[#708A9E] text-sm'>E-mail address</label>
                                <input type="text" placeholder='E-mail address' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label htmlFor="" className='text-[#708A9E] text-sm'>Password</label>
                                <input type="password" placeholder='Password' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label htmlFor="" className='text-[#708A9E] text-sm'>Confirm Password</label>
                                <input type="password" placeholder='Confirm Password' className='placeholder:text-[#708A9E] placeholder:text-light shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] w-fit h-auto p-1 text-gray-700 font-medium shadow-3xl border border-[#DFDFDF] pl-2 rounded-sm focus:border-zinc-600 focus:outline-hidden' />
                                <label htmlFor=""></label>
                                <button
                                    class="flex w-full font-mono h-auto justify-center rounded-lg bg-[#E4ECF0] px-5 py-2.5 text-[#537188] shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150 select-none"
                                    role="button"
                                >
                                    Signup to Expensios</button>
                            </form>
                            <div className='gap-5 p-5 grid justify-left items-left text-center'>
                                <p className='text-xs text-zinc-400'>...Sign up with other</p>
                                <p className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with google <p className='p-1'><FontAwesomeIcon icon={faGoogle} className='text-xs' /></p></p>
                                <p className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with facebook <p className='p-1'><FontAwesomeIcon icon={faFacebookF} className='text-xs' /></p></p>
                                <p className='flex w-full font-mono items-center h-auto justify-between rounded-lg bg-zinc-200 px-6 py-2.5 text-black text-xs font-medium shadow-[inset_0_1px_2px_rgba(255,255,255,0.26)] transition-colors duration-150s select-none gap-2'> Sign up with Gthub <p className='p-1'><FontAwesomeIcon icon={faGithub} className='text-xs' /></p></p>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 h-auto text-[15spx] justify-center gap-1 p-1 font-medium'>
                        <span>By using Spendee you agree with Spendee’s</span>
                        <a className='underline underline-offset-1 text-gray-900 cursor-pointer hover:no-underline hover:text-gray-500'>Terms of Use</a>
                        <span>, and</span>
                        <a className='underline underline-offset-1 text-gray-900 cursor-pointer hover:no-underline hover:text-gray-500'> Privacy Policy</a>
                        <span>Pre-contractual Terms.</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignupPage