"use client";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closePanel = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20 relative">

      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-5xl font-bold text-center text-blue-400 mb-20">
          Key Projects
        </h1>

        <div className="space-y-16">

          {/* ================= ENTERPRISE DASHBOARD ================= */}
          <div className="relative bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:border-blue-500 transition duration-300">
            
            <h2 className="text-3xl font-semibold text-blue-300 mb-4">
              Enterprise Dashboard Suite Development
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Architected and deployed executive-level dashboard ecosystems for CFO, CISO, Sales, and Compliance teams.
              Designed scalable data models integrating SQL databases, APIs, and Excel sources into Microsoft Fabric Lakehouse.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-gray-300 mb-10">
              <ul className="list-disc pl-6 space-y-3">
                <li>Power BI executive dashboards</li>
                <li>Fabric Lakehouse architecture</li>
                <li>Multi-source ETL automation</li>
                <li>KPI monitoring & business intelligence</li>
              </ul>

              <ul className="list-disc pl-6 space-y-3">
                <li>Python-based data processing</li>
                <li>SQL transformation pipelines</li>
                <li>Data governance & modeling</li>
                <li>Real-time reporting framework</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject("enterprise")}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl transition"
              >
                View Full Case Study →
              </button>
            </div>
          </div>

{/* ================= CONSTRUCTION OPERATIONS ================= */}
<div className="relative bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:border-blue-500 transition duration-300">

  <h2 className="text-3xl font-semibold text-blue-300 mb-4">
    Construction Operations Intelligence Platform
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Developed a centralized construction analytics system integrating 
    Autodesk Construction Cloud (ACC), Amazon QuickSight Insight Builder, 
    Microsoft Project (MPP), Excel, and Power BI to monitor project operations, 
    issue tracking, and schedule performance.
  </p>

  <div className="grid md:grid-cols-2 gap-6 text-gray-300 mb-10">
    <ul className="list-disc pl-6 space-y-3">
      <li>ACC Insight Builder (QuickSight)</li>
      <li>Issue & Discipline tracking</li>
      <li>Schedule variance analysis (MPP)</li>
      <li>Project milestone monitoring</li>
    </ul>

    <ul className="list-disc pl-6 space-y-3">
      <li>Power BI custom KPI modeling</li>
      <li>Row-Level Security (RLS)</li>
      <li>Gateway configuration</li>
      <li>Automated refresh triggers</li>
    </ul>
  </div>

  <div className="flex justify-end">
    <button
      onClick={() => setSelectedProject("construction")}
      className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl transition"
    >
      View Full Case Study →
    </button>
  </div>

</div>

          {/* ================= AI COPILOT AGENT ================= */}
          <div className="relative bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:border-blue-500 transition duration-300">
            
            <h2 className="text-3xl font-semibold text-blue-300 mb-4">
              AI Copilot Agent – HR & Sales Automation
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Designed and implemented AI-powered Copilot agents to automate HR resume screening 
              and Sales follow-up workflows using Microsoft Copilot Studio and Power Automate.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-gray-300 mb-10">
              <ul className="list-disc pl-6 space-y-3">
                <li>Resume ingestion & JD matching logic</li>
                <li>Automated candidate shortlisting</li>
                <li>Email follow-up automation</li>
                <li>Conversation-based HR assistant</li>
              </ul>

              <ul className="list-disc pl-6 space-y-3">
                <li>Sales lead response automation</li>
                <li>Workflow orchestration via Power Automate</li>
                <li>Enterprise dataset integration</li>
                <li>Business process optimization</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject("copilot")}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl transition"
              >
                View Full Case Study →
              </button>
            </div>
          </div>

          {/* ================= ACADEMIC PERFORMANCE DASHBOARD ================= */}
<div className="relative bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700 hover:border-blue-500 transition duration-300">
  
  <h2 className="text-3xl font-semibold text-blue-300 mb-4">
    Academic Performance Analytics Dashboard
  </h2>

  <p className="text-gray-300 leading-8 mb-6">
    Designed and implemented a data-driven academic monitoring system to analyze student 
    performance, identify at-risk students, and support early intervention strategies 
    using predictive analytics and visualization dashboards.
  </p>

  <div className="grid md:grid-cols-2 gap-6 text-gray-300 mb-10">
    <ul className="list-disc pl-6 space-y-3">
      <li>Student performance tracking system</li>
      <li>Attendance & internal score analysis</li>
      <li>Predictive risk classification</li>
      <li>Performance trend visualization</li>
    </ul>

    <ul className="list-disc pl-6 space-y-3">
      <li>Python-based data preprocessing</li>
      <li>Statistical modeling implementation</li>
      <li>Interactive Power BI dashboards</li>
      <li>Early intervention recommendation logic</li>
    </ul>
  </div>

  <div className="flex justify-end">
    <button
      onClick={() => setSelectedProject("academic")}
      className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl transition"
    >
      View Full Case Study →
    </button>
  </div>

</div>

        </div>
      </div>


      {/* ================= OVERLAY & SLIDE PANEL ================= */}
      {selectedProject && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={closePanel}
          ></div>

          <div className="fixed top-0 right-0 h-full w-full md:w-2/3 lg:w-1/2 bg-slate-900 z-50 shadow-2xl overflow-y-auto p-10">

            <button
              onClick={closePanel}
              className="text-gray-400 hover:text-white mb-8"
            >
              ✕ Close
            </button>

            {/* ================= ENTERPRISE DETAILS ================= */}
{selectedProject === "enterprise" && (
  <div className="space-y-16 text-gray-300 leading-8">

    <h2 className="text-4xl font-bold text-blue-400">
      Enterprise Dashboard Suite – Executive Analytics Architecture
    </h2>

    {/* ===================================================== */}
    {/* ================= CFO DASHBOARD ===================== */}
    {/* ===================================================== */}
    <section className="space-y-6">
      <h3 className="text-3xl text-blue-300">CFO Financial Dashboard</h3>

      <h4 className="text-xl text-blue-200">Why It’s Important</h4>
      <p>
        Financial leadership requires real-time visibility into revenue, margin, 
        operational costs, and budget variance to make strategic investment decisions.
        Traditional Excel-based reporting delayed insights and increased reconciliation errors.
      </p>

      <h4 className="text-xl text-blue-200">Business Benefits</h4>
      <ul className="list-disc pl-6">
        <li>Improved profitability monitoring</li>
        <li>Faster budget variance detection</li>
        <li>Enhanced forecasting accuracy</li>
        <li>Reduced manual consolidation effort</li>
      </ul>

      <h4 className="text-xl text-blue-200">Stakeholders</h4>
      <ul className="list-disc pl-6">
        <li>CFO</li>
        <li>Finance Controllers</li>
        <li>Accounts & Billing Teams</li>
      </ul>

      <h4 className="text-xl text-blue-200">Data Sources</h4>
      <ul className="list-disc pl-6">
        <li>ERP Financial Database</li>
        <li>Billing & Invoice System</li>
        <li>Cost Center Tables</li>
        <li>Forecast Excel Models</li>
      </ul>

      <h4 className="text-xl text-blue-200">Implementation Methodology</h4>
      <ol className="list-decimal pl-6">
        <li>Ingest ERP data into Fabric Lakehouse</li>
        <li>Transform & clean financial records using SQL</li>
        <li>Design star schema (FactRevenue, DimDate, DimCostCenter)</li>
        <li>Create DAX measures for margin & variance</li>
        <li>Publish executive summary dashboards</li>
      </ol>

      <h4 className="text-xl text-blue-200">Security & Governance</h4>
      <ul className="list-disc pl-6">
        <li>Row-Level Security by business unit</li>
        <li>Role-based access for finance users</li>
        <li>Audit logging of dashboard access</li>
      </ul>

      <h4 className="text-xl text-blue-200">Refresh Strategy</h4>
      <ul className="list-disc pl-6">
        <li>Scheduled daily refresh (6 AM)</li>
        <li>Incremental refresh for historical data</li>
      </ul>

      <h4 className="text-xl text-blue-200">Impact</h4>
      <p>
        Enabled real-time financial monitoring and reduced monthly reporting cycle time significantly.
      </p>
    </section>


    {/* ===================================================== */}
    {/* ================= CISO DASHBOARD ==================== */}
    {/* ===================================================== */}
    <section className="space-y-6">
      <h3 className="text-3xl text-blue-300">CISO Security & Compliance Dashboard</h3>

      <h4 className="text-xl text-blue-200">Why It’s Important</h4>
      <p>
        Security leadership requires centralized visibility of vulnerabilities,
        incident resolution status, compliance metrics, and risk exposure to 
        proactively mitigate cyber threats.
      </p>

      <h4 className="text-xl text-blue-200">Business Benefits</h4>
      <ul className="list-disc pl-6">
        <li>Improved threat monitoring visibility</li>
        <li>Reduced audit preparation effort</li>
        <li>Proactive vulnerability management</li>
        <li>Better compliance tracking</li>
      </ul>

      <h4 className="text-xl text-blue-200">Stakeholders</h4>
      <ul className="list-disc pl-6">
        <li>CISO</li>
        <li>Security Operations Team</li>
        <li>Risk & Compliance Officers</li>
      </ul>

      <h4 className="text-xl text-blue-200">Data Sources</h4>
      <ul className="list-disc pl-6">
        <li>Security monitoring tools logs</li>
        <li>Incident management database</li>
        <li>Vulnerability scan exports</li>
        <li>Compliance audit spreadsheets</li>
      </ul>

      <h4 className="text-xl text-blue-200">Implementation Methodology</h4>
      <ol className="list-decimal pl-6">
        <li>Ingest log exports into Fabric Lakehouse</li>
        <li>Transform and categorize incident severity</li>
        <li>Model compliance dimensions</li>
        <li>Create DAX-based risk scoring metrics</li>
        <li>Build drill-through incident analysis dashboards</li>
      </ol>

      <h4 className="text-xl text-blue-200">Security & Governance</h4>
      <ul className="list-disc pl-6">
        <li>Department-level Row-Level Security</li>
        <li>Role-based restricted views</li>
        <li>Dataset-level access policies</li>
        <li>Access audit logging</li>
      </ul>

      <h4 className="text-xl text-blue-200">Refresh Triggers</h4>
      <ul className="list-disc pl-6">
        <li>Hourly refresh for security logs</li>
        <li>Incremental refresh for historical records</li>
      </ul>

      <h4 className="text-xl text-blue-200">Impact</h4>
      <p>
        Strengthened security posture visibility and reduced response time to incidents.
      </p>
    </section>



   {/* ===================================================== */}
{/* ================= SALES DASHBOARD =================== */}
{/* ===================================================== */}
<section className="space-y-6">
  <h3 className="text-3xl text-blue-300">Sales Performance Dashboard</h3>

  {/* WHY IMPORTANT */}
  <h4 className="text-xl text-blue-200">Why It’s Important</h4>
  <p>
    Sales leadership requires real-time visibility into revenue performance,
    pipeline health, target achievement, and regional growth trends to optimize
    forecasting and strategic planning.
  </p>

  {/* BUSINESS BENEFITS */}
  <h4 className="text-xl text-blue-200">Business Benefits</h4>
  <ul className="list-disc pl-6">
    <li>Improved revenue forecasting accuracy</li>
    <li>Better regional performance comparison</li>
    <li>Early identification of underperforming territories</li>
    <li>Faster decision-making for pricing and campaigns</li>
  </ul>

  {/* STAKEHOLDERS */}
  <h4 className="text-xl text-blue-200">Key Stakeholders</h4>
  <ul className="list-disc pl-6">
    <li>Sales Director</li>
    <li>Regional Sales Managers</li>
    <li>Business Development Teams</li>
    <li>Finance & Revenue Planning Teams</li>
  </ul>

  {/* CORE KPIs */}
  <h4 className="text-xl text-blue-200">Core KPIs</h4>
  <ul className="list-disc pl-6">
    <li>Total Revenue vs Target</li>
    <li>Conversion Rate</li>
    <li>Sales by Region / State / City</li>
    <li>Product-wise Sales Contribution</li>
    <li>Monthly Growth Rate</li>
    <li>Top Performing Sales Executives</li>
  </ul>

  {/* DATA SOURCES */}
  <h4 className="text-xl text-blue-200">Data Sources</h4>
  <ul className="list-disc pl-6">
    <li>SQL ERP Sales Transaction Tables</li>
    <li>Customer Master Table</li>
    <li>Product Master Data</li>
    <li>Regional & Territory Mapping Tables</li>
  </ul>

  {/* IMPLEMENTATION METHOD */}
  <h4 className="text-xl text-blue-200">Implementation Methodology</h4>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Daily ingestion of ERP sales data into Fabric Lakehouse</li>
    <li>Data cleansing & transformation using SQL procedures</li>
    <li>Dimensional modeling (FactSales, DimProduct, DimRegion, DimDate)</li>
    <li>DAX-based KPI & growth rate calculations</li>
    <li>Drill-through reports for region & employee-level analysis</li>
  </ol>

  {/* ARCHITECTURE & TOOLS */}
  <h4 className="text-xl text-blue-200">Architecture & Tools</h4>
  <ul className="list-disc pl-6">
    <li>Microsoft Fabric Lakehouse Architecture</li>
    <li>Power BI for visualization</li>
    <li>SQL for transformation & joins</li>
    <li>DAX for KPI logic</li>
  </ul>

  {/* SECURITY & GOVERNANCE */}
  <h4 className="text-xl text-blue-200">Security & Governance</h4>
  <ul className="list-disc pl-6">
    <li>Row-Level Security by Region</li>
    <li>Manager-based visibility control</li>
    <li>Data validation rules during transformation</li>
    <li>Controlled dataset publishing via Power BI Service</li>
  </ul>

  {/* REFRESH STRATEGY */}
  <h4 className="text-xl text-blue-200">Refresh Strategy</h4>
  <ul className="list-disc pl-6">
    <li>Daily scheduled refresh from SQL ERP</li>
    <li>Incremental refresh for historical sales data</li>
    <li>Refresh failure alert mechanism</li>
  </ul>

  {/* BUSINESS IMPACT */}
  <h4 className="text-xl text-blue-200">Business Impact</h4>
  <ul className="list-disc pl-6">
    <li>Improved regional sales transparency</li>
    <li>Reduced manual sales reporting effort</li>
    <li>Enhanced performance tracking accuracy</li>
    <li>Enabled data-driven strategic sales decisions</li>
  </ul>

</section>


    {/* ===================================================== */}
{/* ================= INCENTIVE DASHBOARD =============== */}
{/* ===================================================== */}
<section className="space-y-8">
  <h3 className="text-3xl text-blue-300">
    Sales Incentive & Performance Governance Dashboard
  </h3>

  {/* BUSINESS OBJECTIVE */}
  <h4 className="text-xl text-blue-200">Business Objective</h4>
  <p>
    Develop a centralized incentive monitoring system to track employee performance,
    determine eligibility for incentive payouts, and automate complex commission
    calculation logic across regions, cities, and product categories.
  </p>

  {/* WHY IMPORTANT */}
  <h4 className="text-xl text-blue-200">Why It’s Critical</h4>
  <ul className="list-disc pl-6">
    <li>Ensures transparent incentive calculation</li>
    <li>Prevents manual miscalculations</li>
    <li>Improves performance-based motivation</li>
    <li>Supports region-wise profitability tracking</li>
    <li>Enables management visibility into incentive expenses</li>
  </ul>

  {/* STAKEHOLDERS */}
  <h4 className="text-xl text-blue-200">Key Stakeholders</h4>
  <ul className="list-disc pl-6">
    <li>Sales Managers</li>
    <li>Regional Heads</li>
    <li>HR & Payroll Team</li>
    <li>Finance Department</li>
  </ul>

  {/* INCENTIVE LOGIC */}
  <h4 className="text-xl text-blue-200">Incentive Eligibility & Calculation Logic</h4>
  <ul className="list-disc pl-6 space-y-2">
    <li>Eligibility based on monthly sales target achievement</li>
    <li>Region / State / City-wise performance tracking</li>
    <li>Retail sales incentive varies per machine category</li>
    <li>If employee sells more than 5 machines → alternate incentive slab applied</li>
    <li>Dynamic commission calculation using DAX rules</li>
    <li>Separate incentive logic for wholesale vs retail transactions</li>
  </ul>

  {/* PRODUCT & FOC TRACKING */}
  <h4 className="text-xl text-blue-200">Product & Free-of-Cost (FOC) Monitoring</h4>
  <ul className="list-disc pl-6">
    <li>Product-wise sales contribution tracking</li>
    <li>FOC commitments monitoring</li>
    <li>Profitability analysis after FOC deductions</li>
    <li>Machine-category-based incentive multiplier logic</li>
  </ul>

  {/* DATA SOURCE */}
  <h4 className="text-xl text-blue-200">Data Source</h4>
  <ul className="list-disc pl-6">
    <li>SQL-based ERP System</li>
    <li>Sales Transaction Tables</li>
    <li>Employee Master Table</li>
    <li>Product & Pricing Table</li>
  </ul>

  {/* IMPLEMENTATION METHOD */}
  <h4 className="text-xl text-blue-200">Implementation Methodology</h4>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Daily ERP data ingestion into Fabric Lakehouse</li>
    <li>Sales fact table modeling (FactSales)</li>
    <li>Region / State / City dimension modeling</li>
    <li>Employee dimension creation</li>
    <li>DAX-based conditional incentive formulas</li>
    <li>Dynamic slab logic implementation</li>
    <li>Drill-through region-wise analysis dashboards</li>
  </ol>

  {/* SECURITY */}
  <h4 className="text-xl text-blue-200">Security & Governance</h4>
  <ul className="list-disc pl-6">
    <li>Row-Level Security by Employee ID</li>
    <li>Region-based access restriction</li>
    <li>Manager-level aggregated visibility</li>
    <li>Audit trail monitoring</li>
  </ul>

  {/* REFRESH STRATEGY */}
  <h4 className="text-xl text-blue-200">Refresh Strategy</h4>
  <ul className="list-disc pl-6">
    <li>Daily scheduled refresh from SQL ERP</li>
    <li>Incremental refresh for large sales tables</li>
    <li>Automated failure alerts</li>
  </ul>

  {/* IMPACT */}
  <h4 className="text-xl text-blue-200">Business Impact</h4>
  <ul className="list-disc pl-6">
    <li>Eliminated manual incentive calculations</li>
    <li>Improved payroll transparency</li>
    <li>Enabled performance-based motivation tracking</li>
    <li>Reduced disputes related to commission payouts</li>
  </ul>

</section>


    {/* ===================================================== */}
{/* ============ SERVICE CENTER OPERATIONS DASHBOARD ==== */}
{/* ===================================================== */}
<section className="space-y-8">
  <h3 className="text-3xl text-blue-300">
    Service Center Customer & Operations Dashboard
  </h3>

  {/* WHY IMPORTANT */}
  <h4 className="text-xl text-blue-200">Why It’s Important</h4>
  <p>
    Service centers require centralized monitoring of customer visits, complaint trends,
    vehicle lifecycle, and feedback quality to improve customer retention,
    operational efficiency, and service satisfaction.
  </p>

  {/* BUSINESS BENEFITS */}
  <h4 className="text-xl text-blue-200">Business Benefits</h4>
  <ul className="list-disc pl-6">
    <li>Improved customer retention analysis</li>
    <li>Early detection of frequent complaints</li>
    <li>Better service quality monitoring</li>
    <li>Data-driven operational decisions</li>
    <li>Improved review & feedback transparency</li>
  </ul>

  {/* STAKEHOLDERS */}
  <h4 className="text-xl text-blue-200">Key Stakeholders</h4>
  <ul className="list-disc pl-6">
    <li>Service Center Manager</li>
    <li>Regional Operations Head</li>
    <li>Customer Relationship Team</li>
    <li>Body Shop Supervisors</li>
  </ul>

  {/* CORE KPIs */}
  <h4 className="text-xl text-blue-200">Core KPIs & Metrics</h4>
  <ul className="list-disc pl-6 space-y-2">
    <li>Total Active vs Inactive Customers</li>
    <li>Repeat Visit Frequency</li>
    <li>Vehicle Age Distribution</li>
    <li>Complaint Volume & Resolution Time</li>
    <li>Body Shop Repair Count</li>
    <li>Before vs After Service Issue Tracking</li>
    <li>Customer Feedback Score & Rating Trend</li>
    <li>Out-of-State / Out-of-City Customer Analysis</li>
  </ul>

  {/* CUSTOMER SEGMENTATION */}
  <h4 className="text-xl text-blue-200">Customer Segmentation Logic</h4>
  <ul className="list-disc pl-6">
    <li>Active Customers → Visited within last 6 months</li>
    <li>Inactive Customers → No visit in last 6+ months</li>
    <li>Frequent Visitors → More than 3 visits within a year</li>
    <li>Cross-Region Customers → Different state/city service usage</li>
  </ul>

  {/* COMPLAINT & REVIEW TRACKING */}
  <h4 className="text-xl text-blue-200">Complaint & Feedback Analytics</h4>
  <ul className="list-disc pl-6">
    <li>Issue tracking before service vs after service</li>
    <li>Repeat complaint detection logic</li>
    <li>Service satisfaction rating trend</li>
    <li>Body shop service review monitoring</li>
  </ul>

  {/* DATA SOURCES */}
  <h4 className="text-xl text-blue-200">Data Sources</h4>
  <ul className="list-disc pl-6">
    <li>SQL ERP Service Transactions</li>
    <li>Mobile App Customer Interaction Data</li>
    <li>On-Prem Excel Files (Feedback & Manual Logs)</li>
    <li>Vehicle Master Database</li>
    <li>Complaint Management Tables</li>
  </ul>

  {/* IMPLEMENTATION METHOD */}
  <h4 className="text-xl text-blue-200">Implementation Methodology</h4>
  <ol className="list-decimal pl-6 space-y-2">
    <li>Daily ingestion of ERP & App data into Fabric Lakehouse</li>
    <li>Excel file ingestion via automated ETL pipelines</li>
    <li>Data cleansing & standardization using SQL</li>
    <li>FactService & DimCustomer dimensional modeling</li>
    <li>DAX measures for visit frequency & lifecycle logic</li>
    <li>Drill-through dashboards for customer-level analysis</li>
  </ol>

  {/* ARCHITECTURE */}
  <h4 className="text-xl text-blue-200">Architecture & Tools</h4>
  <ul className="list-disc pl-6">
    <li>Microsoft Fabric Lakehouse</li>
    <li>Power BI Dashboard Layer</li>
    <li>SQL Transformation Layer</li>
    <li>DAX for KPI & segmentation logic</li>
  </ul>

  {/* SECURITY */}
  <h4 className="text-xl text-blue-200">Security & Governance</h4>
  <ul className="list-disc pl-6">
    <li>Region-based Row-Level Security</li>
    <li>Branch-level data access control</li>
    <li>Restricted access for customer-sensitive data</li>
    <li>Audit monitoring of data access</li>
  </ul>

  {/* REFRESH STRATEGY */}
  <h4 className="text-xl text-blue-200">Refresh Strategy</h4>
  <ul className="list-disc pl-6">
    <li>Daily scheduled refresh from SQL ERP</li>
    <li>Incremental refresh for service history data</li>
    <li>Automated ingestion of App data via API</li>
    <li>Excel auto-load pipeline via gateway</li>
  </ul>

  {/* IMPACT */}
  <h4 className="text-xl text-blue-200">Business Impact</h4>
  <ul className="list-disc pl-6">
    <li>Improved customer retention tracking</li>
    <li>Reduced complaint recurrence</li>
    <li>Enhanced body shop performance visibility</li>
    <li>Better customer satisfaction monitoring</li>
    <li>Data-driven service optimization decisions</li>
  </ul>

</section>

    {/* ========================================================= */}
    {/* ================= PROJECT TRACKING DASHBOARD ============ */}
    {/* ========================================================= */}
    <section className="space-y-6">
      <h3 className="text-3xl text-blue-300">Project Tracking & Delivery Dashboard</h3>

      <ul className="list-disc pl-6">
        <li>Milestone completion percentage</li>
        <li>Budget variance analysis</li>
        <li>Resource utilization tracking</li>
        <li>Delivery timeline monitoring</li>
      </ul>
    </section>

  </div>
)}

            {/* ================= COPILOT DETAILS ================= */}
{selectedProject === "copilot" && (
  <div className="space-y-16 text-gray-300 leading-8">

    <h2 className="text-4xl font-bold text-blue-400">
      AI Copilot Agents – HR & Sales Automation System
    </h2>

    {/* ===================================================== */}
    {/* ================= BUSINESS CONTEXT ================== */}
    {/* ===================================================== */}
    <section className="space-y-4">
      <h3 className="text-2xl text-blue-300">Business Context</h3>
      <p>
        The organization required automation of repetitive HR and Sales workflows 
        including resume screening, candidate communication, sales follow-ups, 
        and lead engagement. Manual processing was time-consuming and inconsistent.
      </p>
    </section>

    {/* ===================================================== */}
    {/* ================= WHY AI AGENTS ===================== */}
    {/* ===================================================== */}
    <section className="space-y-4">
      <h3 className="text-2xl text-blue-300">Why AI Copilot Agents Were Implemented</h3>
      <ul className="list-disc pl-6">
        <li>Reduce manual HR screening workload</li>
        <li>Improve response time for candidates and customers</li>
        <li>Standardize sales communication workflows</li>
        <li>Enable intelligent conversation-based assistance</li>
        <li>Automate repetitive business processes</li>
      </ul>
    </section>

    {/* ===================================================== */}
    {/* ================= HR COPILOT AGENT ================== */}
    {/* ===================================================== */}
    <section className="space-y-6">
      <h3 className="text-3xl text-blue-300">HR Recruitment Copilot Agent</h3>

      <h4 className="text-xl text-blue-200">Objective</h4>
      <p>
        Automate resume screening and candidate shortlisting using 
        AI-driven keyword matching and rule-based filtering.
      </p>

      <h4 className="text-xl text-blue-200">Key Functionalities</h4>
      <ul className="list-disc pl-6">
        <li>Resume ingestion & parsing</li>
        <li>Job Description (JD) keyword extraction</li>
        <li>Skill matching score calculation</li>
        <li>Automated shortlisting logic</li>
        <li>Email notification to shortlisted candidates</li>
        <li>Candidate status tracking</li>
      </ul>

      <h4 className="text-xl text-blue-200">Business Benefits</h4>
      <ul className="list-disc pl-6">
        <li>Reduced screening time significantly</li>
        <li>Standardized candidate evaluation</li>
        <li>Improved recruiter productivity</li>
        <li>Reduced human bias in initial filtering</li>
      </ul>
    </section>

    {/* ===================================================== */}
    {/* ================= SALES COPILOT AGENT =============== */}
    {/* ===================================================== */}
    <section className="space-y-6">
      <h3 className="text-3xl text-blue-300">Sales Engagement Copilot Agent</h3>

      <h4 className="text-xl text-blue-200">Objective</h4>
      <p>
        Automate customer engagement workflows including lead qualification,
        follow-up reminders, and response handling.
      </p>

      <h4 className="text-xl text-blue-200">Key Functionalities</h4>
      <ul className="list-disc pl-6">
        <li>Lead qualification via conversational logic</li>
        <li>Automated follow-up email generation</li>
        <li>Customer query resolution assistant</li>
        <li>Sales pipeline stage updates</li>
        <li>Integration with CRM records</li>
      </ul>

      <h4 className="text-xl text-blue-200">Business Benefits</h4>
      <ul className="list-disc pl-6">
        <li>Improved response time to leads</li>
        <li>Standardized communication templates</li>
        <li>Increased lead conversion probability</li>
        <li>Reduced manual workload for sales team</li>
      </ul>
    </section>

    {/* ===================================================== */}
    {/* ================= ARCHITECTURE ====================== */}
    {/* ===================================================== */}
    <section className="space-y-6">
      <h3 className="text-2xl text-blue-300">System Architecture</h3>

      <ol className="list-decimal pl-6 space-y-2">
        <li>Conversation flows designed in Microsoft Copilot Studio</li>
        <li>Trigger-based workflows via Power Automate</li>
        <li>Data retrieval from SQL / SharePoint / CRM</li>
        <li>Response logic with conditional branching</li>
        <li>Email & notification automation</li>
      </ol>

      <h4 className="text-xl text-blue-200">Tools Used</h4>
      <ul className="list-disc pl-6">
        <li>Microsoft Copilot Studio</li>
        <li>Power Automate</li>
        <li>Power Apps</li>
        <li>SQL Database</li>
        <li>Outlook Integration</li>
      </ul>
    </section>

    {/* ===================================================== */}
    {/* ================= DATA & INTEGRATION ================ */}
    {/* ===================================================== */}
    <section className="space-y-4">
      <h3 className="text-2xl text-blue-300">Data Integration</h3>
      <ul className="list-disc pl-6">
        <li>Candidate master database</li>
        <li>Job description repository</li>
        <li>CRM lead database</li>
        <li>Email notification systems</li>
      </ul>
    </section>

    {/* ===================================================== */}
    {/* ================= SECURITY ========================== */}
    {/* ===================================================== */}
    <section className="space-y-4">
      <h3 className="text-2xl text-blue-300">Security & Governance</h3>
      <ul className="list-disc pl-6">
        <li>Role-based access control</li>
        <li>Restricted HR data access</li>
        <li>Secure API connections</li>
        <li>Data encryption in transit</li>
      </ul>
    </section>

    {/* ===================================================== */}
    {/* ================= MONITORING ======================== */}
    {/* ===================================================== */}
    <section className="space-y-4">
      <h3 className="text-2xl text-blue-300">Monitoring & Logging</h3>
      <ul className="list-disc pl-6">
        <li>Conversation performance tracking</li>
        <li>Failure notification alerts</li>
        <li>Response time monitoring</li>
        <li>User interaction analytics</li>
      </ul>
    </section>

    {/* ===================================================== */}
    {/* ================= BUSINESS IMPACT =================== */}
    {/* ===================================================== */}
    <section className="space-y-4">
      <h3 className="text-2xl text-blue-300">Business Impact</h3>
      <ul className="list-disc pl-6">
        <li>Reduced HR screening effort</li>
        <li>Improved candidate engagement</li>
        <li>Faster lead follow-up cycle</li>
        <li>Increased sales workflow efficiency</li>
        <li>Improved automation maturity of the organization</li>
      </ul>
    </section>

  </div>
)}

            {/* ================= ACADEMIC DETAILS ================= */}
{selectedProject === "academic" && (
  <div className="space-y-10 text-gray-300 leading-8">

    <h2 className="text-4xl font-bold text-blue-400">
      Academic Performance Analytics – Detailed Case Study
    </h2>

    {/* BUSINESS OBJECTIVE */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Business Objective</h3>
      <p>
        Develop a centralized academic analytics system to monitor student performance, 
        identify academically at-risk students early, and enable data-driven 
        intervention planning by faculty and administrators.
      </p>
    </section>

    {/* PROBLEM STATEMENT */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Problem Statement</h3>
      <ul className="list-disc pl-6">
        <li>Manual performance tracking using Excel sheets</li>
        <li>Delayed identification of academically weak students</li>
        <li>No centralized dashboard for faculty monitoring</li>
        <li>Lack of predictive insight for dropout risk</li>
      </ul>
    </section>

    {/* DATA SOURCES */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Data Sources</h3>
      <ul className="list-disc pl-6">
        <li>Student demographic data</li>
        <li>Internal assessment scores</li>
        <li>Semester examination results</li>
        <li>Attendance records</li>
        <li>Assignment & project evaluation data</li>
      </ul>
    </section>

    {/* DATA PIPELINE */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Data Processing & Pipeline</h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Data collection from academic ERP & Excel sources</li>
        <li>Data cleaning using Python (Pandas)</li>
        <li>Handling missing values & normalization</li>
        <li>Feature engineering (attendance ratio, performance index)</li>
        <li>Data modeling for analytics & reporting</li>
      </ol>
    </section>

    {/* MODEL IMPLEMENTATION */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Predictive Modeling</h3>
      <ul className="list-disc pl-6">
        <li>Logistic Regression for risk prediction</li>
        <li>Performance index scoring model</li>
        <li>Classification of students (Low / Medium / High Risk)</li>
        <li>Threshold-based alert mechanism</li>
      </ul>
    </section>

    {/* DASHBOARD DESIGN */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Dashboard Architecture</h3>
      <ul className="list-disc pl-6">
        <li>Department-wise performance summary</li>
        <li>Student-wise drill-down analysis</li>
        <li>Trend analysis across semesters</li>
        <li>Risk heatmap visualization</li>
        <li>KPI cards for attendance & score averages</li>
      </ul>
    </section>

    {/* TOOLS */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Tools & Technologies Used</h3>
      <ul className="list-disc pl-6">
        <li>Python (Pandas, NumPy, Scikit-learn)</li>
        <li>Power BI</li>
        <li>SQL</li>
        <li>Statistical modeling techniques</li>
      </ul>
    </section>

    {/* IMPACT */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Key Outcomes & Impact</h3>
      <ul className="list-disc pl-6">
        <li>Improved early detection of academically weak students</li>
        <li>Reduced manual academic tracking effort</li>
        <li>Enabled proactive intervention planning</li>
        <li>Improved overall academic monitoring efficiency</li>
      </ul>
    </section>
  </div>
)}

{/* ================= CONSTRUCTION DETAILS ================= */}
{selectedProject === "construction" && (
  <div className="space-y-16 text-gray-300 leading-8">

    <h2 className="text-4xl font-bold text-blue-400">
      Construction Operations Intelligence Platform
    </h2>

    {/* BUSINESS CONTEXT */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Business Context</h3>
      <p>
        The construction organization required centralized monitoring of 
        project progress, issue resolution, discipline-wise tracking, 
        and schedule variance analysis to improve operational visibility 
        and reduce project delays.
      </p>
    </section>

    {/* WHY IMPORTANT */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Why It’s Important</h3>
      <ul className="list-disc pl-6">
        <li>Real-time tracking of project issues</li>
        <li>Improved milestone monitoring</li>
        <li>Schedule variance detection</li>
        <li>Discipline-wise accountability tracking</li>
        <li>Centralized executive reporting</li>
      </ul>
    </section>

    {/* DATA SOURCES */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Data Sources</h3>
      <ul className="list-disc pl-6">
        <li>Autodesk Construction Cloud (ACC)</li>
        <li>ACC Insight Builder (Amazon QuickSight)</li>
        <li>Microsoft Project (MPP)</li>
        <li>Excel-based operational reports</li>
      </ul>
    </section>

    {/* CORE MODULES */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Core Tracking Modules</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Issue Type Tracking (MDL, RFI, Snags)</li>
        <li>Discipline tracking (AR, ST, HVAC, ELE, PHE)</li>
        <li>Project milestone completion monitoring</li>
        <li>Schedule baseline vs actual variance</li>
        <li>Delay root cause analysis</li>
      </ul>
    </section>

    {/* IMPLEMENTATION */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Implementation Methodology</h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Filtered ACC issue datasets (Issue Type = MDL, RFI etc.)</li>
        <li>Developed dashboards in ACC Insight Builder (QuickSight)</li>
        <li>Integrated MPP schedule data into Power BI</li>
        <li>Excel ingestion via Power BI Gateway</li>
        <li>Dimensional modeling & KPI calculation using DAX</li>
      </ol>
    </section>

    {/* SECURITY */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Security & Governance</h3>
      <ul className="list-disc pl-6">
        <li>Row-Level Security by Project / Site</li>
        <li>Role-based dashboard visibility</li>
        <li>Secure on-prem gateway configuration</li>
        <li>Access control for executive users</li>
      </ul>
    </section>

    {/* AUTOMATION */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Automation & Refresh Strategy</h3>
      <ul className="list-disc pl-6">
        <li>Scheduled dataset refresh via Gateway</li>
        <li>QuickSight auto-refresh configuration</li>
        <li>Incremental refresh for large issue tables</li>
        <li>Trigger-based update mechanisms</li>
      </ul>
    </section>

    {/* IMPACT */}
    <section>
      <h3 className="text-2xl text-blue-300 mb-2">Business Impact</h3>
      <ul className="list-disc pl-6">
        <li>Improved project monitoring efficiency</li>
        <li>Reduced delay identification time</li>
        <li>Enhanced stakeholder transparency</li>
        <li>Centralized multi-source reporting ecosystem</li>
      </ul>
    </section>

  </div>
)}

          </div>
        </>
      )}

    </div>
  );
}