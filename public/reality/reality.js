// --- 1. THE CONTENT DATA (REALITY FEED REVIEWS) ---
const careerData = {
  // --- CYBERSECURITY ---
  'digital-forensics': {
    name:'Digital Forensics', 
    accent:'#39ff14',
    accentDim:'rgba(57, 255, 20, 0.10)', 
    accentGlow:'rgba(57, 255, 20, 0.25)',
    reviews:[
      { title:'Evidence Analyst', hiringLevel:'Senior', workStyle:'Hybrid 3d/wk', workplaceRating:7, salary:[66000,78000,92000],
        reviewer:'Eric Zimmerman',
        quote:'You are a scientist in a lab. Your methods must be repeatable and your results must be objective. You aren\'t trying to prove someone is guilty; you are trying to see what the data says, period.' },
      { title:'Malware Investigator', hiringLevel:'Senior', workStyle:'On-site 5d/wk', workplaceRating:6, salary:[72000,86000,101000],
        reviewer:'Heather Mahalik',
        quote:'Mobile forensics is the new frontier. People live on their phones. Understanding how apps store data in SQLite databases is now more important than knowing how to image a traditional hard drive.' },
      { title:'Case Coordinator', hiringLevel:'Senior', workStyle:'Hybrid 2d/wk', workplaceRating:7, salary:[64000,76000,89000],
        reviewer:'Brett Shavers',
        quote:'Patience is everything. Recovering deleted data or cracking a password can take weeks. You need to be someone who can manage multiple long-running tasks without losing focus.',
        insideTip:'Get comfortable with the Command Line. While GUI tools like EnCase or Cellebrite are industry standards, the best forensicators use small CLI tools to dig deeper. Also start a Case Journal for every project; it will save you during cross-examination.' }
    ]
  },
  'cybersecurity-consultant': {
    name:'Cybersecurity Consultant', 
    accent:'#39ff14',
    accentDim:'rgba(57, 255, 20, 0.10)', 
    accentGlow:'rgba(57, 255, 20, 0.25)',
    reviews:[
      { title:'Risk Advisor', hiringLevel:'Senior', workStyle:'Remote', workplaceRating:8, salary:[72000,88000,104000],
        reviewer:'Kevin Mitnick',
        quote:'A consultant is a salesperson for safety. You are selling a lack of disaster. That\'s a hard sell. You need deep relationships so that when you give advice, the company actually follows it.' },
      { title:'Security Architect', hiringLevel:'Senior', workStyle:'Hybrid 2d/wk', workplaceRating:8, salary:[85000,102000,118000],
        reviewer:'Bruce Schneier',
        quote:'Complexity is the enemy of security. Your job as a consultant isn\'t to add more tools; it\'s to simplify the process so it\'s actually possible for employees to stay secure.' },
      { title:'Compliance Specialist', hiringLevel:'Senior', workStyle:'Remote', workplaceRating:7, salary:[68000,82000,95000],
        reviewer:'Rachel Tobac',
        quote:'Don\'t ignore the social aspect. You can have the best firewall in the world, but if an employee gives their password away over the phone, it\'s useless. Consulting is 50% technical and 50% behavioral coaching.',
        insideTip:'Learn Risk Management frameworks like NIST or ISO 27001. Businesses don\'t speak "vulnerability"; they speak dollar signs. If you can explain a security hole in terms of financial loss and insurance premiums, you will get the budget you need.' }
    ]
  },
  'penetration-tester': {
    name:'Penetration Tester', 
    accent:'#39ff14',
    accentDim:'rgba(57, 255, 20, 0.10)', 
    accentGlow:'rgba(57, 255, 20, 0.25)',
    reviews:[
      { title:'Red Team Operator', hiringLevel:'Mid-Level', workStyle:'Remote', workplaceRating:8, salary:[80000,96000,112000],
        reviewer:'Heath Adams',
        quote:'Newcomers often burn out because they expect 24/7 action. Real-world testing is meticulous methodology. You might spend three days just mapping a network before attempting an exploit.' },
      { title:'Application Tester', hiringLevel:'Mid-Level', workStyle:'Remote', workplaceRating:8, salary:[75000,89000,103000],
        reviewer:'@ippsec',
        quote:'Your value isn\'t finding the bug; it\'s explaining why the bug matters to a business owner who doesn\'t know what a buffer overflow is. You are a translator of risk.' },
      { title:'Control Tester', hiringLevel:'Mid-Level', workStyle:'Hybrid 2d/wk', workplaceRating:7, salary:[70000,84000,98000],
        reviewer:'John Hammond',
        quote:'The community is your biggest asset. Don\'t try to be a lone wolf. The people who succeed share their findings and learn from the collective failures of the industry.',
        insideTip:'Build a home lab using Proxmox or VirtualBox before applying. Explaining exactly how you built, attacked, and patched your own network is worth more than any entry-level certificate.' }
    ]
  },
  'security-analyst': {
    name:'Security Analyst', 
    accent:'#39ff14',
    accentDim:'rgba(57, 255, 20, 0.10)', 
    accentGlow:'rgba(57, 255, 20, 0.25)',
    reviews:[
      { title:'Threat Analyst', hiringLevel:'Junior', workStyle:'Hybrid 3d/wk', workplaceRating:7, salary:[68000,82000,95000],
        reviewer:'John Strand',
        quote:'You are the gatekeeper. It\'s high responsibility and often low recognition—until something goes wrong. You need to actually enjoy the hunt for anomalies in a sea of normal data.' },
      { title:'Incident Responder', hiringLevel:'Junior', workStyle:'On-site 5d/wk', workplaceRating:6, salary:[74000,88000,102000],
        reviewer:'Lesley Carhart',
        quote:'Burnout is real in the SOC. You have to learn to leave the stress at the office. Develop a hobby that has nothing to do with computers to keep your mind sharp.' },
      { title:'SOC Engineer', hiringLevel:'Junior', workStyle:'Hybrid 2d/wk', workplaceRating:7, salary:[66000,79000,92000],
        reviewer:'Marcus Hutchins',
        quote:'Curiosity is your best tool. When you see a weird ping or an unusual login, don\'t just clear the alert. Follow the thread until you\'re 100% sure it\'s benign. That\'s how you catch the big ones.',
        insideTip:'Learn Log Analysis inside and out. Tools like Splunk or ELK Stack are great, but you need to understand what the raw data is telling you. If you can read a raw server log and spot a SQL injection without a tool telling you, you\'re ahead of 90% of the field.' }
    ]
  },

  // --- CREATIVE MEDIA ---
  'video-editor': {
    name:'Video Editor', 
    accent:'#b026ff',
    accentDim:'rgba(176, 38, 255, 0.10)', 
    accentGlow:'rgba(176, 38, 255, 0.25)',
    reviews:[
      { title:'Post-Production Artist', hiringLevel:'Entry-Level', workStyle:'Remote', workplaceRating:8, salary:[62000,78000,94000],
        reviewer:'Hayden Hillier-Smith',
        quote:'The edit is where the story is actually made. You are the third writer. You have to find the emotion in the pauses and the subtext in the b-roll.' },
      { title:'Motion Graphics Artist', hiringLevel:'Entry-Level', workStyle:'Hybrid 2d/wk', workplaceRating:7, salary:[68000,84000,100000],
        reviewer:'Zack Arnold',
        quote:'Editing is an endurance sport. You need a setup that doesn\'t ruin your back and a workflow that doesn\'t ruin your mind. Speed comes from organization, not just fast fingers.' },
      { title:'Colourist', hiringLevel:'Entry-Level', workStyle:'Remote', workplaceRating:8, salary:[70000,85000,99000],
        reviewer:'Sven Pape',
        quote:'Kill your darlings. That shot you spent 4 hours color-grading? If it doesn\'t serve the story, cut it. Being a great editor means being a ruthless critic of your own work.',
        insideTip:'Focus on Sound Design. A viewer will forgive okay visuals, but they will click away instantly if audio is bad. Spend more time on room tone and transitions than you think you need to.' }
    ]
  },
  'content-creator': {
    name:'Content Creator', 
    accent:'#b026ff',
    accentDim:'rgba(176, 38, 255, 0.10)', 
    accentGlow:'rgba(176, 38, 255, 0.25)',
    reviews:[
      { title:'Social Media Producer', hiringLevel:'Junior', workStyle:'Remote', workplaceRating:7, salary:[50000,66000,80000],
        reviewer:'Roberto Blake',
        quote:'The algorithm doesn\'t hate you; it just doesn\'t know you yet. Stop looking at the views and start looking at Average View Duration.' },
      { title:'Brand Storyteller', hiringLevel:'Junior', workStyle:'Remote', workplaceRating:8, salary:[57000,70000,85000],
        reviewer:'MrBeast',
        quote:'Iterate, iterate, iterate. Your first 100 videos will probably be bad. The goal is to make the 101st slightly better than the 100th.' },
      { title:'Growth Creator', hiringLevel:'Junior', workStyle:'Remote', workplaceRating:8, salary:[60000,75000,90000],
        reviewer:'Marques Brownlee',
        quote:'Be the expert you wish you had. Don\'t chase trends you don\'t care about. If you are authentic and provide real value, people will find you.',
        insideTip:'Diversify your platforms early. Don\'t build your entire house on rented land. Build an email list. If the algorithm changes tomorrow and your reach drops to zero, your direct connection to your audience is the only thing that will save your business.' }
    ]
  },
  'creative-producer': {
    name:'Creative Producer', 
    accent:'#b026ff',
    accentDim:'rgba(176, 38, 255, 0.10)', 
    accentGlow:'rgba(176, 38, 255, 0.25)',
    reviews:[
      { title:'Production Coordinator', hiringLevel:'Mid-Level', workStyle:'On-site 5d/wk', workplaceRating:7, salary:[64000,78000,92000],
        reviewer:'David Fincher',
        quote:'A producer is a professional problem-solver. Your job is to say yes to the creative vision and then figure out the how without going bankrupt.' },
      { title:'Shoot Manager', hiringLevel:'Mid-Level', workStyle:'On-site 5d/wk', workplaceRating:6, salary:[70000,84000,98000],
        reviewer:'Shonda Rhimes',
        quote:'You are the center of the wheel. Every department comes to you. You have to be the most organized person in the room at all times.' },
      { title:'Creative Operations Lead', hiringLevel:'Mid-Level', workStyle:'Hybrid 3d/wk', workplaceRating:7, salary:[75000,90000,105000],
        reviewer:'Kathleen Kennedy',
        quote:'Success in production is built on relationships. People will work harder for a producer they respect and who they know has their back when things get difficult on set.',
        insideTip:'Master the Triple Constraint: Time, Cost, and Quality. You can usually only have two. Your value is in your No as much as your Yes.' }
    ]
  },
  'photographer-videographer': {
    name:'Photographer/Videographer', 
    accent:'#b026ff',
    accentDim:'rgba(176, 38, 255, 0.10)', 
    accentGlow:'rgba(176, 38, 255, 0.25)',
    reviews:[
      { title:'Location Shooter', hiringLevel:'Entry-Level', workStyle:'Freelance', workplaceRating:8, salary:[60000,74000,88000],
        reviewer:'Peter McKinnon',
        quote:'Stop buying gear and start buying experiences. A better lens won\'t make you a better storyteller. Go out and shoot in bad light, in small rooms, and with difficult subjects.' },
      { title:'Post Production Artist', hiringLevel:'Entry-Level', workStyle:'Remote', workplaceRating:8, salary:[64000,78000,92000],
        reviewer:'Annie Leibovitz',
        quote:'A portrait is a collaboration. If you haven\'t built a connection with the person in front of the lens, you\'re just taking a picture of a mask.' },
      { title:'Field Producer', hiringLevel:'Entry-Level', workStyle:'On-site 5d/wk', workplaceRating:7, salary:[68000,82000,96000],
        reviewer:'Casey Neistat',
        quote:'Your style is just the sum of all your mistakes and shortcuts. Don\'t try to find a style; just keep making things until you realize you have a way that is uniquely yours.',
        insideTip:'Learn Business Development. Most creative freelancers fail because they don\'t know how to write a contract or follow up on an invoice. Spend one day a week on Office Work—marketing, accounting, and networking.' }
    ]
  },

  // --- CREATIVE COMPUTING ---
  'data-scientist': {
    name:'Data Scientist', 
    accent:'#00f3ff',
    accentDim:'rgba(0, 243, 255, 0.10)', 
    accentGlow:'rgba(0, 243, 255, 0.25)',
    reviews:[
      { title:'Model Developer', hiringLevel:'Senior', workStyle:'Remote', workplaceRating:8, salary:[76000,90000,104000],
        reviewer:'Cassie Kozyrkov',
        quote:'A data scientist\'s job is to be the ultimate skeptic. Your model will try to lie to you. Your data will have biases. Your job is to find the truth hidden under the noise.' },
      { title:'Insight Analyst', hiringLevel:'Senior', workStyle:'Hybrid 2d/wk', workplaceRating:8, salary:[72000,86000,98000],
        reviewer:'DJ Patil',
        quote:'It\'s about the so what? You found a correlation. Great. So what? If it doesn\'t lead to a change in behavior or a business win, it\'s just a trivia point.' },
      { title:'ML Engineer', hiringLevel:'Senior', workStyle:'Remote', workplaceRating:9, salary:[82000,96000,110000],
        reviewer:'Monica Rogati',
        quote:'Don\'t fall in love with complex models. Often a simple linear regression that everyone understands is better than a black-box AI that no one trusts.',
        insideTip:'Master Data Storytelling. Executives don\'t want to see your code; they want a clear chart with a one-sentence takeaway. Turn a 10,000-row spreadsheet into a clear Yes/No recommendation.' }
    ]
  },
  'ux-ui-designer': {
    name:'UX/UI Designer', 
    accent:'#00f3ff',
    accentDim:'rgba(0, 243, 255, 0.10)', 
    accentGlow:'rgba(0, 243, 255, 0.25)',
    reviews:[
      { title:'Product Designer', hiringLevel:'Junior', workStyle:'Hybrid 3d/wk', workplaceRating:8, salary:[70000,84000,98000],
        reviewer:'Don Norman',
        quote:'The biggest mistake juniors make is starting in Figma. You should start with a notebook and a person. If you haven\'t identified the human pain point, you\'re just drawing pretty rectangles.' },
      { title:'Interaction Designer', hiringLevel:'Junior', workStyle:'Remote', workplaceRating:8, salary:[66000,80000,94000],
        reviewer:'Sarah Doody',
        quote:'User experience happens in the gaps between the screens. It\'s how the user feels when the page is loading or when they get an error message. Design for the unhappy path as much as the happy path.' },
      { title:'UX Researcher', hiringLevel:'Junior', workStyle:'Hybrid 2d/wk', workplaceRating:8, salary:[68000,82000,96000],
        reviewer:'Julie Zhuo',
        quote:'Data tells you what is happening, but user research tells you why. Never trust a metric blindly without talking to at least five real users.',
        insideTip:'Learn the basics of HTML/CSS. If you design something that takes a developer three weeks to build when a simpler version takes three hours, you\'ll lose the trust of your team.' }
    ]
  },
  'full-stack-developer': {
    name:'Full Stack Developer', 
    accent:'#00f3ff',
    accentDim:'rgba(0, 243, 255, 0.10)', 
    accentGlow:'rgba(0, 243, 255, 0.25)',
    reviews:[
      { title:'Platform Engineer', hiringLevel:'Mid-Level', workStyle:'Remote', workplaceRating:8, salary:[76000,90000,104000],
        reviewer:'Dan Abramov',
        quote:'The Full Stack label is a bit of a trap. No one is truly an expert at everything. The key is knowing enough about the other half so you don\'t build things that are impossible to integrate.' },
      { title:'API Specialist', hiringLevel:'Mid-Level', workStyle:'Remote', workplaceRating:8, salary:[74000,88000,100000],
        reviewer:'Angie Jones',
        quote:'Automation is the only way to survive. If you find yourself doing a task manually more than twice, write a script. Your job is to build systems, not just features.' },
      { title:'Frontend Craftsman', hiringLevel:'Mid-Level', workStyle:'Hybrid 2d/wk', workplaceRating:8, salary:[72000,86000,98000],
        reviewer:'Kent C. Dodds',
        quote:'The best code is the code you didn\'t have to write. Before you build a custom solution, see if there\'s a robust, well-maintained library.',
        insideTip:'Learn to read other people\'s bad code without complaining. You will spend 70% of your career maintaining legacy systems. If you can jump into a messy codebase and fix things without breaking everything, you will be unfireable.' }
    ]
  },
  'graphic-designer': {
    name:'Graphic Designer',
    accent:'#00f3ff',
    accentDim:'rgba(0, 243, 255, 0.10)', 
    accentGlow:'rgba(0, 243, 255, 0.25)',
    reviews:[
      { title:'Brand Designer', hiringLevel:'Entry-Level', workStyle:'Hybrid 3d/wk', workplaceRating:7, salary:[58000,72000,86000],
        reviewer:'Chris Do',
        quote:'Design is a service, not an art form. You are using visual tools to increase a client\'s revenue or solve a communication breakdown.' },
      { title:'Print Designer', hiringLevel:'Entry-Level', workStyle:'On-site 5d/wk', workplaceRating:7, salary:[55000,68000,80000],
        reviewer:'Sarah Dotzel',
        quote:'The first two years are about building speed. You need to get your ideas from brain to screen instantly so you have time left over for actual creative thinking.' },
      { title:'Digital Designer', hiringLevel:'Entry-Level', workStyle:'Remote', workplaceRating:8, salary:[60000,75000,88000],
        reviewer:'Michael Bierut',
        quote:'The most important tool isn\'t Photoshop—it\'s your ears. Listen to what the client isn\'t saying. They usually have a fear they aren\'t expressing, and your design needs to solve it.',
        insideTip:'Master Hierarchy of Information. Ask yourself: what is the ONE thing I want the user to see first? If everything is bold, nothing is bold. Study classic Swiss design to understand white space as a functional tool.' }
    ]
  }
};

/* ══════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════ */

function calcMetrics(reviews) {
  const allSalaries = reviews.flatMap(r => r.salary);
  const avgSalary   = Math.round(allSalaries.reduce((s,v) => s+v, 0) / allSalaries.length / 1000);
  const minSalary   = Math.min(...allSalaries) / 1000;
  const maxSalary   = Math.max(...allSalaries) / 1000;
  const avgWorkplace = (reviews.reduce((s,r) => s + r.workplaceRating, 0) / reviews.length).toFixed(1);
  return { avgSalary, minSalary, maxSalary, avgWorkplace };
}

function hexToRgb(hex) {
  return `${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)}`;
}

function hiringBadge(level) {
  const l = level.toLowerCase();
  let cls = 'h-entry';
  if (l.includes('junior')) cls = 'h-junior';
  else if (l.includes('mid')) cls = 'h-mid';
  else if (l.includes('senior')) cls = 'h-senior';
  return `<span class="hiring-badge ${cls}">${level}</span>`;
}

function ratingPips(n) {
  let pips = '<div class="pips">';
  for (let i = 1; i <= 10; i++) pips += `<div class="pip${i <= n ? ' on' : ''}"></div>`;
  pips += '</div>';
  return `<div class="rating-wrap">${pips}<div class="rating-num">${n} / 10</div></div>`;
}

/* ══════════════════════════════════════════════
   TAB SWITCH
══════════════════════════════════════════════ */

window.switchTab = (e, id) => {
  document.querySelectorAll('.tab-section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.style.display = 'flex';
  e.currentTarget.classList.add('active');
  const sl = document.querySelector('.tab-slider');
  sl.style.left  = e.currentTarget.offsetLeft + 'px';
  sl.style.width = e.currentTarget.offsetWidth + 'px';
};

/* ══════════════════════════════════════════════
   CARD EXPAND / COLLAPSE
══════════════════════════════════════════════ */

window.toggleCard = function(clickedCard) {
  const isOpen = clickedCard.classList.contains('expanded');
  document.querySelectorAll('.review-card').forEach(card => {
    if (card !== clickedCard && card.classList.contains('expanded')) collapseCard(card);
  });
  isOpen ? collapseCard(clickedCard) : expandCard(clickedCard);
};

function expandCard(card) {
  const body = card.querySelector('.card-body');
  body.style.display = 'block';
  body.style.overflow = 'hidden';
  const targetH = body.scrollHeight;
  body.style.maxHeight = '0px';
  body.style.opacity = '0';
  card.classList.add('expanded');
  requestAnimationFrame(() => {
    body.style.transition = 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease';
    body.style.maxHeight = targetH + 'px';
    body.style.opacity = '1';
  });
  setTimeout(() => {
    body.style.overflow = 'visible';
    body.style.maxHeight = 'none';
  }, 460);
}

function collapseCard(card) {
  const body = card.querySelector('.card-body');
  if (!body) return;
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
  // Defensive check in case user bypasses the engine
  if (!careerData[path]) {
      path = 'penetration-tester';
  }
  const data = careerData[path];
  
  document.getElementById('feed-title').textContent = data.name;
  document.getElementById('path-badge').textContent = data.name;

  const scroll = document.getElementById('feed-scroll');
  scroll.innerHTML = '';

  data.reviews.forEach((r, i) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    cardContainer.style.opacity = '0';

    const card = document.createElement('div');
    card.className = 'review-card';

    card.innerHTML = `
      <div class="card-top" onclick="toggleCard(this.closest('.review-card'))">
        <div class="card-avatar">${r.reviewer.charAt(0)}</div>
        <div class="card-meta">
          <div class="card-title">${r.title}</div>
          <div class="card-tag">${r.reviewer}</div>
        </div>
        <div class="card-right">
          <div class="protocol-badge">${r.hiringLevel}</div>
          <div class="expand-icon">▾</div>
        </div>
      </div>
      <div class="card-body" style="display:none;">
        <div class="reviewer-name">— ${r.reviewer}</div>
        <p class="card-quote">"${r.quote}"</p>
      </div>`;

    cardContainer.appendChild(card);

    if (r.insideTip) {
      const tipBlock = document.createElement('div');
      tipBlock.className = 'inside-tip-block';
      tipBlock.innerHTML = `
        <span class="tip-label">⚡ Inside Tip</span>
        <p class="tip-text">${r.insideTip}</p>`;
      cardContainer.appendChild(tipBlock);
    }

    scroll.appendChild(cardContainer);
    setTimeout(() => {
      cardContainer.style.transition = 'opacity .4s ease, transform .4s ease';
      cardContainer.style.transform  = 'translateY(0)';
      cardContainer.style.opacity    = '1';
    }, i * 80 + 50);
  });

  // Sidebar Updates
  const metrics = calcMetrics(data.reviews);
  const maxSal  = 130;
  const sidebar = document.getElementById('sidebar-stats');

  const reviewerList = data.reviews.map(r => `
    <div class="reviewer-row">
      <span class="rev-dot"></span>
      <span class="rev-name">${r.reviewer}</span>
    </div>`).join('');

  sidebar.innerHTML = `
    <div class="stat-card">
      <h3>Salary Trends</h3>
      <div class="salary-item">
        <div class="salary-labels"><span class="lbl">Avg Salary</span><span class="val">$${metrics.avgSalary}k</span></div>
        <div class="salary-track"><div class="salary-fill" id="sf-avg"></div></div>
      </div>
      <div class="salary-item">
        <div class="salary-labels"><span class="lbl">Min</span><span class="val">$${metrics.minSalary}k</span></div>
        <div class="salary-track"><div class="salary-fill" id="sf-min"></div></div>
      </div>
      <div class="salary-item">
        <div class="salary-labels"><span class="lbl">Max</span><span class="val">$${metrics.maxSalary}k</span></div>
        <div class="salary-track"><div class="salary-fill" id="sf-max"></div></div>
      </div>
    </div>
    <div class="stat-card">
      <h3>Reviewers</h3>
      <div class="reviewer-list">${reviewerList}</div>
    </div>`;

  setTimeout(() => {
    const avg = document.getElementById('sf-avg');
    const mn  = document.getElementById('sf-min');
    const mx  = document.getElementById('sf-max');
    if (avg) avg.style.width = (metrics.avgSalary / maxSal * 100) + '%';
    if (mn)  mn.style.width  = (metrics.minSalary  / maxSal * 100) + '%';
    if (mx)  mx.style.width  = (metrics.maxSalary  / maxSal * 100) + '%';
  }, 350);
}

/* ══════════════════════════════════════════════
   RENDER ANALYTICS
══════════════════════════════════════════════ */

function renderAnalytics(path) {
  if (!careerData[path]) {
      path = 'penetration-tester';
  }
  const data    = careerData[path];
  const metrics = calcMetrics(data.reviews);

  document.getElementById('kpi-grid').innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Salary Range</div>
      <div class="kpi-value">$${metrics.minSalary}k<span class="unit"> – $${metrics.maxSalary}k</span></div>
      <div class="kpi-desc">Entry to senior compensation across all roles.</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Average Salary</div>
      <div class="kpi-value">$${metrics.avgSalary}k</div>
      <div class="kpi-desc">Composite average across ${data.reviews.length} reviewed roles.</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Workplace Rating</div>
      <div class="kpi-value">${metrics.avgWorkplace}<span class="unit"> / 10</span></div>
      <div class="kpi-desc">Average workplace environment rating.</div>
    </div>`;

  document.getElementById('role-tbody').innerHTML = data.reviews.map(r => `
    <tr>
      <td><div class="td-name">${r.title}</div></td>
      <td>${hiringBadge(r.hiringLevel)}</td>
      <td>${ratingPips(r.workplaceRating)}</td>
      <td><span class="days-val">${r.workStyle}</span></td>
      <td><span class="sal-val">$${(r.salary[1] / 1000).toFixed(0)}k/yr</span></td>
    </tr>`).join('');
}

/* ══════════════════════════════════════════════
   NEURAL CANVAS
══════════════════════════════════════════════ */

const canvas = document.getElementById('neural-canvas');
const ctx    = canvas ? canvas.getContext('2d') : null;
let W, H, particles, particleRGB = '255,255,255';
let mouse = { x: null, y: null, r: 160 };
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

function initCanvas() {
  if(!canvas || !ctx) return;
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
  particles = Array.from({ length: 75 }, () => {
    const x = Math.random() * W, y = Math.random() * H;
    return { x, y, baseX: x, baseY: y, size: Math.random() * 1.6 + 0.8, density: Math.random() * 24 + 2 };
  });
}

function animateCanvas() {
  if(!ctx) return;
  ctx.clearRect(0, 0, W, H);
  particles.forEach((p, i) => {
    if (mouse.x !== null) {
      const dx = mouse.x - p.x, dy = mouse.y - p.y, dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < mouse.r) {
        const f = (mouse.r - dist) / mouse.r;
        p.x -= (dx / dist) * f * p.density;
        p.y -= (dy / dist) * f * p.density;
      } else {
        p.x += (p.baseX - p.x) / 14;
        p.y += (p.baseY - p.y) / 14;
      }
    }
    ctx.fillStyle = `rgba(${particleRGB},0.42)`;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const dx = p.x - particles[j].x, dy = p.y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 115) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${particleRGB},${(1 - dist/115) * 0.24})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animateCanvas);
}

/* ══════════════════════════════════════════════
   CHANGE PATH & BOOT
══════════════════════════════════════════════ */

window.changePath = (newPath) => {
  if (!careerData[newPath]) {
      newPath = 'penetration-tester'; // Fallback
  }
  const data = careerData[newPath];

  const root = document.documentElement;
  root.style.setProperty('--accent',      data.accent);
  root.style.setProperty('--accent-dim',  data.accentDim);
  root.style.setProperty('--accent-glow', data.accentGlow);

  particleRGB = hexToRgb(data.accent);

  renderFeed(newPath);
  renderAnalytics(newPath);

  const toast = document.getElementById('toast');
  if(toast) {
      toast.textContent = `Synchronized: ${data.name}`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
  }
};

document.addEventListener("DOMContentLoaded", () => {
    initCanvas();
    animateCanvas();
    window.addEventListener('resize', initCanvas);

    // Grab the exact slug the user got from the engine
    let userPath = localStorage.getItem('userPath');
    
    // Fuzzy matching fallback just in case the slug is slightly off
    if (userPath && userPath !== "unknown" && !careerData[userPath]) {
        const cleanUserPath = userPath.replace(/[^a-z0-9]/g, '');
        for (let key of Object.keys(careerData)) {
            const cleanDbKey = key.replace(/[^a-z0-9]/g, '');
            if (cleanUserPath.includes(cleanDbKey) || cleanDbKey.includes(cleanUserPath)) {
                userPath = key;
                break;
            }
        }
    }

    changePath(userPath || 'penetration-tester');

    setTimeout(() => {
        const btn = document.querySelector('.tab-btn.active');
        const sl  = document.querySelector('.tab-slider');
        if (btn && sl) {
            sl.style.left  = btn.offsetLeft + 'px';
            sl.style.width = btn.offsetWidth + 'px';
        }
    }, 60);
});