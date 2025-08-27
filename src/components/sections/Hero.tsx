import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { HeroProps } from '../../types';
import Button from '../ui/Button';
import { LampContainer } from '../ui/lamp';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Hero: React.FC<HeroProps> = ({ personalInfo, phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { elementRef, hasIntersected } = useIntersectionObserver({ triggerOnce: true });

  // Simple typing animation
  useEffect(() => {
    if (!hasIntersected) return;

    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, hasIntersected]);

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
    { icon: MapPin, href: '#', label: personalInfo.location }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/arnavresumeLatest.pdf';
    link.download = 'arnavresumeLatest.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={elementRef}
      id="home"
      className="relative"
    >
      <LampContainer>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
        >
          Hi, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-1 bg-gradient-to-br from-slate-400 to-slate-600 py-1 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl"
        >
          I'm a{' '}
          <span className="text-cyan-400 font-semibold">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button
            onClick={handleResumeDownload}
            variant="primary"
            size="lg"
            className="group bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button
            href="#contact"
            variant="outline"
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label === 'Email' || social.label === 'Phone' ? undefined : '_blank'}
              rel={social.label === 'Email' || social.label === 'Phone' ? undefined : 'noopener noreferrer'}
              className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 border border-slate-700/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center space-x-2 text-slate-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <MapPin className="w-4 h-4" />
          <span>{personalInfo.location}</span>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default Hero;

