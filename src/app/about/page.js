export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= HERO SECTION ================= */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-blue-400">
            About Me
          </h1>

          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-8">
            I am a Data & Analytics Professional with a strong foundation in 
            Mathematics and Research, specializing in Enterprise Business Intelligence, 
            AI Automation, and Construction Analytics. My career bridges 
            academic rigor and industry-scale implementation, enabling me to design 
            scalable, secure, and data-driven decision systems.
          </p>
        </div>


        {/* ================= PROFESSIONAL SUMMARY ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-blue-300">
            Professional Profile
          </h2>

          <p className="text-gray-300 leading-8">
            With experience across Enterprise BI solutions, AI Copilot automation,
            Construction Intelligence dashboards, and Academic Analytics, 
            I architect data ecosystems that transform complex operational data 
            into actionable executive insights.
          </p>

          <p className="text-gray-300 leading-8">
            My background as a Research Scholar in Nano Topology strengthens my 
            analytical reasoning, modeling precision, and problem-solving depth —
            which I now apply to large-scale data platforms including 
            Microsoft Fabric, Power BI, Amazon QuickSight, and AI-powered workflows.
          </p>
        </section>


        {/* ================= CORE EXPERTISE ================= */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-blue-300">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold mb-3">
                Data Engineering
              </h3>
              <p className="text-gray-300 text-sm">
                ETL pipelines, SQL transformation, Fabric Lakehouse,
                Data modeling, Incremental refresh strategies.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold mb-3">
                Business Intelligence
              </h3>
              <p className="text-gray-300 text-sm">
                Power BI dashboards, Executive reporting,
                KPI modeling, DAX optimization, RLS implementation.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold mb-3">
                AI Automation
              </h3>
              <p className="text-gray-300 text-sm">
                Microsoft Copilot Studio, HR automation,
                Sales workflow bots, Power Automate orchestration.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold mb-3">
                Construction Analytics
              </h3>
              <p className="text-gray-300 text-sm">
                ACC Insight Builder (QuickSight),
                MPP integration, Issue tracking dashboards,
                Schedule variance monitoring.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold mb-3">
                Research & Modeling
              </h3>
              <p className="text-gray-300 text-sm">
                Mathematical abstraction, Structural modeling,
                Statistical analysis, Image processing applications.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold mb-3">
                Teaching & Mentoring
              </h3>
              <p className="text-gray-300 text-sm">
                Data Science training, Capstone mentoring,
                Government skill programs (Naan Mudhalvan),
                Coding & analytical thinking development.
              </p>
            </div>

          </div>
        </section>


        {/* ================= CERTIFICATIONS ================= */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-blue-300">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold">
                Microsoft Certified: Power BI Data Analyst Associate
              </h3>
              <p className="text-gray-300 text-sm">
                Valid from 2024 to Present
              </p>
            </div>

             <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold">
                Microsoft Certified:Fabric Analytics Engineer Associate
              </h3>
              <p className="text-gray-300 text-sm">
                Valid from 2024 to Present
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold">
                Microsoft Certified:Fabric Data Engineer Associate
              </h3>
              <p className="text-gray-300 text-sm">
                Valid from 2026 
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold">
                Microsoft 365 Certified: Teams Application Developer Associate
              </h3>
              <p className="text-gray-300 text-sm">
                CLeared at 2024 
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-blue-200 font-semibold">
                Academy Accreditation - Databricks Fundamentals
              </h3>
              <p className="text-gray-300 text-sm">
                Valid from 2025
              </p>
            </div>

          </div>
        </section>


        {/* ================= CAREER HIGHLIGHTS ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-blue-300">
            Career Highlights
          </h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-3">
            <li>Designed executive dashboards for CFO, CISO, Sales leadership.</li>
            <li>Developed AI Copilot agents for HR & Sales automation.</li>
            <li>Implemented RLS & governance strategies in enterprise BI systems.</li>
            <li>Built construction intelligence dashboards using ACC & Power BI.</li>
            <li>Published 13+ research papers in indexed journals.</li>
            <li>Trained 90+ students in Data Analytics & BI tools.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}