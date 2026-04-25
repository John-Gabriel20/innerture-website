const careerData = {
    forensics: {
        name:'Digital Forensic', accent:'#8f6dff',
        accentDim:'rgba(143,109,255,0.10)', accentGlow:'rgba(143,109,255,0.25)',
        reviews:[
            {
                title:'Evidence Analyst', tag:'Forensics',
                grit:8, salary:[66,78,92],
                quote:'Sifting through disk images is quiet work, but finding the one trace that proves the case never gets old.',
                ratings:{ workplace:7, tasks:8, entry:5, environment:6, connections:6, daysOff:7 },
                tags:[
                    { label:'Lab environment', type:'neu' },
                    { label:'Detail-oriented', type:'pos' },
                    { label:'Long investigations', type:'neg' },
                ],
                insights:{
                    workplace:'Mostly lab-based with secure systems and strict chain-of-custody protocols.',
                    tasks:'Disk imaging, timeline reconstruction, artifact extraction, report writing.',
                    entry:'A background in security or IT helps. Certifications like GCFA are valuable.',
                    environment:'Methodical and patient. Rushing can destroy evidence.',
                    connections:'Collaborates with legal, incident responders, and law enforcement.',
                    daysOff:'Generally stable, but major cases can stretch timelines.',
                }
            },
            {
                title:'Malware Investigator', tag:'Threat Analysis',
                grit:9, salary:[72,86,101],
                quote:'Reverse engineering an insider threat often feels like solving a cold case with code.',
                ratings:{ workplace:8, tasks:9, entry:4, environment:6, connections:7, daysOff:6 },
                tags:[
                    { label:'Deep technical skill', type:'pos' },
                    { label:'High pressure', type:'neg' },
                    { label:'Forensic tools', type:'neu' },
                ],
                insights:{
                    workplace:'Secure environments and isolated analysis systems are normal.',
                    tasks:'Binary analysis, malware detonation, behavioral profiling.',
                    entry:'Strong programming and reverse-engineering skills are essential.',
                    environment:'Requires focus and a tolerance for ambiguity.',
                    connections:'Often works with incident response teams and threat intel.',
                    daysOff:'Deadlines around active investigations can be demanding.',
                }
            },
            {
                title:'Case Coordinator', tag:'Legal Support',
                grit:7, salary:[64,76,89],
                quote:'Translating forensic data into a story a jury can follow is the most important part.',
                ratings:{ workplace:7, tasks:7, entry:6, environment:7, connections:8, daysOff:8 },
                tags:[
                    { label:'Court-ready reports', type:'neu' },
                    { label:'Stakeholder communication', type:'pos' },
                    { label:'Document-heavy', type:'neg' },
                ],
                insights:{
                    workplace:'Balanced between labs and legal meetings.',
                    tasks:'Preparing evidence summaries, liaising with counsel, documenting findings.',
                    entry:'Experience in forensics plus report writing is ideal.',
                    environment:'Structured and precise, with high accountability.',
                    connections:'Strong ties to legal, compliance, and executive leadership.',
                    daysOff:'Typically stable outside of active litigation periods.',
                }
            },
        ]
    },
    cyber_cons: {
        name:'Cybersecurity Consultant', accent:'#32ff7e',
        accentDim:'rgba(50,255,126,0.10)', accentGlow:'rgba(50,255,126,0.25)',
        reviews:[
            {
                title:'Risk Advisor', tag:'Consulting',
                grit:8, salary:[72,88,104],
                quote:'Advising executives is part technical, part diplomacy, and always about trust.',
                ratings:{ workplace:7, tasks:8, entry:5, environment:7, connections:9, daysOff:6 },
                tags:[
                    { label:'Client-facing', type:'neu' },
                    { label:'Process-driven', type:'neu' },
                    { label:'Strategic impact', type:'pos' },
                ],
                insights:{
                    workplace:'Mix of client sites, remote work, and conference rooms.',
                    tasks:'Assessments, strategy sessions, policy development.',
                    entry:'Experience in security operations plus advisory skills helps.',
                    environment:'Fast-paced with shifting priorities.',
                    connections:'Exposure to executive and technical stakeholders alike.',
                    daysOff:'Can vary around project deadlines.',
                }
            },
            {
                title:'Security Architect', tag:'Advisory',
                grit:9, salary:[85,102,118],
                quote:'A strong security blueprint is only as good as the people who follow it.',
                ratings:{ workplace:8, tasks:9, entry:4, environment:7, connections:8, daysOff:7 },
                tags:[
                    { label:'High responsibility', type:'pos' },
                    { label:'Client delivery', type:'neg' },
                    { label:'CISSP-friendly', type:'neu' },
                ],
                insights:{
                    workplace:'Mostly remote with periodic client workshops.',
                    tasks:'Architecture reviews, threat modeling, vendor vetting.',
                    entry:'Deep security knowledge and consulting presence are critical.',
                    environment:'Influential but occasionally political.',
                    connections:'Works directly with senior IT leaders.',
                    daysOff:'Typically steady outside audit periods.',
                }
            },
            {
                title:'Compliance Specialist', tag:'Governance',
                grit:7, salary:[68,82,95],
                quote:'Helping a company pass audits feels boring until the breach never happens.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:6, connections:9, daysOff:7 },
                tags:[
                    { label:'Regulation-heavy', type:'neg' },
                    { label:'Strong documentation', type:'neu' },
                    { label:'Cross-functional', type:'pos' },
                ],
                insights:{
                    workplace:'Office and remote work with lots of stakeholder meetings.',
                    tasks:'Gap analysis, control mapping, audit preparation.',
                    entry:'ISO, SOC2, or NIST knowledge is highly useful.',
                    environment:'Organized and detail-focused.',
                    connections:'Close to compliance, legal, and security teams.',
                    daysOff:'Fairly consistent outside audit ramps.',
                }
            },
        ]
    },
    pen_tester: {
        name:'Penetration Tester', accent:'#ff4d6d',
        accentDim:'rgba(255,77,109,0.10)', accentGlow:'rgba(255,77,109,0.25)',
        reviews:[
            {
                title:'Red Team Operator', tag:'Offense',
                grit:9, salary:[80,96,112],
                quote:'Every engagement is a puzzle, and the best ones expose what nobody expected.',
                ratings:{ workplace:8, tasks:9, entry:5, environment:8, connections:8, daysOff:6 },
                tags:[
                    { label:'Travel common', type:'neu' },
                    { label:'Tight deadlines', type:'neg' },
                    { label:'Highly technical', type:'pos' },
                ],
                insights:{
                    workplace:'Laptop-based, often remote or on client sites.',
                    tasks:'Recon, exploitation, lateral movement, reporting.',
                    entry:'OSCP and hands-on labs are strong differentiators.',
                    environment:'Fast and variable. No two days are the same.',
                    connections:'Peers in infosec and client security teams.',
                    daysOff:'Project-based with intense bursts.',
                }
            },
            {
                title:'Application Tester', tag:'Web Security',
                grit:8, salary:[75,89,103],
                quote:'A broken login flow can be the easiest way in, which makes the role constantly challenging.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:7, connections:7, daysOff:7 },
                tags:[
                    { label:'Bug bounty style', type:'pos' },
                    { label:'Repetitive scans', type:'neg' },
                    { label:'Creative problem-solving', type:'pos' },
                ],
                insights:{
                    workplace:'Desk-based with many tools and code review sessions.',
                    tasks:'Fuzzing, source review, exploit validation.',
                    entry:'Web app knowledge and scripting skills are essential.',
                    environment:'Collaborative with other testers.',
                    connections:'Interacts with developers and security engineers.',
                    daysOff:'Flexible when freelance.',
                }
            },
            {
                title:'Control Tester', tag:'Audit',
                grit:7, salary:[70,84,98],
                quote:'Testing controls is unspectacular, but it keeps the whole security program honest.',
                ratings:{ workplace:7, tasks:7, entry:7, environment:6, connections:7, daysOff:8 },
                tags:[
                    { label:'Evidence-led', type:'neu' },
                    { label:'Less glamour', type:'neg' },
                    { label:'Very valuable', type:'pos' },
                ],
                insights:{
                    workplace:'Structured and documentation-heavy.',
                    tasks:'Control tests, remediation follow-up, risk analysis.',
                    entry:'Framework knowledge is helpful.',
                    environment:'Steady and process-driven.',
                    connections:'Supports audit and security teams.',
                    daysOff:'Predictable outside assessment windows.',
                }
            },
        ]
    },
    sec_analyst: {
        name:'Security Analyst', accent:'#fae100',
        accentDim:'rgba(250,225,0,0.10)', accentGlow:'rgba(250,225,0,0.25)',
        reviews:[
            {
                title:'Threat Analyst', tag:'Monitoring',
                grit:8, salary:[68,82,95],
                quote:'A good analyst catches the needle in the haystack before it becomes a fire.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:7, connections:8, daysOff:7 },
                tags:[
                    { label:'Alert-heavy', type:'neg' },
                    { label:'Timely responses', type:'pos' },
                    { label:'Team collaboration', type:'pos' },
                ],
                insights:{
                    workplace:'SOC screens and ticket queues define the day.',
                    tasks:'Alert triage, log review, escalation coordination.',
                    entry:'Certs like CySA+ help, but persistence matters most.',
                    environment:'Sometimes stressful, but very impactful.',
                    connections:'Works across IT, security, and management.',
                    daysOff:'Rotating shifts can make time off irregular.',
                }
            },
            {
                title:'Incident Responder', tag:'Response',
                grit:9, salary:[74,88,102],
                quote:'When an incident hits, your reaction speed matters more than your tools.',
                ratings:{ workplace:8, tasks:9, entry:5, environment:7, connections:8, daysOff:6 },
                tags:[
                    { label:'High stakes', type:'neg' },
                    { label:'Mission-critical', type:'pos' },
                    { label:'Learning-rich', type:'pos' },
                ],
                insights:{
                    workplace:'Remote or on-call with rapid response demands.',
                    tasks:'Containment, root cause analysis, remediation guidance.',
                    entry:'Practical experience and calmness under pressure rule.',
                    environment:'Fast-moving during incidents.',
                    connections:'Work closely with ops and leadership.',
                    daysOff:'Compressed during active events.',
                }
            },
            {
                title:'SOC Engineer', tag:'Operations',
                grit:7, salary:[66,79,92],
                quote:'Keeping the SOC tools tuned is invisible work, but it makes the whole team better.',
                ratings:{ workplace:7, tasks:7, entry:7, environment:6, connections:6, daysOff:8 },
                tags:[
                    { label:'Tool maintenance', type:'neu' },
                    { label:'Operational focus', type:'neu' },
                    { label:'Stable pace', type:'pos' },
                ],
                insights:{
                    workplace:'Behind-the-scenes operations with lots of dashboards.',
                    tasks:'Rule tuning, threat intel ingestion, incident support.',
                    entry:'Technical skills in SIEM and logs are useful.',
                    environment:'More stable than front-line analyst work.',
                    connections:'Supports analysts and response teams.',
                    daysOff:'Typically predictable outside deployments.',
                }
            },
        ]
    },
    video_ed: {
        name:'Video Editor', accent:'#00d3ff',
        accentDim:'rgba(0,211,255,0.10)', accentGlow:'rgba(0,211,255,0.25)',
        reviews:[
            {
                title:'Post-Production Artist', tag:'Editing',
                grit:7, salary:[62,78,94],
                quote:'Every frame matters, and the best edits feel effortless even when they take all night.',
                ratings:{ workplace:6, tasks:8, entry:7, environment:6, connections:6, daysOff:6 },
                tags:[
                    { label:'Creative flow', type:'pos' },
                    { label:'Deadline pressure', type:'neg' },
                    { label:'Tool expertise', type:'neu' },
                ],
                insights:{
                    workplace:'Studio suites and remote workflows are both common.',
                    tasks:'Cutting, grading, sound mix, client revisions.',
                    entry:'A strong reel is more important than a degree.',
                    environment:'Intense around deadlines, calm in between.',
                    connections:'Works with directors and producers.',
                    daysOff:'Variable depending on projects.',
                }
            },
            {
                title:'Motion Graphics Artist', tag:'Animation',
                grit:8, salary:[68,84,100],
                quote:'Animating motion is both technical and expressive — every frame counts.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:7, connections:7, daysOff:7 },
                tags:[
                    { label:'After Effects', type:'neu' },
                    { label:'Render times', type:'neg' },
                    { label:'Visual reward', type:'pos' },
                ],
                insights:{
                    workplace:'Mostly screen time with regular review sessions.',
                    tasks:'Animating, compositing, timing, polishing.',
                    entry:'Skills and a strong showreel matter most.',
                    environment:'Solitary but collaborative in feedback loops.',
                    connections:'Interacts with creative and production teams.',
                    daysOff:'Good if workflow is balanced.',
                }
            },
            {
                title:'Colourist', tag:'Grading',
                grit:7, salary:[70,85,99],
                quote:'A great grade can make the difference between amateur and cinematic.',
                ratings:{ workplace:7, tasks:7, entry:6, environment:7, connections:6, daysOff:7 },
                tags:[
                    { label:'Colour precision', type:'pos' },
                    { label:'Client feedback', type:'neg' },
                    { label:'Creative nuance', type:'pos' },
                ],
                insights:{
                    workplace:'Dark rooms with calibrated screens are the norm.',
                    tasks:'Color matching, grading, LUT creation, final delivery.',
                    entry:'Showreel and color knowledge open doors.',
                    environment:'Focused and detail-oriented.',
                    connections:'Works with directors and editors.',
                    daysOff:'Usually stable unless on a tight release.',
                }
            },
        ]
    },
    content_cre: {
        name:'Content Creator', accent:'#ff6bf3',
        accentDim:'rgba(255,107,243,0.10)', accentGlow:'rgba(255,107,243,0.25)',
        reviews:[
            {
                title:'Social Media Producer', tag:'Brand',
                grit:6, salary:[50,66,80],
                quote:'The algorithm decides your success, but consistency and niche make the difference.',
                ratings:{ workplace:9, tasks:5, entry:9, environment:6, connections:7, daysOff:9 },
                tags:[
                    { label:'Self-driven', type:'pos' },
                    { label:'Platform risk', type:'neg' },
                    { label:'Creative freedom', type:'pos' },
                ],
                insights:{
                    workplace:'Anywhere with a camera and internet.',
                    tasks:'Ideas, filming, editing, posting, analytics.',
                    entry:'No formal gatekeepers, just persistence.',
                    environment:'Flexible but often isolating.',
                    connections:'Built through collaborations and sponsorships.',
                    daysOff:'Feels flexible until growth demands daily output.',
                }
            },
            {
                title:'Brand Storyteller', tag:'Copy & Visuals',
                grit:7, salary:[57,70,85],
                quote:'A strong story can turn a product post into a loyal community moment.',
                ratings:{ workplace:8, tasks:6, entry:7, environment:7, connections:8, daysOff:8 },
                tags:[
                    { label:'Narrative focus', type:'pos' },
                    { label:'Constant iteration', type:'neg' },
                    { label:'Community building', type:'pos' },
                ],
                insights:{
                    workplace:'Home studio, coffee shops, and client sets.',
                    tasks:'Scripting, visuals, captions, engagement.',
                    entry:'Great content and consistency beat credentials.',
                    environment:'Creative but requires discipline.',
                    connections:'Works with brands, creators, and audiences.',
                    daysOff:'Depends on momentum and campaign cycles.',
                }
            },
            {
                title:'Growth Creator', tag:'Strategy',
                grit:7, salary:[60,75,90],
                quote:'Growth comes from understanding your audience more than chasing every trend.',
                ratings:{ workplace:8, tasks:7, entry:8, environment:6, connections:9, daysOff:7 },
                tags:[
                    { label:'Analytics-heavy', type:'neu' },
                    { label:'Brand deals', type:'pos' },
                    { label:'Platform volatility', type:'neg' },
                ],
                insights:{
                    workplace:'Flexible schedule with content blocks.',
                    tasks:'Publishing, optimization, community replies.',
                    entry:'Consistency and a strong voice are your biggest assets.',
                    environment:'Fast-moving and audience-driven.',
                    connections:'Network of sponsors, collaborators, and followers.',
                    daysOff:'Often blurred with work time.',
                }
            },
        ]
    },
    creative_prod: {
        name:'Creative Producer', accent:'#ff7f2a',
        accentDim:'rgba(255,127,42,0.10)', accentGlow:'rgba(255,127,42,0.25)',
        reviews:[
            {
                title:'Production Coordinator', tag:'Logistics',
                grit:7, salary:[64,78,92],
                quote:'Keeping a shoot on schedule is the greatest creative challenge of all.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:7, connections:9, daysOff:6 },
                tags:[
                    { label:'People management', type:'neu' },
                    { label:'Long hours', type:'neg' },
                    { label:'High variety', type:'pos' },
                ],
                insights:{
                    workplace:'Split between office planning and on-set coordination.',
                    tasks:'Scheduling, budgets, crew management, deliveries.',
                    entry:'Experience in production assistance is the usual path.',
                    environment:'Dynamic and deadline-driven.',
                    connections:'Close with creatives, directors, and clients.',
                    daysOff:'Often compressed near shoots.',
                }
            },
            {
                title:'Shoot Manager', tag:'Execution',
                grit:8, salary:[70,84,98],
                quote:'A successful shoot feels effortless if your production plan was strong.',
                ratings:{ workplace:8, tasks:8, entry:5, environment:8, connections:9, daysOff:6 },
                tags:[
                    { label:'High stakes', type:'neg' },
                    { label:'Leadership', type:'pos' },
                    { label:'Client-facing', type:'neu' },
                ],
                insights:{
                    workplace:'On set, in meetings, and in email threads simultaneously.',
                    tasks:'Run sheets, crew briefings, delivery logistics.',
                    entry:'Proven production experience is essential.',
                    environment:'Fast and highly visible.',
                    connections:'Matchmaker between creative and operational teams.',
                    daysOff:'Rare during active shoots.',
                }
            },
            {
                title:'Creative Operations Lead', tag:'Strategy',
                grit:8, salary:[75,90,105],
                quote:'Setting up teams to create consistently is the real power of the role.',
                ratings:{ workplace:7, tasks:8, entry:5, environment:7, connections:9, daysOff:7 },
                tags:[
                    { label:'Cross-functional', type:'pos' },
                    { label:'Planning heavy', type:'neu' },
                    { label:'Pressure moments', type:'neg' },
                ],
                insights:{
                    workplace:'Blend of planning sessions and stakeholder alignment.',
                    tasks:'Pipeline management, vendor relationships, risk mitigation.',
                    entry:'Strong organizational skills and production knowledge.',
                    environment:'High influence with shifting priorities.',
                    connections:'Knows everyone from creatives to finance.',
                    daysOff:'Better once processes are stable.',
                }
            },
        ]
    },
    photog_video: {
        name:'Photographer/Videographer', accent:'#7cff66',
        accentDim:'rgba(124,255,102,0.10)', accentGlow:'rgba(124,255,102,0.25)',
        reviews:[
            {
                title:'Location Shooter', tag:'Capture',
                grit:7, salary:[60,74,88],
                quote:'The right light can turn an ordinary moment into a cinematic memory.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:7, connections:7, daysOff:7 },
                tags:[
                    { label:'Outdoor shoots', type:'neu' },
                    { label:'Gear intensive', type:'neu' },
                    { label:'Creative freedom', type:'pos' },
                ],
                insights:{
                    workplace:'On set and in varied environments, from studios to city streets.',
                    tasks:'Camera setup, framing, lighting, shooting, reviewing footage.',
                    entry:'Portfolio and technical confidence matter most.',
                    environment:'Physically active and visually demanding.',
                    connections:'Works closely with directors, producers, and clients.',
                    daysOff:'Often project-driven with busy shoot periods.',
                }
            },
            {
                title:'Post Production Artist', tag:'Editing',
                grit:7, salary:[64,78,92],
                quote:'Editing is where footage becomes a story, and every frame counts.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:7, connections:6, daysOff:7 },
                tags:[
                    { label:'Editing workflow', type:'neu' },
                    { label:'Close attention', type:'pos' },
                    { label:'Timeline pressure', type:'neg' },
                ],
                insights:{
                    workplace:'Mix of studio edit bays and remote editing sessions.',
                    tasks:'Cutting clips, color work, sound sync, client review.',
                    entry:'A strong reel can open many doors.',
                    environment:'Focused and often quiet.',
                    connections:'Interacts with production and creative leads.',
                    daysOff:'Depends on post schedule.',
                }
            },
            {
                title:'Field Producer', tag:'Coordination',
                grit:8, salary:[68,82,96],
                quote:'Capturing the perfect shot requires both planning and adaptability.',
                ratings:{ workplace:8, tasks:7, entry:6, environment:8, connections:8, daysOff:6 },
                tags:[
                    { label:'Fast-paced', type:'pos' },
                    { label:'Client interaction', type:'neu' },
                    { label:'Unpredictable', type:'neg' },
                ],
                insights:{
                    workplace:'On-location with plenty of moving pieces.',
                    tasks:'Scouting, production assistance, asset delivery.',
                    entry:'Experience in shoots and people management help.',
                    environment:'Energetic and variable.',
                    connections:'Strong relationship with directors and clients.',
                    daysOff:'Limited during active production.',
                }
            },
        ]
    },
    data_sci: {
        name:'Data Scientist', accent:'#7b55ff',
        accentDim:'rgba(123,85,255,0.10)', accentGlow:'rgba(123,85,255,0.25)',
        reviews:[
            {
                title:'Model Developer', tag:'Analytics',
                grit:7, salary:[76,90,104],
                quote:'Most of the job is cleaning data; the modeling is the reward.',
                ratings:{ workplace:8, tasks:7, entry:5, environment:7, connections:7, daysOff:8 },
                tags:[
                    { label:'Math-heavy', type:'neu' },
                    { label:'Data cleaning', type:'neg' },
                    { label:'High impact', type:'pos' },
                ],
                insights:{
                    workplace:'Quiet, analytical environment with dashboards and notebooks.',
                    tasks:'Feature engineering, model training, evaluation.',
                    entry:'Strong Python and statistics skills are essential.',
                    environment:'Research-oriented with product pressure.',
                    connections:'Bridges business and engineering teams.',
                    daysOff:'Typically flexible if deadlines are managed well.',
                }
            },
            {
                title:'Insight Analyst', tag:'Research',
                grit:6, salary:[72,86,98],
                quote:'The best insights are the ones the business can actually act on.',
                ratings:{ workplace:8, tasks:7, entry:6, environment:7, connections:8, daysOff:8 },
                tags:[
                    { label:'Storytelling required', type:'pos' },
                    { label:'Data prep heavy', type:'neg' },
                    { label:'Business value', type:'pos' },
                ],
                insights:{
                    workplace:'Hybrid team environment with collaborative workshops.',
                    tasks:'Dashboards, reports, A/B analysis, stakeholder presentations.',
                    entry:'SQL and communication skills are key.',
                    environment:'Balanced between analysis and meetings.',
                    connections:'Frequently interfaces with product and marketing.',
                    daysOff:'Reasonable outside sprint cycles.',
                }
            },
            {
                title:'ML Engineer', tag:'Engineering',
                grit:8, salary:[82,96,110],
                quote:'Productionizing models is where the research becomes real value.',
                ratings:{ workplace:8, tasks:8, entry:5, environment:6, connections:7, daysOff:7 },
                tags:[
                    { label:'Deployments matter', type:'neu' },
                    { label:'Cross-team work', type:'pos' },
                    { label:'Model risk', type:'neg' },
                ],
                insights:{
                    workplace:'Engineered pipelines and product-facing metrics are the focus.',
                    tasks:'Model serving, monitoring, data pipelines.',
                    entry:'Strong software skills plus ML knowledge are required.',
                    environment:'More engineering-heavy than research.',
                    connections:'Works with product, infra, and data teams.',
                    daysOff:'Solid if the stack is stable.',
                }
            },
        ]
    },
    ux_ui: {
        name:'UX/UI Designer', accent:'#ffb347',
        accentDim:'rgba(255,179,71,0.10)', accentGlow:'rgba(255,179,71,0.25)',
        reviews:[
            {
                title:'Product Designer', tag:'UI/UX',
                grit:7, salary:[70,84,98],
                quote:'Designing intuitive flows means understanding people before pixels.',
                ratings:{ workplace:8, tasks:8, entry:6, environment:7, connections:8, daysOff:7 },
                tags:[
                    { label:'User-centered', type:'pos' },
                    { label:'Iteration-heavy', type:'neu' },
                    { label:'Stakeholder alignment', type:'neg' },
                ],
                insights:{
                    workplace:'Hybrid with workshops, whiteboards, and prototypes.',
                    tasks:'Wireframes, journeys, handoff, testing.',
                    entry:'A strong portfolio and empathy are essential.',
                    environment:'Fast-paced but collaborative.',
                    connections:'Close with PMs, engineers, and researchers.',
                    daysOff:'Generally stable with sprint cycles.',
                }
            },
            {
                title:'Interaction Designer', tag:'Motion',
                grit:7, salary:[66,80,94],
                quote:'The smallest animation can make a product feel alive.',
                ratings:{ workplace:8, tasks:7, entry:6, environment:7, connections:6, daysOff:8 },
                tags:[
                    { label:'Motion design', type:'pos' },
                    { label:'Micro-interactions', type:'neu' },
                    { label:'Detail-focused', type:'pos' },
                ],
                insights:{
                    workplace:'Often remote with focused design sessions.',
                    tasks:'Prototyping, motion specs, accessibility audits.',
                    entry:'Figma and prototyping skills are key.',
                    environment:'Quiet but deadline-aware.',
                    connections:'Works closely with engineering and product.',
                    daysOff:'Predictable outside milestone pushes.',
                }
            },
            {
                title:'UX Researcher', tag:'Research',
                grit:6, salary:[68,82,96],
                quote:'You learn more from what users don\'t say than what they do.',
                ratings:{ workplace:8, tasks:7, entry:6, environment:7, connections:8, daysOff:8 },
                tags:[
                    { label:'User interviews', type:'neu' },
                    { label:'Synthesis work', type:'pos' },
                    { label:'Stakeholder buy-in', type:'neg' },
                ],
                insights:{
                    workplace:'Split between labs, remote sessions, and team meetings.',
                    tasks:'User studies, surveys, maps, reports.',
                    entry:'Strong empathy and research craft are critical.',
                    environment:'Methodical with creative output.',
                    connections:'Bridges product, design, and business teams.',
                    daysOff:'Usually fair if recruiting is not active.',
                }
            },
        ]
    },
    full_stack: {
        name:'Full Stack Developer', accent:'#42d7ff',
        accentDim:'rgba(66,215,255,0.10)', accentGlow:'rgba(66,215,255,0.25)',
        reviews:[
            {
                title:'Platform Engineer', tag:'Engineering',
                grit:8, salary:[76,90,104],
                quote:'Juggling frontend and backend means you build the experience end to end.',
                ratings:{ workplace:8, tasks:8, entry:6, environment:7, connections:7, daysOff:8 },
                tags:[
                    { label:'Broad skillset', type:'pos' },
                    { label:'Fast-paced', type:'neu' },
                    { label:'Feature pressure', type:'neg' },
                ],
                insights:{
                    workplace:'Remote-friendly and collaborative with code reviews daily.',
                    tasks:'APIs, UI interactions, databases, deployments.',
                    entry:'Practical projects matter more than formal credentials.',
                    environment:'Responsive and agile.',
                    connections:'Works with product, design, and infrastructure.',
                    daysOff:'Generally good if workload is balanced.',
                }
            },
            {
                title:'API Specialist', tag:'Backend',
                grit:7, salary:[74,88,100],
                quote:'A solid API is the backbone of every product; getting it right pays off downstream.',
                ratings:{ workplace:7, tasks:8, entry:6, environment:7, connections:7, daysOff:8 },
                tags:[
                    { label:'System thinking', type:'pos' },
                    { label:'Doc-heavy', type:'neg' },
                    { label:'Hands-on coding', type:'pos' },
                ],
                insights:{
                    workplace:'Mostly code and design sessions with backend teams.',
                    tasks:'API design, database schema, integration, tests.',
                    entry:'Solid engineering fundamentals are required.',
                    environment:'Less flashy but highly dependable.',
                    connections:'Interfaces with frontend and infra.',
                    daysOff:'Often consistent.',
                }
            },
            {
                title:'Frontend Craftsman', tag:'UI',
                grit:7, salary:[72,86,98],
                quote:'Crafting a responsive interface that feels good is both art and science.',
                ratings:{ workplace:8, tasks:8, entry:6, environment:7, connections:7, daysOff:8 },
                tags:[
                    { label:'React/Vue', type:'neu' },
                    { label:'Performance focus', type:'pos' },
                    { label:'Design collaboration', type:'pos' },
                ],
                insights:{
                    workplace:'Often paired with designers, product managers, and backend engineers.',
                    tasks:'Component design, interactions, testing, accessibility.',
                    entry:'Portfolio projects and modern frameworks help.',
                    environment:'Creative and code-driven.',
                    connections:'Central to the product team.',
                    daysOff:'Usually healthy unless sprint crunches occur.',
                }
            },
        ]
    },
    graphic_des: {
        name:'Graphic Designer', accent:'#ff5a99',
        accentDim:'rgba(255,90,153,0.10)', accentGlow:'rgba(255,90,153,0.25)',
        reviews:[
            {
                title:'Brand Designer', tag:'Visual Identity',
                grit:7, salary:[58,72,86],
                quote:'A logo is small, but the system it lives in must feel massive and coherent.',
                ratings:{ workplace:8, tasks:7, entry:6, environment:7, connections:7, daysOff:8 },
                tags:[
                    { label:'Creative systems', type:'pos' },
                    { label:'Revision cycles', type:'neg' },
                    { label:'Client feedback', type:'neu' },
                ],
                insights:{
                    workplace:'Agency or remote with frequent critiques.',
                    tasks:'Visual systems, typography, layout, branding.',
                    entry:'Strong portfolio is the main gatekeeper.',
                    environment:'Collaborative and creative.',
                    connections:'Close to marketing, product, and creative leadership.',
                    daysOff:'Regular but deadline-sensitive.',
                }
            },
            {
                title:'Print Designer', tag:'Collateral',
                grit:6, salary:[55,68,80],
                quote:'Print design still demands more precision than any screen-based project.',
                ratings:{ workplace:7, tasks:6, entry:7, environment:6, connections:6, daysOff:8 },
                tags:[
                    { label:'Attention to detail', type:'pos' },
                    { label:'Print specs', type:'neu' },
                    { label:'Less trendy', type:'neg' },
                ],
                insights:{
                    workplace:'Studio or agency with client reviews.',
                    tasks:'Brochures, packaging, signage, layouts.',
                    entry:'Strong craftsmanship and fundamentals matter.',
                    environment:'Structured and deadline-oriented.',
                    connections:'Works with production and clients.',
                    daysOff:'Typically standard.',
                }
            },
            {
                title:'Digital Designer', tag:'UI Graphics',
                grit:7, salary:[60,75,88],
                quote:'Good visual design makes an interface feel effortless and trustworthy.',
                ratings:{ workplace:8, tasks:7, entry:6, environment:7, connections:7, daysOff:8 },
                tags:[
                    { label:'Screen design', type:'pos' },
                    { label:'Motion basics', type:'neu' },
                    { label:'Brand alignment', type:'neu' },
                ],
                insights:{
                    workplace:'Often alongside UX teams and product stakeholders.',
                    tasks:'Banners, UI graphics, campaigns, motion assets.',
                    entry:'A strong digital portfolio is essential.',
                    environment:'Creative and collaborative.',
                    connections:'Works with product, marketing, and engineering.',
                    daysOff:'Consistent unless on campaign launch.',
                }
            },
        ]
    }
};
 
/* ══════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════ */
const getPath = () => {
    const stored = localStorage.getItem('userPath');
    if (!stored || stored === 'cyber') return 'cyber_cons';
    return careerData[stored] ? stored : 'cyber_cons';
};
 
function calcMetrics(reviews) {
    const n         = reviews.length;
    const avgGrit   = Math.round(reviews.reduce((s,r)=>s+r.grit,0)/n);
    const burnout   = Math.max(28, Math.min(88, 110-avgGrit*8));
    const avgEntry  = Math.round(reviews.reduce((s,r)=>s+r.salary[0],0)/n);
    const avgMid    = Math.round(reviews.reduce((s,r)=>s+r.salary[1],0)/n);
    const avgSenior = Math.round(reviews.reduce((s,r)=>s+r.salary[2],0)/n);
    const cats      = ['workplace','tasks','entry','environment','connections','daysOff'];
    const avgRatings= {};
    cats.forEach(c => { avgRatings[c] = Math.round(reviews.reduce((s,r)=>s+r.ratings[c],0)/n); });
    return { avgGrit, burnout, avgEntry, avgMid, avgSenior, avgRatings };
}
 
function hexToRgb(hex) {
    return `${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)}`;
}
 
function ratingColor(score) {
    if (score >= 8) return 'rgba(50,255,126,0.85)';
    if (score >= 6) return 'rgba(255,200,50,0.85)';
    return 'rgba(255,90,90,0.85)';
}
 
const catLabels = {
    workplace:   'Workplace',
    tasks:       'Daily Tasks',
    entry:       'Easy to Enter',
    environment: 'Environment',
    connections: 'Connections',
    daysOff:     'Days Off'
};
 
/* ══════════════════════════════════════════════
   TAB SWITCH
══════════════════════════════════════════════ */
window.switchTab = (e, id) => {
    document.querySelectorAll('.tab-section').forEach(s=>s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    e.currentTarget.classList.add('active');
    const sl = document.querySelector('.tab-slider');
    sl.style.left  = e.currentTarget.offsetLeft+'px';
    sl.style.width = e.currentTarget.offsetWidth+'px';
};
 
/* ══════════════════════════════════════════════
   ACCORDION CARD TOGGLE
══════════════════════════════════════════════ */
function toggleCard(clickedCard) {
    const isOpen = clickedCard.classList.contains('expanded');
    const allCards = document.querySelectorAll('.review-card');
 
    // Close all cards smoothly first
    allCards.forEach(card => {
        if (card === clickedCard) return;
        if (card.classList.contains('expanded')) {
            collapseCard(card);
        }
    });
 
    // Toggle the clicked card
    if (isOpen) {
        collapseCard(clickedCard);
    } else {
        expandCard(clickedCard);
    }
}
 
function expandCard(card) {
    const body = card.querySelector('.card-body');
 
    // Measure natural height before showing
    body.style.display = 'flex';
    body.style.overflow = 'hidden';
    const targetHeight = body.scrollHeight + 'px';
    body.style.maxHeight = '0px';
    body.style.opacity = '0';
 
    card.classList.add('expanded');
 
    // Animate open
    requestAnimationFrame(() => {
        body.style.transition = 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease';
        body.style.maxHeight = targetHeight;
        body.style.opacity = '1';
    });
 
    // Animate rating bars after body opens
    setTimeout(() => {
        card.querySelectorAll('.rating-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.target + '%';
        });
        // Remove overflow clip once animation done
        setTimeout(() => { body.style.overflow = 'visible'; }, 460);
    }, 80);
}
 
function collapseCard(card) {
    const body = card.querySelector('.card-body');
    if (!body) return;
 
    // Reset bars
    card.querySelectorAll('.rating-bar-fill').forEach(bar => {
        bar.style.width = '0%';
    });
 
    // Lock current height then animate to 0
    body.style.maxHeight = body.scrollHeight + 'px';
    body.style.overflow = 'hidden';
 
    requestAnimationFrame(() => {
        body.style.transition = 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease';
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
    });
 
    card.classList.remove('expanded');
 
    setTimeout(() => {
        body.style.display = 'none';
        body.style.maxHeight = '';
        body.style.opacity = '';
        body.style.overflow = '';
        body.style.transition = '';
    }, 400);
}
 
/* ══════════════════════════════════════════════
   RENDER FEED
══════════════════════════════════════════════ */
function renderFeed(path) {
    const data    = careerData[path];
    const metrics = calcMetrics(data.reviews);
    const maxSal  = 130;
 
    document.getElementById('feed-title').textContent = data.name;
    document.getElementById('path-badge').textContent  = data.name;
 
    const scroll = document.getElementById('feed-scroll');
    scroll.innerHTML = '';
 
    data.reviews.forEach((r, i) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.style.opacity = '0';
 
        /* build rating grid HTML */
        const ratingRows = Object.entries(r.ratings).map(([key, val]) => `
            <div class="rating-item">
                <div class="rating-label">
                    <span>${catLabels[key]}</span>
                    <span class="score" style="color:${ratingColor(val)}">${val}/10</span>
                </div>
                <div class="rating-bar">
                    <div class="rating-bar-fill" data-target="${val*10}" style="background:${ratingColor(val)};box-shadow:0 0 6px ${ratingColor(val)};width:0%;transition:width 0.9s cubic-bezier(.4,0,.2,1);"></div>
                </div>
            </div>
        `).join('');
 
        /* build insight rows */
        const insightRows = Object.entries(r.insights).map(([key, text]) => `
            <div class="rating-item" style="grid-column:1/-1;">
                <div class="rating-label"><span>${catLabels[key]}</span></div>
                <p style="font-family:var(--font-mono);font-size:.71rem;color:rgba(221,225,236,.6);line-height:1.55;padding-left:.5rem;border-left:1px solid rgba(255,255,255,.08);margin-top:.15rem;">${text}</p>
            </div>
        `).join('');
 
        /* build tag pills */
        const tagPills = r.tags.map(t=>`<span class="insight-tag ${t.type}">${t.label}</span>`).join('');
 
        card.innerHTML = `
            <div class="card-top" onclick="toggleCard(this.closest('.review-card'))">
                <div class="card-avatar"></div>
                <div class="card-meta">
                    <div class="card-title">${r.title}</div>
                    <div class="card-tag">${r.tag}</div>
                </div>
                <div class="card-right">
                    <div class="grit-badge">Grit&nbsp;${r.grit}/10</div>
                    <div class="expand-icon">▾</div>
                </div>
            </div>
            <div class="card-body" style="display:none;">
                <p class="card-quote">"${r.quote}"</p>
                <div class="card-divider"></div>
                <div class="rating-grid">${ratingRows}</div>
                <div class="card-divider"></div>
                <div class="insight-row">${tagPills}</div>
                <div class="card-divider"></div>
                <div style="display:flex;flex-direction:column;gap:.65rem;">${insightRows}</div>
            </div>
        `;
 
        scroll.appendChild(card);
        anime({ targets:card, translateY:[20,0], opacity:[0,1], duration:520, delay:i*90, easing:'easeOutExpo' });
    });
 
    /* sidebar */
    const sidebar = document.getElementById('sidebar-stats');
    const m = metrics;
    const avgSals = [m.avgEntry, m.avgMid, m.avgSenior];
    const salLbls = ['Entry','Mid','Senior'];
 
    const overallRows = Object.entries(m.avgRatings).map(([key, val]) => `
        <div class="overall-row">
            <div class="overall-label">
                <span class="name">${catLabels[key]}</span>
                <span class="val" style="color:${ratingColor(val)}">${val}/10</span>
            </div>
            <div class="mini-bar"><div class="mini-fill" id="mb-${key}" style="background:${ratingColor(val)}"></div></div>
        </div>
    `).join('');
 
    const salaryItems = salLbls.map((lbl, idx) => `
        <div class="salary-item">
            <div class="salary-labels">
                <span class="lbl">${lbl}</span>
                <span class="val">$${avgSals[idx]}k</span>
            </div>
            <div class="salary-track"><div class="salary-fill" id="sf-${idx}"></div></div>
        </div>
    `).join('');
 
    sidebar.innerHTML = `
        <div class="stat-card">
            <h3>Burnout Risk</h3>
            <div class="stat-big" id="s-burnout">—</div>
            <div class="prog-track"><div class="prog-fill" id="s-burn-bar"></div></div>
            <div class="stat-sub">Pulse-based estimate from field feedback.</div>
        </div>
        <div class="stat-card">
            <h3>Path Ratings</h3>
            <div class="overall-grid">${overallRows}</div>
        </div>
        <div class="stat-card">
            <h3>Salary Trends</h3>
            <div class="salary-group">${salaryItems}</div>
        </div>
    `;
 
    setTimeout(() => {
        document.getElementById('s-burnout').textContent   = m.burnout + '%';
        document.getElementById('s-burn-bar').style.width = m.burnout + '%';
        Object.entries(m.avgRatings).forEach(([key, val]) => {
            const el = document.getElementById('mb-' + key);
            if (el) el.style.width = (val * 10) + '%';
        });
        avgSals.forEach((v, i) => {
            const el = document.getElementById('sf-' + i);
            if (el) el.style.width = (v / maxSal * 100) + '%';
        });
    }, 350);
}
 
/* ══════════════════════════════════════════════
   RENDER ANALYTICS
══════════════════════════════════════════════ */
function renderAnalytics(path) {
    const data    = careerData[path];
    const metrics = calcMetrics(data.reviews);
    const m       = metrics;
 
    document.getElementById('kpi-grid').innerHTML = `
        <div class="kpi-card">
            <div class="kpi-label">Burnout Risk</div>
            <div class="kpi-value">${m.burnout}<span class="unit">%</span></div>
            <div class="prog-track"><div class="prog-fill" id="a-burn-bar"></div></div>
            <div class="kpi-desc">Derived from grit scores and field feedback across all roles in this path.</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-label">Avg Grit Tier</div>
            <div class="kpi-value">${m.avgGrit}<span class="unit"> /10</span></div>
            <div class="kpi-desc">Composite resilience score across ${data.reviews.length} reviewed roles.</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-label">Salary Range</div>
            <div class="kpi-value">$${m.avgEntry}k<span class="unit"> – $${m.avgSenior}k</span></div>
            <div class="kpi-desc">Average entry-to-senior compensation across all roles in this path.</div>
        </div>
    `;
 
    setTimeout(() => {
        const b = document.getElementById('a-burn-bar');
        if (b) b.style.width = m.burnout + '%';
    }, 300);
 
    document.getElementById('role-tbody').innerHTML = data.reviews.map(r => `
        <tr>
            <td>
                <div class="td-name">${r.title}</div>
                <span class="td-tag">${r.tag}</span>
            </td>
            <td class="td-grit">${r.grit}/10</td>
            <td class="td-num" style="color:${ratingColor(r.ratings.workplace)}">${r.ratings.workplace}/10</td>
            <td class="td-num" style="color:${ratingColor(r.ratings.entry)}">${r.ratings.entry}/10</td>
            <td class="td-num" style="color:${ratingColor(r.ratings.daysOff)}">${r.ratings.daysOff}/10</td>
            <td class="td-num">$${r.salary[0]}k–$${r.salary[2]}k</td>
        </tr>
    `).join('');
}
 
/* ══════════════════════════════════════════════
   NEURAL CANVAS
══════════════════════════════════════════════ */
const canvas = document.getElementById('neural-canvas');
const ctx    = canvas.getContext('2d');
let W, H, particles, particleRGB = '255,255,255';
let mouse = { x:null, y:null, r:160 };
window.addEventListener('mousemove', e => { mouse.x=e.clientX; mouse.y=e.clientY; });
 
function initCanvas() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    particles = Array.from({length:75}, () => {
        const x=Math.random()*W, y=Math.random()*H;
        return { x, y, baseX:x, baseY:y, size:Math.random()*1.6+0.8, density:Math.random()*24+2 };
    });
}
 
function animateCanvas() {
    ctx.clearRect(0,0,W,H);
    particles.forEach((p,i) => {
        if (mouse.x!==null) {
            const dx=mouse.x-p.x, dy=mouse.y-p.y, dist=Math.sqrt(dx*dx+dy*dy);
            if (dist < mouse.r) {
                const f=(mouse.r-dist)/mouse.r;
                p.x-=(dx/dist)*f*p.density; p.y-=(dy/dist)*f*p.density;
            } else {
                p.x+=(p.baseX-p.x)/14; p.y+=(p.baseY-p.y)/14;
            }
        }
        ctx.fillStyle=`rgba(${particleRGB},0.42)`;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();
        for (let j=i+1; j<particles.length; j++) {
            const dx=p.x-particles[j].x, dy=p.y-particles[j].y;
            const dist=Math.sqrt(dx*dx+dy*dy);
            if (dist<115) {
                ctx.beginPath();
                ctx.strokeStyle=`rgba(${particleRGB},${(1-dist/115)*0.24})`;
                ctx.lineWidth=0.5;
                ctx.moveTo(p.x,p.y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animateCanvas);
}
 
/* ══════════════════════════════════════════════
   3D TILT
══════════════════════════════════════════════ */
const tablet = document.querySelector('.work-tablet');
document.addEventListener('mousemove', e => {
    anime({ targets:tablet, rotateY:-(window.innerWidth/2-e.pageX)/90, rotateX:(window.innerHeight/2-e.pageY)/90, duration:500, easing:'easeOutQuad' });
});
 
/* ══════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════ */
function boot() {
    const path = getPath();
    initCanvas(); animateCanvas();
    window.addEventListener('resize', initCanvas);
 
    changePath(path);
 
    anime({ targets:tablet, scale:[0.88,1], opacity:[0,1], rotateX:[10,0], duration:1300, easing:'easeOutElastic(1,.65)' });
 
    setTimeout(() => {
        const btn = document.querySelector('.tab-btn.active');
        const sl  = document.querySelector('.tab-slider');
        if (btn && sl) { sl.style.left=btn.offsetLeft+'px'; sl.style.width=btn.offsetWidth+'px'; }
    }, 60);
}

window.changePath = (newPath) => {
    // 1. Validate the path exists in your data object
    const data = careerData[newPath];
    if (!data) {
        console.error(`Path "${newPath}" not found in careerData.`);
        return;
    }

    // 2. Persist the choice
    localStorage.setItem('userPath', newPath);

    // 3. Update Visuals (CSS Variables)
    const root = document.documentElement;
    root.style.setProperty('--accent', data.accent);
    root.style.setProperty('--accent-dim', data.accentDim);
    root.style.setProperty('--accent-glow', data.accentGlow);

    // 4. Sync the Neural Canvas color
    // We convert the hex to RGB so the canvas transparency works
    particleRGB = hexToRgb(data.accent);

    // 5. Trigger the UI Re-renders
    // This clears the old cards and draws the new ones
    renderFeed(newPath);
    renderAnalytics(newPath);

    // 6. UI Feedback (Animation & Toast)
    const tablet = document.querySelector('.work-tablet');
    anime({
        targets: tablet,
        opacity: [0.5, 1],
        scale: [0.98, 1],
        duration: 400,
        easing: 'easeOutQuad'
    });

    const toast = document.getElementById('toast');
    toast.textContent = `Synchronized: ${data.name} Protocol`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);

    console.log(`%c [SYSTEM] Switched to ${data.name} `, `color: ${data.accent}; font-weight: bold;`);
};
 
boot();