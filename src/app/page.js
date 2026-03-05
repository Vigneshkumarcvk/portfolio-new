import Image from "next/image";

export default function Home() {
  const stats = [
    { value: "150+", label: "Enterprise Dashboards Delivered" },
    { value: "13+", label: "Indexed Research Publications" },
    { value: "100+", label: "Students & Professionals Trained" },
    { value: "AI", label: "Automation & Copilot Solutions" },
  ];

  const specializations = [
    {
      title: "Enterprise BI & Visualization",
      desc: "Microsoft Fabric, Power BI, DAX, Star Schema Modeling, KPI Dashboards, RLS, Incremental Refresh & Governance.",
    },
    {
      title: "Data Engineering & Big Data",
      desc: "SQL Server, Databricks, PySpark, Lakehouse Architecture, ETL/ELT Pipelines, API Integration & Data Warehousing.",
    },
    {
      title: "Artificial Intelligence & ML",
      desc: "Predictive Modeling, Classification Algorithms, Feature Engineering, Statistical Modeling & Decision Systems.",
    },
    {
      title: "AI Automation & Low-Code",
      desc: "Copilot Studio, Power Automate, Power Apps, HR & Sales Bots, Workflow Automation & Process Optimization.",
    },
    {
      title: "Construction Intelligence",
      desc: "ACC Insight Builder, Amazon QuickSight, MPP Integration, Operational Dashboards & Gateway Automation.",
    },
    {
      title: "Research & Mathematical Modeling",
      desc: "Nano Topology, Scopus & WoS Publications, Mathematical Foundations for AI & Advanced Analytical Systems.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600 opacity-10 blur-3xl rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>

      <div className="relative px-6 py-24 max-w-7xl mx-auto space-y-32">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 items-center gap-20">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Dr. Vignesh Kumar C
            </h1>

            <p className="text-2xl text-gray-300 font-medium">
              Data & Analytics Architect
            </p>

            <p className="text-lg text-gray-400 leading-8 max-w-xl">
              Enterprise BI • AI Automation • Data Engineering • Construction Intelligence • Research Scholar
            </p>

            <p className="text-gray-400 leading-8 max-w-xl">
              Designing scalable enterprise analytics platforms, AI-driven automation systems,
              and operational dashboards backed by strong mathematical research foundations.
            </p>

            <div className="flex gap-6 pt-6">
              <a
                href="/experience"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition shadow-lg hover:shadow-blue-500/40"
              >
                Experience
              </a>

              <a
                href="/projects"
                className="border border-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl transition"
              >
                Projects
              </a>

              <a
                href="/contact"
                className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-xl transition"
              >
                Contact
              </a>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">

            <div className="relative p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl">

              <div className="absolute -inset-4 bg-blue-500 opacity-10 blur-3xl rounded-3xl"></div>

              <div className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt="Dr. Vignesh Kumar"
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
              </div>

            </div>

          </div>
        </section>

        {/* STATS SECTION */}
        <section className="grid md:grid-cols-4 gap-8 text-center">

          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 transition duration-300"
            >
              <h2 className="text-4xl font-bold text-blue-400">{item.value}</h2>
              <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
            </div>
          ))}

        </section>

        {/* CORE SPECIALIZATIONS */}
        <section className="space-y-16">

          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Core Specializations
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {specializations.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:-translate-y-3 hover:border-blue-500 hover:shadow-blue-500/20 transition duration-300"
              >
                <h3 className="text-blue-300 font-semibold text-lg mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </section>

      </div>
    </div>
  );
}import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ===== Background Glow ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600 opacity-10 blur-3xl rounded-full"></div>

      {/* ===== Grid Overlay ===== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>

      <div className="relative px-6 py-24 max-w-7xl mx-auto space-y-32">

        {/* ================= HERO ================= */}
        <section className="grid md:grid-cols-2 items-center gap-20">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Dr. Vignesh Kumar C
            </h1>

            <p className="text-2xl text-gray-300 font-medium">
              Data & Analytics Architect
            </p>

            <p className="text-lg text-gray-400 leading-8 max-w-xl">
              Enterprise BI • AI Automation • Data Engineering • Construction Intelligence • Research Scholar
            </p>

            <p className="text-gray-400 leading-8 max-w-xl">
              Designing scalable enterprise analytics platforms, AI-driven automation systems,
              and operational dashboards backed by strong mathematical research foundations.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <a
                href="/experience"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition shadow-lg hover:shadow-blue-500/40"
              >
                Experience
              </a>

              <a
                href="/projects"
                className="border border-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl transition"
              >
                Projects
              </a>

              <a
                href="/contact"
                className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-xl transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <div className="relative p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl">

              <div className="absolute -inset-4 bg-blue-500 opacity-10 blur-3xl rounded-3xl"></div>

              <div className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt="Dr. Vignesh Kumar"
                  width={320}
                  height={420}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>


        {/* ================= STATS ================= */}
        <section className="grid md:grid-cols-4 gap-8 text-center">

          {[
            { value: "150+", label: "Enterprise Dashboards Delivered" },
            { value: "13+", label: "Indexed Research Publications" },
            { value: "100+", label: "Students & Professionals Trained" },
            { value: "AI", label: "Automation & Copilot Solutions" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 transition duration-300"
            >
              <h2 className="text-4xl font-bold text-blue-400">{item.value}</h2>
              <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
            </div>
          ))}
        </section>


        {/* ================= CORE SPECIALIZATIONS ================= */}
        <section className="space-y-16">

          <h2 className="text-4xl font-semibold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Core Specializations
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Enterprise BI & Visualization",
                desc: "Microsoft Fabric, Power BI, DAX, Star Schema Modeling, KPI Dashboards, RLS, Incremental Refresh & Governance.",
              },
              {
                title: "Data Engineering & Big Data",
                desc: "SQL Server, Databricks, PySpark, Lakehouse Architecture, ETL/ELT Pipelines, API Integration & Data Warehousing.",
              },
              {
                title: "Artificial Intelligence & ML",
                desc: "Predictive Modeling, Classification Algorithms, Feature Engineering, Statistical Modeling & Decision Systems.",
              },
              {
                title: "AI Automation & Low-Code",
                desc: "Copilot Studio, Power Automate, Power Apps, HR & Sales Bots, Workflow Automation & Process Optimization.",
              },
              {
                title: "Construction Intelligence",
                desc: "ACC Insight Builder, Amazon QuickSight, MPP Integration, Operational Dashboards & Gateway Automation.",
              },
              {
                title: "Research & Mathematical Modeling",
                desc: "Nano Topology, Scopus & WoS Publications, Mathematical Foundations for AI & Advanced Analytical Systems.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:-translate-y-3 hover:border-blue-500 hover:shadow-blue-500/20 transition duration-300"
              >
                <h3 className="text-blue-300 font-semibold text-lg mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}