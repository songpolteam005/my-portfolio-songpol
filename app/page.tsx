'use client'; // เพิ่มเพื่อให้ React useState ทำงานได้ใน Next.js App Router

import React, { useState } from 'react';

export default function Home() {
  // สถานะสำหรับสลับ Tab (ค่าเริ่มต้นเป็น 'projects')
  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'education' | 'work-skills'>('projects');

  return (
    // เลื่อนทีละหน้า + ลายตาราง Grid เทาอ่อนบนพื้นขาว
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">

      {/* ================= (หน้าที่ 1) ================= */}
      <section className="min-h-screen w-full snap-start relative flex items-center justify-center px-4 sm:px-6 py-20 md:py-0 overflow-hidden bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">

        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-indigo-100/60 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-teal-100/50 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">

          {/* ฝั่งขวา: รูปโปรไฟล์ (มือถือ: แสดงก่อนข้อความ) */}
          <div className="order-1 md:order-2 md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-2 bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <img
                    src="/team.jpg"
                    alt="ทรงพล พุ่มนุช"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ข้อความ*/}
          <div className="order-2 md:order-1 md:col-span-7 text-center md:text-left space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-[11px] sm:text-xs font-medium text-slate-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Welcome to My Portfolio
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              ทรงพล พุ่มนุช
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-bold tracking-wide">
              Songpol Phumunuch
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600">
              Frontend Developer & Backend Developer
            </p>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              สวัสดีครับชื่อ <span className="text-slate-900 font-semibold">"ทีม"</span> กำลังศึกษาอยู่ที่มหาวิทยาลัยราชภัฏพระนคร สาขาวิทยาการคอมพิวเตอร์ และกำลังศึกษาพัฒนาทักษะด้านการพัฒนาเว็บไซต์และแอปพลิเคชัน ในด้าน
              <span className=" text-slate-900 font-bold">"Frontend และ Backend Development"</span>
              โดยใช้เทคโนโลยีสมัยใหม่ในการสร้างเว็บแอปพลิเคชันสมัยใหม่และพร้อมที่จะเรียนรู้เพิ่มขึ้นอีก
            </p>


            {/* ปุ่มกด */}
            <div className="pt-2 sm:pt-4 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="#showcase"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>👁️</span> View Portfolio
              </a>
              <a
                href="#contact"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-200/80 hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>🚀</span> Contact Me
              </a>
            </div>
          </div>

        </div>

        <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce text-xs font-mono">
          SCROLL DOWN ↓
        </div>
      </section>

      {/* (รวม Projects + Skills + Education + work skills)  */}
      <section id="showcase" className="min-h-screen w-full snap-start relative flex items-center justify-center px-4 sm:px-6 py-16 md:py-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-5xl w-full mx-auto space-y-6 sm:space-y-8">

          {/* Header & Title */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Portfolio Showcase</h2>
            <p className="text-slate-500 text-sm sm:text-base">Explore my projects, work skills, skills and Education</p>

            {/* ปุ่ม Tab Switcher: wrap ได้บนจอเล็ก */}
            <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${activeTab === 'projects'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
              >
                <span>💻</span> <span className="whitespace-nowrap">Projects(โปรเจกต์)</span>
              </button>

              <button
                onClick={() => setActiveTab('work-skills')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${activeTab === 'work-skills'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
              >
                <span>💼</span> <span className="whitespace-nowrap">Work Skills(ทักษะการทำงาน)</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${activeTab === 'skills'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
              >
                <span>⚡</span> <span className="whitespace-nowrap">Skills(ทักษะ)</span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
              >
                <span>🎓</span> <span className="whitespace-nowrap">Education(ประวัติการศึกษา)</span>
              </button>
            </div>
          </div>

          {/* TAB CONTENT 1: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">

              {/* Project 1 */}
              <div className="bg-blue-50 rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between group hover:border-indigo-300 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
                <div className="h-28 sm:h-36 bg-slate-100 flex items-center justify-center border-b border-slate-200/80 text-xs font-mono text-slate-400">
                  <span>[ cyber-lab preview ]</span>
                </div>
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    cyber-lab-load-testing
                  </h3>
                  <p className="text-sm sm:text-l text-slate-600 leading-relaxed">
                    Web Application Load Testing and Rate Limiting Protection
                  </p>
                  <a href="https://github.com/songpolteam005/cyber-lab-load-testing" target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-indigo-600">View Code 🔗</a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-green-50 rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between group hover:border-teal-300 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
                <div className="h-28 sm:h-36 bg-slate-100 flex items-center justify-center border-b border-slate-200/80 text-xs font-mono text-slate-400">
                  <span>[ UX/UI preview ]</span>
                </div>
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    UX/UI for image website
                  </h3>
                  <p className="text-sm sm:text-l text-slate-600 leading-relaxed">
                    โปรเจกต์การออกแบบที่กำลังพัฒนา UX/UI แสดงผลงานรูปภาพ
                  </p>
                  <a href="https://github.com/songpolteam005/test_App" target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-teal-600">View Design 🔗</a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-purple-50 rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between group hover:border-purple-300 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] sm:col-span-2 md:col-span-1">
                <div className="h-28 sm:h-36 bg-slate-100 flex items-center justify-center border-b border-slate-200/80 text-xs font-mono text-slate-400">
                  <span>[ Portfolio preview ]</span>
                </div>
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    Personal Portfolio
                  </h3>
                  <p className="text-sm sm:text-l text-slate-600 leading-relaxed">
                    สร้างหน้า Portfolio ส่วนตัวด้วย Next.js และ Tailwind CSS
                  </p>
                  <a href="https://github.com/songpolteam005/my-portfolio-songpol" target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-purple-600">View Code 🔗</a>
                </div>
              </div>

            </div>

          )}

          {/*  Work SKILLS */}
          {activeTab === 'work-skills' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 animate-fadeIn">
              {['มีการทำงานเป็นทีม', 'มีความรับผิดชอบ', 'ปรับตัวเข้ากับตนอื่นได้', 'มีความคิดสร้างสรรค์', 'สื่อสาร', 'แก้ปัญหา'].map((skill) => (
                <div key={skill} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-center space-y-2 hover:border-indigo-300 transition-all">
                  <p className="text-xs sm:text-sm font-bold text-slate-800">{skill}</p>
                </div>
              ))}
            </div>
          )}

          {/*  SKILLS */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 animate-fadeIn">
              {['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Next.js', 'Vue.js', 'Figma', 'GitHub', 'VS Code', 'Vercel'].map((skill) => (
                <div key={skill} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-center space-y-2 hover:border-indigo-300 transition-all">
                  <p className="text-xs sm:text-sm font-bold text-slate-800">{skill}</p>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === 'education' && (
            <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4 animate-fadeIn">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">2566 - ปัจจุบัน</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">มหาวิทยาลัยราชภัฏพระนคร</h3>
                <p className="text-sm text-slate-600">คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์</p>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">2564 - 2566</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">โรงเรียนดอนเมืองทหารอากาศบำรุง</h3>
                <p className="text-sm text-slate-600">มัธยมศึกษาตอนปลาย สายศิลป์ภาษาจีน (จบการศึกษา)</p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ================= (หน้าที่ 3) ================= */}
      <section id="contact" className="min-h-screen w-full snap-start relative flex items-center justify-center px-4 sm:px-6 py-16 md:py-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-3xl w-full mx-auto space-y-6 sm:space-y-8 text-center">

          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-indigo-600 uppercase">Contact Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-1">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            <a href="mailto:songpolteam005@gmail.com" className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-300 transition-all shadow-sm">
              <p className="text-sm sm:text-base text-slate-400 font-mono">EMAIL</p>
              <p className="text-sm sm:text-l font-bold text-slate-800 mt-1 break-all">songpolteam005@gmail.com</p>
            </a>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
              <p className="text-sm sm:text-base text-slate-400 font-mono">LINE</p>
              <p className="text-sm sm:text-l font-bold text-slate-800 mt-1">@tamsoso</p>
            </div>

            <a href="https://github.com/songpolteam005" target="_blank" rel="noreferrer" className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-300 transition-all shadow-sm">
              <p className="text-sm sm:text-base text-slate-400 font-mono">GITHUB</p>
              <p className="text-sm sm:text-l font-bold text-slate-800 mt-1">songpolteam005</p>
            </a>

            <a href="https://www.facebook.com/songpol.pomnuch.2024" target="_blank" rel="noreferrer" className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-300 transition-all shadow-sm">
              <p className="text-sm sm:text-base text-slate-400 font-mono">FACEBOOK</p>
              <p className="text-sm sm:text-l font-bold text-slate-800 mt-1">Songpol Pomnuch</p>
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-6 sm:pt-8">© {new Date().getFullYear()} Songpol Pomnuch. All rights reserved.</p>

        </div>
      </section>

    </div>
  );
}