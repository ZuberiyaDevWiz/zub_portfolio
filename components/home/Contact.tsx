const Contact = () => (
    <section className="flex flex-col   h-screen mx-auto pt-10 w-[70%] " id="contact">
        <div className="flex flex-col space-y-1 pb-3 mx-auto ">
            <h3 className="text-gray-500 text-sm font-semibold">Feel free to contact me anytime</h3>
            <h1 className="text-4xl  font-bold text-white mx-auto border-b-4 pb-2 border-b-[#a832af] w-fit">
                Get In Touch
            </h1>
        </div>
        <div className="flex flex-col space-y-10 w-[50%] mx-auto pt-4">
            <div className="grid grid-cols-2 space-x-4 h-10 ">
                <input placeholder="Name" className="px-2 rounded-md" />
                <input placeholder="Email" className="px-2 rounded-md" />
            </div>
            <input placeholder="Subject" className="px-2 h-10 rounded-md" />
            <textarea placeholder="Message" className="p-2 h-28 rounded-md" />
            <button
                type="button"
                className="rounded-md px-5 font-semibold py-1 bg_color w-fit text-white"
            >
                Submit
            </button>
        </div>
        <h1 className="text-5xl text-white font-bold items-center justify-center flex pt-40">
            Thanks for watching.!
        </h1>
    </section>
);

export default Contact;
