export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* PAGE TITLE */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-blue-400">
            Contact Me
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Open to opportunities in Data Engineering, Business Intelligence,
            AI Automation, and Research Collaborations.
          </p>
        </div>


        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6">

            <h2 className="text-2xl font-semibold text-blue-300">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-300">

              <div>
                <span className="text-blue-300 font-semibold">Email:</span><br />
                vigneshkumar31cvk@gmail.com
              </div>

              <div>
                <span className="text-blue-300 font-semibold">Phone:</span><br />
                +91 72008 76222
              </div>

              <div>
                <span className="text-blue-300 font-semibold">Location:</span><br />
                Tamil Nadu, India
              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 pt-4">

              <a
                href="https://www.linkedin.com/in/vignesh-kumar-c/"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Vigneshkumarcvk"
                target="_blank"
                className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition"
              >
                GitHub
              </a>

            </div>

          </div>


          {/* RIGHT SIDE – CONTACT FORM */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6">

            <h2 className="text-2xl font-semibold text-blue-300">
              Send a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}