import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { languages, languageNames, getLocalizedPath } from '@/lib/i18n';

export const Header: React.FC = () => {
  const { language, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'destinations', path: '/destinations' },
    { key: 'services', path: '/services' },
    { key: 'blog', path: '/blog' },
    { key: 'faq', path: '/faq' },
    { key: 'contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={getLocalizedPath('/')} className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-serif font-bold text-xl text-foreground">
              Morocco MICE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={getLocalizedPath(item.path)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1"
              >
                <Globe className="w-4 h-4" />
                <span>{languageNames[language]}</span>
              </Button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-popover rounded-md shadow-card border border-border">
                  {languages.map((lang) => (
                    <a
                      key={lang}
                      href={`/${lang === 'en' ? '' : lang}`}
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                      onClick={() => setIsLangMenuOpen(false)}
                    >
                      {languageNames[lang]}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Button variant="cta" size="sm">
              {t('getProposal')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={getLocalizedPath(item.path)}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 flex flex-col space-y-3">
              {/* Mobile Language Selector */}
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <a
                    key={lang}
                    href={`/${lang === 'en' ? '' : lang}`}
                    className={`px-3 py-1 rounded text-sm transition-smooth ${
                      lang === language 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    {languageNames[lang]}
                  </a>
                ))}
              </div>
              
              <Button variant="cta" className="w-full">
                {t('getProposal')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};