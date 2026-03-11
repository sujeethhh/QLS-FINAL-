import Link from "next/link";

export default function CourseListings() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-8 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm font-bold text-gray-800 mb-5 uppercase tracking-wide">
          Course Listings
        </h3>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">

          <p>
            <span className="font-bold text-gray-900">IT Service Management: </span>
            <Link href="/ITL4Management" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Foundation</Link> |{" "}
            <Link href="/ITL4SCDS" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Specialist: Create, Deliver &amp; Support</Link> |{" "}
            <Link href="/ITL4SDSV" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Specialist: Drive Stakeholder Value</Link> |{" "}
            <Link href="/ITL4SHVI" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Specialist: High Velocity IT</Link> |{" "}
            <Link href="/ITL4SDPI" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Strategist: Direct, Plan &amp; Improve</Link> |{" "}
            <Link href="/HighvelIt" className="hover:text-[#2563EB] hover:underline">ITIL® 4 High Velocity IT</Link> |{" "}
            <Link href="/DirectPlan" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Direct, Plan &amp; Improve</Link> |{" "}
            <Link href="/CreateDeliverSupport" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Create, Deliver &amp; Support</Link> |{" "}
            <Link href="/DriveStakeholderValue" className="hover:text-[#2563EB] hover:underline">ITIL® 4 Drive Stakeholder Value</Link> |{" "}
            <Link href="/AcquiringAndManagingCS" className="hover:text-[#2563EB] hover:underline">Acquiring &amp; Managing Cloud Services</Link> |{" "}
            <Link href="/SustainabilityInDigitalAI" className="hover:text-[#2563EB] hover:underline">Sustainability in Digital &amp; AI</Link> |{" "}
            <Link href="/BusinessRelationshipManage" className="hover:text-[#2563EB] hover:underline">Business Relationship Management</Link> |{" "}
            <Link href="/DigitalItService" className="hover:text-[#2563EB] hover:underline">Digital IT &amp; Services</Link> |{" "}
            <Link href="/SIAMFoundation" className="hover:text-[#2563EB] hover:underline">SIAM Foundation</Link> |{" "}
            <Link href="/SIAMProfessional" className="hover:text-[#2563EB] hover:underline">SIAM Professional</Link> |{" "}
            <Link href="/ServiceDesk" className="hover:text-[#2563EB] hover:underline">Service Desk</Link> |{" "}
            <Link href="/IncidentManagement" className="hover:text-[#2563EB] hover:underline">Incident Management</Link> |{" "}
            <Link href="/ProblemManagement" className="hover:text-[#2563EB] hover:underline">Problem Management</Link> |{" "}
            <Link href="/ServiceRequestManagement" className="hover:text-[#2563EB] hover:underline">Service Request Management</Link> |{" "}
            <Link href="/MonitoringEventManagement" className="hover:text-[#2563EB] hover:underline">Monitoring &amp; Event Management</Link> |{" "}
            <Link href="/ChangeEnablement" className="hover:text-[#2563EB] hover:underline">Change Enablement</Link> |{" "}
            <Link href="/ReleaseManagement" className="hover:text-[#2563EB] hover:underline">Release Management</Link> |{" "}
            <Link href="/ServiceConfiguration" className="hover:text-[#2563EB] hover:underline">Service Configuration Management</Link> |{" "}
            <Link href="/DeploymentManagement" className="hover:text-[#2563EB] hover:underline">Deployment Management</Link> |{" "}
            <Link href="/ItAssetManagement" className="hover:text-[#2563EB] hover:underline">IT Asset Management</Link> |{" "}
            <Link href="/ContinuationImprovement" className="hover:text-[#2563EB] hover:underline">Continual Improvement</Link> |{" "}
            <Link href="/RelationshipManagement" className="hover:text-[#2563EB] hover:underline">Relationship Management</Link> |{" "}
            <Link href="/ServiceLevelManagement" className="hover:text-[#2563EB] hover:underline">Service Level Management</Link> |{" "}
            <Link href="/InformationSecurityMan" className="hover:text-[#2563EB] hover:underline">Information Security Management</Link> |{" "}
            <Link href="/SupplierManagement" className="hover:text-[#2563EB] hover:underline">Supplier Management</Link> |{" "}
            <Link href="/MonitorSupportFulfil" className="hover:text-[#2563EB] hover:underline">Monitor, Support &amp; Fulfil</Link>
          </p>

          <p>
            <span className="font-bold text-gray-900">Project &amp; Program Management: </span>
            <Link href="/PMP" className="hover:text-[#2563EB] hover:underline">PMP Certification Training</Link> |{" "}
            <Link href="/ACP" className="hover:text-[#2563EB] hover:underline">ACP Certification Training</Link> |{" "}
            <Link href="/Prince2Foundation" className="hover:text-[#2563EB] hover:underline">PRINCE2 Foundation Training</Link> |{" "}
            <Link href="/Prince2Practitioner" className="hover:text-[#2563EB] hover:underline">PRINCE2 Practitioner Training</Link> |{" "}
            <Link href="/Prince2AgileFoundation" className="hover:text-[#2563EB] hover:underline">PRINCE2 Agile Foundation</Link> |{" "}
            <Link href="/Prince2AgilePractitioner" className="hover:text-[#2563EB] hover:underline">PRINCE2 Agile Practitioner</Link> |{" "}
            <Link href="/MSPFoundation" className="hover:text-[#2563EB] hover:underline">MSP Foundation Training</Link> |{" "}
            <Link href="/MSPPractitioner" className="hover:text-[#2563EB] hover:underline">MSP Practitioner Training</Link>
          </p>

          <p>
            <span className="font-bold text-gray-900">Agile, Scrum &amp; Kanban: </span>
            <Link href="/LeadingSAFeAgilist" className="hover:text-[#2563EB] hover:underline">Leading SAFe Agilist</Link> |{" "}
            <Link href="/SAFePO-PM" className="hover:text-[#2563EB] hover:underline">SAFe PO/PM Certification</Link> |{" "}
            <Link href="/SAFeforTeams" className="hover:text-[#2563EB] hover:underline">SAFe for Teams</Link> |{" "}
            <Link href="/SAFeScrumMaster" className="hover:text-[#2563EB] hover:underline">SAFe Scrum Master</Link> |{" "}
            <Link href="/SAFeAdvancedScrumMaster" className="hover:text-[#2563EB] hover:underline">SAFe Advanced Scrum Master</Link> |{" "}
            <Link href="/PScrumM1" className="hover:text-[#2563EB] hover:underline">Professional Scrum Master I (PSM I)</Link> |{" "}
            <Link href="/PScrumM2" className="hover:text-[#2563EB] hover:underline">Professional Scrum Master II (PSM II)</Link> |{" "}
            <Link href="/PSPO1" className="hover:text-[#2563EB] hover:underline">Professional Scrum Product Owner I (PSPO I)</Link> |{" "}
            <Link href="/PSPO2" className="hover:text-[#2563EB] hover:underline">Professional Scrum Product Owner II (PSPO II)</Link> |{" "}
            <Link href="/PSK1" className="hover:text-[#2563EB] hover:underline">Professional Scrum with Kanban (PSK I)</Link> |{" "}
            <Link href="/CSM" className="hover:text-[#2563EB] hover:underline">Certified Scrum Master (CSM)</Link> |{" "}
            <Link href="/CASM" className="hover:text-[#2563EB] hover:underline">Certified Advanced Scrum Master (CASM)</Link> |{" "}
            <Link href="/CSPO" className="hover:text-[#2563EB] hover:underline">Certified Scrum Product Owner (CSPO)</Link> |{" "}
            <Link href="/ICP-ACC" className="hover:text-[#2563EB] hover:underline">ICP-ACC Agile Coaching</Link>
          </p>

          <p>
            <span className="font-bold text-gray-900">Quality Management: </span>
            <Link href="/LeanSSGB" className="hover:text-[#2563EB] hover:underline">Lean Six Sigma Green Belt Training &amp; Certification</Link> |{" "}
            <Link href="/LeanSSBB" className="hover:text-[#2563EB] hover:underline">Lean Six Sigma Black Belt Training &amp; Certification</Link>
          </p>

          <p>
            <span className="font-bold text-gray-900">DevOps &amp; Business Analysis: </span>
            <Link href="/DevopsFoundation" className="hover:text-[#2563EB] hover:underline">DevOps Foundation Certification Training</Link> |{" "}
            <Link href="/DevopsMaster" className="hover:text-[#2563EB] hover:underline">DevOps Master Certification Training</Link> |{" "}
            <Link href="/SREFoundation" className="hover:text-[#2563EB] hover:underline">SRE Foundation Training</Link> |{" "}
            <Link href="/SREPractitioner" className="hover:text-[#2563EB] hover:underline">SRE Practitioner Training</Link> |{" "}
            <Link href="/BusinessAnalysisF" className="hover:text-[#2563EB] hover:underline">Business Analysis Foundation</Link> |{" "}
            <Link href="/BusinessAnalysisP" className="hover:text-[#2563EB] hover:underline">Business Analysis Practitioner</Link> |{" "}
            <Link href="/AgileBA" className="hover:text-[#2563EB] hover:underline">Agile Business Analysis</Link>
          </p>

          <p>
            <span className="font-bold text-gray-900">Software Testing: </span>
            <Link href="/ISTQBF" className="hover:text-[#2563EB] hover:underline">ISTQB Foundation Training &amp; Certification</Link> |{" "}
            <Link href="/ISTQBA" className="hover:text-[#2563EB] hover:underline">ISTQB Advanced Training &amp; Certification</Link>
          </p>

        </div>
      </div>
    </section>
  );
}
