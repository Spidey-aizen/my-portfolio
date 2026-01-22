import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, ShieldAlert } from 'lucide-react';
import emailjs from '@emailjs/browser';

const About = ({ isDark }) => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');

    // INTEGRATED YOUR KEYS
    emailjs.sendForm(
      'service_mhpirds', 
      'template_257lbez', 
      form.current, 
      '6evG3QCrSy_emK2zT'
    )
    .then(() => {
      setStatus('SUCCESS: LOGGED');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000);
    }, (error) => {
      setStatus('ERROR: JAMMED');
      console.log('FAILED...', error.text);
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl px-6 py-20 select-none">
      <div className="w-full mb-10 flex items-end justify-between border-b-2 border-red-600/50 pb-4">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase">Subject_About</h2>
          <p className="text-[10px] font-bold opacity-40 tracking-[0.5em] uppercase mt-2">Statement of Intent // Evidence_ID: 012024</p>
        </div>
        <ShieldAlert size={40} className="text-red-600 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="space-y-6">
          <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
            Subject is a **Visual Engineer** specialized in high-performance frontend architectures. 
            Operates primarily with React and Framer Motion to create psychological UI environments.
          </p>
          <div className={`p-4 border-l-4 border-red-600 ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Technical_Stats</h4>
            <ul className="text-[9px] font-bold space-y-1 opacity-60 uppercase">
              <li>GPA: 8.7_STABLE</li>
              <li>INSTITUTION: KSR_COLLEGE</li>
              <li>SPECIALTY: NEO_MINIMALISM</li>
            </ul>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={`p-6 border-2 ${isDark ? 'border-white/10 bg-black/40' : 'border-slate-200 bg-white shadow-xl'}`}>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            {/* MATCHING YOUR DASHBOARD VARIABLES */}
            <div className="relative">
              <User size={14} className="absolute left-3 top-3 opacity-30" />
              <input type="text" name="name" placeholder="OPERATOR_NAME" required
                className={`w-full pl-10 pr-4 py-3 text-[10px] font-bold uppercase tracking-widest border-b bg-transparent outline-none focus:border-red-500 transition-colors ${isDark ? 'border-white/10' : 'border-slate-900/10'}`} />
            </div>

            <div className="relative">
              <Mail size={14} className="absolute left-3 top-3 opacity-30" />
              <input type="email" name="email" placeholder="CONTACT_ENCRYPTION" required
                className={`w-full pl-10 pr-4 py-3 text-[10px] font-bold uppercase tracking-widest border-b bg-transparent outline-none focus:border-red-500 transition-colors ${isDark ? 'border-white/10' : 'border-slate-900/10'}`} />
            </div>

            <div className="relative">
              <MessageSquare size={14} className="absolute left-3 top-3 opacity-30" />
              <textarea name="message" rows="4" placeholder="TRANSMISSION_DETAILS" required
                className={`w-full pl-10 pr-4 py-3 text-[10px] font-bold uppercase tracking-widest border-b bg-transparent outline-none focus:border-red-500 transition-colors resize-none ${isDark ? 'border-white/10' : 'border-slate-900/10'}`} />
            </div>

            <button type="submit" className={`mt-4 py-4 flex items-center justify-center gap-3 font-black text-xs tracking-[0.4em] uppercase transition-all ${status.includes('SUCCESS') ? 'bg-green-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}>
              {status || 'SEND_TRANSMISSION'}
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default About;