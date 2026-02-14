import React, { useState } from 'react';
import { Building2, TrendingUp, Users, Mail, Phone, MapPin, Linkedin, ChevronRight, CheckCircle2, Globe, Shield, Briefcase } from 'lucide-react';

export default function OrcaTriadWebsite() {
  const colors = {
    primary: 'rgb(26, 35, 50)',
    primaryHover: 'rgb(15, 23, 35)',
    accent: 'rgb(184, 148, 111)',
    background: 'rgb(248, 246, 243)',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    assetClass: '',
    transactionSize: '',
    location: '',
    timeline: '',
    message: '',
    referral: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projects = [
    {
      title: "Brickell Luxury Residences",
      type: "Multifamily",
      location: "Miami, FL",
      amount: "$45M Construction Loan",
      description: "Secured senior construction financing for 180-unit luxury high-rise. Structured multi-tranche debt facility with regional bank and mezzanine lender.",
      image: "/images/project-brickell.jpg"
    },
    {
      title: "Coral Gables Mixed-Use",
      type: "Mixed-Use",
      location: "Coral Gables, FL",
      amount: "$32M Debt + Equity",
      description: "Arranged complete capital stack including senior debt and preferred equity for ground-up mixed-use development.",
      image: "/images/project-coral-gables.jpg"
    },
    {
      title: "Fort Lauderdale Office Tower",
      type: "Office",
      location: "Fort Lauderdale, FL",
      amount: "$28M Acquisition Financing",
      description: "Placed bridge acquisition financing for Class A office building, enabling sponsor to capitalize on market opportunity.",
      image: "/images/project-fort-lauderdale.jpg"
    },
    {
      title: "West Palm Industrial Portfolio",
      type: "Industrial",
      location: "West Palm Beach, FL",
      amount: "$55M Portfolio Loan",
      description: "Structured portfolio financing across five industrial assets, optimizing leverage and cash flow for institutional investor.",
      image: "/images/project-west-palm.jpg"
    },
    {
      title: "Miami Beach Hospitality",
      type: "Hospitality",
      location: "Miami Beach, FL",
      amount: "$40M Recapitalization",
      description: "Facilitated complete recapitalization including refinancing and growth equity from family office investor.",
      image: "/images/project-miami-beach.jpg"
    },
    {
      title: "South Florida Multifamily Portfolio",
      type: "Multifamily",
      location: "Multiple Markets",
      amount: "$72M Equity Placement",
      description: "Raised institutional equity from pension fund for value-add multifamily portfolio across South Florida submarkets.",
      image: "/images/project-multifamily.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/logo.png" alt="Orca Triad Advisors" className="h-8 md:h-10" />
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="px-6 py-2 text-white transition-colors" style={{ backgroundColor: colors.primary }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-window.jpg" alt="" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm mb-6 rounded-full">
              20 Years Experience | Domestic &amp; International Markets
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Strategic Capital Solutions for <span className="font-normal">Visionary Real Estate Projects</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl">
              We help you navigate the treacherous waters of commercial real estate and private capital raises.
            </p>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-3xl">
              Debt and equity placement across all asset classes. Trusted advisor to developers and businesses seeking strategic financing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                Schedule a Consultation
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-colors">
                View Our Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                A Trusted Partner in <span className="font-normal">Private Capital Markets</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Orca Triad Advisors serves as a strategic intermediary connecting developers and businesses with the capital that fuels growth and innovation. With 20 years of specialized experience in private capital markets, principal Sandra Flores has built a reputation for integrity, market intelligence, and results-driven advisory.
                </p>
                <p>
                  Serving clients across the United States and internationally, we leverage deep relationships across institutional lenders, private equity funds, family offices, debt funds, and sovereign wealth investors. Our boutique approach ensures personalized attention and creative structuring for even the most complex transactions.
                </p>
                <p>
                  Whether you're seeking debt placement for an acquisition, equity capital for development, or strategic refinancing, Orca Triad delivers tailored solutions that align with your long-term objectives.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <Building2 className="w-10 h-10 text-gray-900 mb-4" />
                <div className="text-3xl font-light text-gray-900 mb-2">500M+</div>
                <div className="text-sm text-gray-600">Capital Placed</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <TrendingUp className="w-10 h-10 text-gray-900 mb-4" />
                <div className="text-3xl font-light text-gray-900 mb-2">100+</div>
                <div className="text-sm text-gray-600">Projects Funded</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <Users className="w-10 h-10 text-gray-900 mb-4" />
                <div className="text-3xl font-light text-gray-900 mb-2">20</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <CheckCircle2 className="w-10 h-10 text-gray-900 mb-4" />
                <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Markets We Serve</h2>
            <p className="text-xl text-gray-400">Domestic and international capital placement across key markets</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-gray-400" />
                <h3 className="text-2xl font-light">United States</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Full-service capital advisory across major U.S. markets, covering all asset classes with deep lender and investor relationships.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Florida', 'Texas', 'Georgia', 'California', 'New York', 'New Jersey', 'North Carolina', 'Illinois'].map((state) => (
                  <span key={state} className="px-4 py-2 border border-gray-700 text-gray-300 text-sm rounded-full">
                    {state}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-gray-400" />
                <h3 className="text-2xl font-light">International</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Specialized advisory for cross-border transactions and complex international capital placements in select global markets.
              </p>
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Europe &amp; Middle East</div>
                <div className="flex flex-wrap gap-3">
                  {['England', 'Spain', 'France', 'Turkey'].map((country) => (
                    <span key={country} className="px-4 py-2 border border-gray-700 text-gray-300 text-sm rounded-full">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-3 uppercase tracking-wider">South America</div>
                <div className="flex flex-wrap gap-3">
                  {['Peru', 'Bolivia', 'Argentina', 'Chile'].map((country) => (
                    <span key={country} className="px-4 py-2 border border-gray-700 text-gray-300 text-sm rounded-full">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Transactions Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm mb-6 rounded-full">
                Specialized Expertise
              </div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Complex Transactions <span className="font-normal">Require Expert Navigation</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Not every transaction fits a conventional lending box. Orca Triad Advisors specializes in structuring capital solutions for complex transactions where traditional lending institutions are unable to proceed due to heightened regulatory compliance requirements.
                </p>
                <p>
                  Our team has extensive experience navigating transactions involving OFAC (Office of Foreign Assets Control) screening considerations, Anti-Money Laundering (AML) compliance complexities, and other regulatory challenges that require specialized knowledge and creative structuring.
                </p>
                <p>
                  Where others see obstacles, we identify pathways. Our deep understanding of compliance frameworks, combined with our network of specialized capital providers, enables us to deliver results for transactions that demand a higher level of expertise and diligence.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-lg">
              <Shield className="w-12 h-12 text-gray-900 mb-6" />
              <h3 className="text-xl font-medium text-gray-900 mb-6">Our Compliance-Ready Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Thorough due diligence and regulatory assessment</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">OFAC and AML compliance navigation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Access to specialized lenders experienced in complex compliance scenarios</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Creative capital structuring for non-traditional transactions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Cross-border transaction expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Now 3 cards */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600">Comprehensive capital placement across debt, equity, and strategic advisory</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Debt Placement */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-gray-900 transition-all">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-lg mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Debt Placement</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We arrange senior loans, mezzanine financing, uni-tranche structures, and asset-based lending through our extensive network of institutional capital sources.
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-3">Our Debt Relationships Include:</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Commercial banks and regional lenders</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Debt funds and specialty lenders</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Insurance companies</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Institutional lenders and CDFIs</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-3">Transaction Types:</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Acquisition financing</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Construction and development loans</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Bridge financing</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Recapitalizations and refinancing</li>
                </ul>
              </div>

              <a href="#contact" className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
                Discuss Debt Financing <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>

            {/* Equity Placement */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-gray-900 transition-all">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-lg mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Equity Placement</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We facilitate equity raises from sophisticated institutional and private investors, structuring investments that balance capital needs with ownership objectives.
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-3">Our Equity Relationships Include:</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Private equity funds</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Family offices</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Pension funds and endowments</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Sovereign wealth funds</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-3">Transaction Types:</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Growth capital and expansion</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Joint venture equity</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Preferred equity structures</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Shareholder liquidity solutions</li>
                </ul>
              </div>

              <a href="#contact" className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
                Discuss Equity Capital <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>

            {/* Advisory & Industry Experts */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-gray-900 transition-all">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-lg mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Advisory &amp; Industry Experts</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond capital placement, we provide strategic advisory services backed by a curated network of industry experts who bring specialized knowledge to every engagement.
              </p>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-3">Advisory Capabilities:</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Capital structure optimization</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Market analysis and positioning</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Regulatory and compliance guidance</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Cross-border transaction advisory</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-900 mb-3">Expert Network:</div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Real estate and development specialists</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Legal and compliance professionals</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> Tax and financial structuring advisors</li>
                  <li className="flex items-start"><span className="mr-2">&bull;</span> International market consultants</li>
                </ul>
              </div>

              <a href="#contact" className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors text-sm font-medium">
                Explore Advisory Services <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">A comprehensive, client-focused process from opportunity to closing</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">1</div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Discovery &amp; Strategy</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Understanding your objectives and developing a tailored capital strategy aligned with your goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">2</div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Market Positioning</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Identifying and approaching the most appropriate lenders and investors for your specific transaction.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">3</div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Negotiation &amp; Structuring</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Managing all communications and negotiating terms that optimize pricing and flexibility.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">4</div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">Execution &amp; Closing</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Shepherding the transaction through documentation and closing for smooth execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Select Transactions</h2>
            <p className="text-xl text-gray-600">Representative capital placements across asset classes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-900 transition-all group">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3">
                    {project.type}
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h4>
                  <div className="text-sm text-gray-500 mb-2">{project.location}</div>
                  <div className="text-lg font-light text-gray-900 mb-4">{project.amount}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">Project details are representative examples. Specific transaction details may be modified to protect client confidentiality.</p>
          </div>
        </div>
      </section>

      {/* About Sandra */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <Users className="w-32 h-32 text-gray-400" />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm mb-4 rounded-full">
                Principal &amp; Founder
              </div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">Meet Sandra Flores</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Sandra Flores founded Orca Triad Advisors with a vision to provide developers and businesses with sophisticated capital advisory typically reserved for large institutional sponsors. With 20 years of experience in private capital markets, Sandra has built a reputation for integrity, creativity, and results.
                </p>
                <p>
                  Throughout her career, Sandra has arranged hundreds of millions in debt and equity placements across commercial real estate, infrastructure, and specialty assets. Her deep relationships with institutional lenders, private equity funds, family offices, and debt funds enable her clients to access capital that moves transactions forward.
                </p>
                <p>
                  Based in South Florida and serving clients across the United States, Europe, and South America, Sandra has become a trusted advisor to developers and investors navigating complex transactions. Her expertise spans the full capital stack&mdash;from senior debt through preferred and common equity&mdash;and across all asset classes, with particular strength in multifamily, mixed-use, and commercial development.
                </p>
              </div>
              <a href="https://www.linkedin.com/in/sandra-flores" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Pod CTA */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Join Our Pod</h2>
          <p className="text-xl text-gray-400 mb-4 leading-relaxed">
            Are you a business expert, industry specialist, or capital markets professional looking to collaborate on complex transactions?
          </p>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Orca Triad partners with experienced professionals who bring specialized expertise to our clients' most critical capital needs. Join our network of trusted advisors and help shape the future of private capital markets.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors text-lg font-medium">
            Join Our Pod
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Confidential consultations for qualified projects</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Sandra Flores</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Phone</div>
                      <a href="tel:+12027586990" className="text-gray-900 hover:text-gray-600">(202) 758-6990</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <a href="mailto:sandra@orcatriad.com" className="text-gray-900 hover:text-gray-600">sandra@orcatriad.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="text-gray-900">South Florida</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/sandra-flores" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">Sandra Flores</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-white p-12 rounded-lg border border-gray-200 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your inquiry has been received. Sandra will review your information and respond within 1-2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Project Type *</label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        <option value="debt">Debt Financing</option>
                        <option value="equity">Equity Placement</option>
                        <option value="both">Debt + Equity</option>
                        <option value="refinancing">Refinancing</option>
                        <option value="advisory">Advisory Services</option>
                        <option value="partnership">Join Our Pod</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Asset Class</label>
                      <select
                        name="assetClass"
                        value={formData.assetClass}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        <option value="multifamily">Multifamily</option>
                        <option value="office">Office</option>
                        <option value="retail">Retail</option>
                        <option value="industrial">Industrial</option>
                        <option value="mixed-use">Mixed-Use</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="other">Other/Multiple</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Transaction Size</label>
                      <select
                        name="transactionSize"
                        value={formData.transactionSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        <option value="under10">Under $10M</option>
                        <option value="10-25">$10M - $25M</option>
                        <option value="25-50">$25M - $50M</option>
                        <option value="50-100">$50M - $100M</option>
                        <option value="100plus">$100M+</option>
                        <option value="undisclosed">Prefer not to disclose</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Message / Project Details *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Please provide a brief description of your project and capital needs..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" required className="mt-1" />
                      <span className="text-sm text-gray-600">
                        I understand this information will be kept confidential and used solely to evaluate potential engagement.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Confidentially
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src="/logo-white.png" alt="Orca Triad Advisors" className="h-8 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Strategic Capital Placement | Debt &amp; Equity Advisory
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Sandra Flores</p>
                <p>(202) 758-6990</p>
                <p>sandra@orcatriad.com</p>
                <p>South Florida</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Orca Triad Advisors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
