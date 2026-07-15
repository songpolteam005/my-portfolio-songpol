import React from 'react';

export default function Home() {
  return (
    // เปลี่ยนเป็นโทนสีดาร์กหรู ๆ เท่ ๆ (Slate-950) และจัดฟอนต์ให้อ่านง่าย
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans selection:bg-indigo-500 selection:text-white">

      {/* 1. HERO SECTION - เติมลูกเล่นแสงไฟส่อง (Glow Effect) ด้านหลัง และเพิ่มรูปโปรไฟล์ด้านขวา */}
      <header className="relative overflow-hidden bg-slate-900/40 border-b border-slate-900 py-20 md:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-12 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

            {/* ฝั่งซ้าย: ข้อความและปุ่มแอคชัน */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 mb-6 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Portfolio
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">ทรงพล พุ่มนุช</span>
              </h1>

              <div className="mt-6 space-y-3">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">UX/UI Designer & Frontend Developer</h2>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  กำลังศึกษาและพัฒนาเว็บไซต์อย่างต่อเนื่อง โดยให้ความสำคัญกับ UX/UI 
                  การสร้างประสบการณ์ที่ดีให้ผู้ใช้ และการเขียนโค้ดที่เป็นระเบียบเรียบร้อยเพื่อประสิทธิภาพสูงสุด
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl text-slate-950 bg-gradient-to-r from-indigo-400 to-emerald-400 hover:opacity-90 shadow-lg shadow-indigo-500/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  ผลงาน
                </a>
                
                {/* ปุ่มดาวน์โหลด CV */}
                <a
                  href="/resume-songpol.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-800 text-base font-semibold rounded-xl text-slate-300 bg-slate-900/80 hover:bg-slate-900 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  ดาวน์โหลด CV ⏬
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-800 text-base font-semibold rounded-xl text-slate-300 bg-slate-900/80 hover:bg-slate-900 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  ติดต่อฉัน
                </a>
              </div>
            </div>

            {/* ฝั่งขวา: รูปภาพกรอบโปรไฟล์แบบวงกลมเรืองแสง */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />

              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-500 shadow-2xl">
                <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden border-2 border-slate-950">
                  <img
                    src="/team.jpg"
                    alt="ทรงพล พุ่มนุช"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-28">

        {/* 2. ABOUT SECTION */}
        <section className="bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-8 md:p-12 rounded-3xl border border-slate-900 shadow-xl backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl transition-all group-hover:bg-indigo-500/10" />
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-2">เกี่ยวกับฉัน</p>
                       
          </div>
          <div className="text-slate-400 text-lg leading-relaxed space-y-4">
            <p>
              สวัสดีครับผม <span className="text-white font-semibold">"ทีม"</span> ครับ 
              ผมเป็นคนที่มีความหลงใหลในการผสมผสานระหว่างโลกของศิลปะ (<span className="text-indigo-400 font-medium">Design</span>) 
              และโลกของตรรกะ (<span className="text-emerald-400 font-medium">Development</span>) เข้าด้วยกัน
            </p>
            <p>
              เป้าหมายของผมคือการสร้างสรรค์หน้าตาเว็บไซต์ที่ไม่ใช่แค่สวยงามสะดุดตา แต่ต้องมอบประสบการณ์การใช้งานที่ลื่นไหล 
              และตอบโจทย์ผู้ใช้งานจริง ๆ ปัจจุบันผมกำลังมุ่งมั่นพัฒนาทักษะในสาย <span className="text-purple-400 font-medium">Frontend Developer</span> และ 
              <span className="text-purple-400 font-medium"> UX/UI Designer</span> อย่างเข้มข้นเพื่อสร้างผลงานที่มีประสิทธิภาพสูงสุดครับ
            </p>
          </div>
        </section>

        {/* 2.5 TECH STACK SECTION */}
        <section className="space-y-8">
          <div className="mb-6 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-purple-400 mb-2">ทักษะความสามารถ</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FRONTEND CARD */}
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900/80 shadow-md hover:border-indigo-500/20 transition-all backdrop-blur-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-orange-400 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950/80 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DATABASE CARD */}
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900/80 shadow-md hover:border-indigo-500/20 transition-all backdrop-blur-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-orange-400 mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950/80 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* TOOLS & DESIGN CARD */}
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900/80 shadow-md hover:border-indigo-500/20 transition-all backdrop-blur-sm">
              <h3 className="text-sm uppercase tracking-wider font-bold text-orange-400 mb-4">Tools & Design</h3>
              <div className="flex flex-wrap gap-2">
                {['Clerk', 'Figma', 'GitHub', 'VS Code', 'XAMPP', 'Vercel'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950/80 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-16">
          <div className="mb-10 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-emerald-400 mb-2">ผลงาน</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">โปรเจกต์ที่เคยทำ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* การ์ดผลงานที่ 1 (cyber-lab-load-testing) */}
            <article className="group bg-slate-900/40 rounded-2xl border border-slate-900 shadow-md hover:shadow-xl hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="w-full h-40 bg-slate-950 flex items-center justify-center border-b border-slate-900 text-slate-600 font-mono text-sm relative group-hover:text-slate-400 transition-colors">
                <span>[ cyber-lab screenshot ]</span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    cyber-lab-load-testing
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    Cyberlab Load Test | Web Application Load Testing and Rate Limiting Protection เป็นส่วนนึงของงานวิชา Cybersecurity
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-950 flex items-center gap-1.5 text-xs">
                    
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Cybersecurity
                  </span>
                  <a
                    href="https://github.com/songpolteam005/cyber-lab-load-testing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-200 hover:bg-indigo-500 hover:text-white transition-all duration-200 shadow-sm"
                  >
                    Code 🔗
                  </a>
                </div>
              </div>
            </article>

            {/* การ์ดผลงานที่ 2 (UX/UI for an image website) - แก้ไขจุดที่บั๊กเรียบร้อยแล้ว */}
            <article className="group bg-slate-900/40 rounded-2xl border border-slate-900 shadow-md hover:shadow-xl hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="w-full h-40 bg-slate-950 flex items-center justify-center border-b border-slate-900 text-slate-600 font-mono text-sm relative group-hover:text-slate-400 transition-colors">
                <span>[ UI/UX Design preview ]</span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    UX/UI for an image website
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    โปรเจกต์การออกแบบและวางโครงสร้างหน้าจอผู้ใช้งานสำหรับเว็บไซต์คลังรูปภาพ เน้นความลื่นไหลและสวยงาม
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-950 flex items-center gap-1.5 text-xs">
                    
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    UX/UI Design
                  </span>
                  <a
                    href="https://github.com/songpolteam005/test_App"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-200 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-200 shadow-sm"
                  >
                    Design 🔗
                  </a>
                </div>
              </div>
            </article>

            {/* การ์ดผลงานที่ 3 (Portfolio ตัวเอง) */}
            <article className="group bg-slate-900/40 rounded-2xl border border-slate-900 shadow-md hover:shadow-xl hover:border-purple-500/30 hover:bg-slate-900/80 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="w-full h-40 bg-slate-950 flex items-center justify-center border-b border-slate-900 text-slate-600 font-mono text-sm relative group-hover:text-slate-400 transition-colors">
                <span>[ Portfolio preview ]</span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    Portfolio ตัวเอง
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    สร้างหน้า Portfolio ส่วนตัวด้วย Next.js และจัดสไตล์อย่างงดงามด้วย Tailwind CSS เพื่อแสดงตัวตน
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-950 flex items-center gap-1.5 text-xs">
                    
                    
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Next.js Web
                  </span>
                  <a
                    href="https://github.com/songpolteam005/my-portfolio-songpol"
                  target= "_balnk"
                  rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-300 hover:bg-purple-500 hover:text-white transition-all duration-200 shadow-sm"
                  >
                    Portfolio 🔗
                  </a>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* 4. CONTACT SECTION */}
        <section id="contact" className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 p-8 md:p-12 rounded-3xl border border-indigo-500/10 shadow-2xl scroll-mt-16">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-2">ติดต่อ</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Contact</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:songpolteam005@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-950 transition-all group"
            >
              <span className="text-2xl bg-indigo-500/10 p-2.5 rounded-xl text-indigo-400 group-hover:scale-110 transition-transform">📧</span>
              <div>
                <p className="text-xs text-slate-500 font-medium">ส่งอีเมล</p>
                <p className="text-sm font-semibold text-slate-200">songpolteam005@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-900">
              <span className="text-2xl bg-emerald-500/10 p-2.5 rounded-xl text-emerald-400">💬</span>
              <div>
                <p className="text-xs text-slate-500 font-medium"> Line</p>
                <p className="text-sm font-semibold text-slate-200">@tamsoso</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <a 
              href="https://github.com/songpolteam005"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-950 transition-all group"
            >
              <span className="text-2xl bg-slate-800 p-2.5 rounded-xl text-slate-400 group-hover:scale-110 transition-transform group-hover:text-white">🐈‍⬛</span>
              <div>
                <p className="text-xs text-slate-500 font-medium">ดูโค้ดบน</p>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white">GitHub Profile</p>
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}