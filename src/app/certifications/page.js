export default function Certifications() {

  const certifications = [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      importance:
        "This certification validates professional expertise in transforming data into meaningful insights using Microsoft Power BI. It demonstrates the ability to model, visualize, and analyze enterprise data to support strategic decision-making.",
      abilities:
        "Ability to design interactive dashboards, create data models using star schema, implement DAX calculations, perform data transformation using Power Query, and manage enterprise reporting solutions.",
      skills: [
        "Power BI",
        "Data Modeling",
        "DAX",
        "Power Query",
        "Data Visualization",
        "Business Intelligence"
      ],
      link: "https://learn.microsoft.com/en-us/users/vigneshkumarc-4583/credentials/certification/data-analyst-associate?tab=credentials-tab"
    },

    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
  issuer: "Microsoft",

  importance:
    "This certification validates expertise in designing and implementing modern analytics solutions using Microsoft Fabric. It demonstrates the ability to integrate data engineering, data warehousing, and real-time analytics within a unified analytics platform to support enterprise-level data-driven decision making.",

  abilities:
    "Ability to design and implement end-to-end analytics solutions using Microsoft Fabric, build scalable data pipelines, manage lakehouse architectures, implement data transformation workflows, and enable enterprise analytics solutions across distributed data environments.",

  skills: [
    "Microsoft Fabric",
    "Lakehouse Architecture",
    "Data Engineering",
    "Data Pipelines",
    "Data Warehousing",
    "SQL & Spark",
    "Data Integration",
    "Big Data Processing",
    "Data Transformation",
    "Enterprise Analytics"
      ],
      link: "https://learn.microsoft.com/api/credentials/share/en-us/VigneshKumarC-4583/12381BE6B3605A0F?sharingId/"
    },

    { title: "Microsoft Certified: Fabric Data Engineer Associate", issuer: "Microsoft", importance: "This certification validates expertise in designing and implementing data engineering solutions using Microsoft Fabric. It demonstrates the ability to build scalable data pipelines, manage lakehouse architectures, and process large-scale datasets to support enterprise analytics and business intelligence solutions.", abilities: "Ability to design and implement data ingestion pipelines, build and manage lakehouse architectures, transform and process large-scale data using Spark, orchestrate data workflows, and integrate multiple enterprise data sources within the Microsoft Fabric platform.", skills: [ "Microsoft Fabric", "Data Engineering", "Lakehouse Architecture", "Data Pipelines", "Apache Spark", "SQL", "Data Transformation", "Data Integration", "Big Data Processing", "ETL / ELT Pipelines" ], 
        link: "https://learn.microsoft.com/api/credentials/share/en-us/VigneshKumarC-4583/F70C16DDB8916686?sharingId"
    },
{
  title: "Microsoft 365 Certified: Teams Application Developer Associate",
  issuer: "Microsoft",

  importance:
    "This certification validates expertise in developing custom applications and integrations for Microsoft Teams. It demonstrates the ability to build collaborative solutions that extend Microsoft Teams using Microsoft 365 services, APIs, and development frameworks, enabling organizations to improve productivity and digital collaboration.",

  abilities:
    "Ability to design and develop custom Microsoft Teams applications, integrate Microsoft Graph APIs, create bots and messaging extensions, implement authentication and security mechanisms, and build collaborative solutions using Microsoft 365 development tools.",

  skills: [
    "Microsoft Teams Development",
    "Microsoft Graph API",
    "Bots & Messaging Extensions",
    "Microsoft 365 Development",
    "Node.js / JavaScript",
    "REST APIs",
    "Authentication & Security",
    "App Deployment in Teams",
    "Collaboration Solutions"
  ],

  link: "https://learn.microsoft.com/en-us/users/vigneshkumarc-4583/credentials/certification-o-/m365-developer-associate"
},

{
  title: "Academy Accreditation - Databricks Fundamentals",
  issuer: "Databricks",

  importance:
    "This accreditation validates foundational knowledge of the Databricks Lakehouse Platform and its role in modern data engineering and analytics architectures. It demonstrates understanding of unified data processing, scalable data engineering workflows, and collaborative analytics environments built on Apache Spark.",

  abilities:
    "Ability to understand and work with the Databricks Lakehouse Platform, perform data processing using Apache Spark, collaborate in notebook-based environments, manage datasets within the lakehouse architecture, and support data engineering and analytics workflows.",

  skills: [
    "Databricks Lakehouse Platform",
    "Apache Spark",
    "Big Data Processing",
    "Data Engineering Fundamentals",
    "Notebook-Based Analytics",
    "Data Transformation",
    "Data Pipelines",
    "Lakehouse Architecture"
  ],

  link: "https://credentials.databricks.com/2ae888d7-5091-4793-9c2c-358573c0be20"
}



  ];


  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto space-y-20">

        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Professional Certifications
        </h1>


        <div className="grid md:grid-cols-2 gap-12">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition duration-300"
            >

              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                {cert.title}
              </h2>

              <p className="text-gray-400 mb-6">
                Issued by {cert.issuer}
              </p>


              <div className="space-y-5">

                <div>
                  <h3 className="text-blue-300 font-medium mb-2">
                    Importance of this Certification
                  </h3>
                  <p className="text-gray-400 text-sm leading-7">
                    {cert.importance}
                  </p>
                </div>


                <div>
                  <h3 className="text-blue-300 font-medium mb-2">
                    Demonstrated Abilities
                  </h3>
                  <p className="text-gray-400 text-sm leading-7">
                    {cert.abilities}
                  </p>
                </div>


                <div>
                  <h3 className="text-blue-300 font-medium mb-2">
                    Key Skills
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>


              <div className="pt-8">
                <a
                  href={cert.link}
                  target="_blank"
                  className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition shadow-lg hover:shadow-blue-500/40"
                >
                  View Certificate
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
