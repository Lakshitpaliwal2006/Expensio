
const About = ({ toggle }) => {
    return (
        <div className={`${toggle == true ? "bg-gray-800 text-[#FAF8F5]" : "bg-[#FAF8F5] text-gray-800"} font-sans min-h-screen`}>

            <section className="px-6 py-20 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-[#E95D22] mb-6 tracking-tight">
                    At EXPENSIO.com, we believe everyone deserves to have a website or Project.
                </h1>

                <p className={`text-lg md:text-xl ${toggle == true ? "text-zinc-100" : "text-gray-clear600"} leading-relaxed max-w-3xl mx-auto mt-12`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam recusandae a repudiandae molestiae. Amet voluptas illum maxime eveniet repudiandae nemo, omnis veritatis tempore consequuntur quo? Explicabo hic alias mollitia reprehenderit, nobis quo quas rerum nostrum quidem inventore, quia in. Eveniet, voluptatum. Porro velit qui, in hic recusandae exercitationem? Provident reprehenderit, laudantium quos, amet eveniet impedit voluptates sed cumque voluptate assumenda explicabo sint. Ipsa placeat at voluptatum voluptate soluta veniam aliquam nemo. Provident, repudiandae unde in quis at vero deserunt iure laboriosam necessitatibus, non suscipit fugit animi, corrupti minima ab. Alias distinctio, delectus veniam nesciunt ipsam veritatis necessitatibus sed amet?
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

                <div className="bg-[#5B7598] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <div className="max-w-xl space-y-6 text-base md:text-lg leading-relaxed opacity-90">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur tempore quae vitae odio voluptas ullam iure voluptatibus eos ipsum alias totam reiciendis consequatur, vero laboriosam esse, doloribus, doloremque magni neque aspernatur autem ea mollitia sapiente! Possimus necessitatibus officiis atque maiores ipsam provident, iste explicabo cumque quam adipisci incidunt nulla. Ipsum?
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat, voluptates voluptas aliquam odio mollitia, doloremque eligendi ea aliquid explicabo iusto reiciendis magni aperiam id et, architecto consectetur quae. Omnis nulla dolore soluta veniam blanditiis! Culpa assumenda non voluptatum enim expedita soluta ipsam, rem accusantium illum placeat alias, consequuntur optio.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit asperiores maxime nisi? Culpa eligendi hic exercitationem, fugiat aspernatur dolor ab accusantium, doloremque optio, nihil impedit placeat. Consequuntur atque dolore vitae, repudiandae quibusdam a sequi mollitia eum eveniet cupiditate quasi facilis doloremque aut. Eum est facere mollitia nihil quaerat blanditiis!
                        </p>
                    </div>
                </div>


                <div className="relative bg-slate-200 flex items-center justify-center min-h-[350px] lg:min-h-full">

                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-blue-900/30">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wide drop-shadow-md z-10">
                            Out Image
                        </h2>

                        <img src="" alt="Our Story Background" className="absolute inset-0 w-full h-full object-cover" />
                    </div>

                </div>

            </section>

        </div>
    );
}

export default About