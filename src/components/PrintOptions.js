import React, { useState } from 'react';
import { useRole } from '../hooks/useRole';
import { useLang } from '../hooks/useLang';
import PropTypes from 'prop-types';
import './PrintOptions.scss';

export const PrintOptions = () => {
  const { role, switchRole } = useRole();
  const { lang, switchLanguage } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateFilename = (targetRole, targetLang) => {
    let roleText = 'General';
    if (targetRole === 'developer') roleText = 'SoftwareEngineer';
    else if (targetRole === 'it-support') roleText = 'ITSupport';
    
    const langText = targetLang === 'en' ? 'EN' : 'DA';
    return `Niclas_JuulSchaeffer_${roleText}_${langText}.pdf`;
  };

  const copyToClipboard = (filename) => {
    navigator.clipboard.writeText(filename);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatePDF = (targetLang, targetRole) => {
    // Switch to the desired language and role
    switchLanguage(targetLang);
    switchRole(targetRole);
    // No print dialog - just switch and let user see the filename
  };

  const presets = [
    { lang: 'en', role: 'developer', label: '💻 English - Software Engineer' },
    { lang: 'en', role: 'it-support', label: '🛠️ English - IT Support' },
    { lang: 'en', role: 'general', label: '👤 English - General Profile' },
    { lang: 'da', role: 'developer', label: '💻 Dansk - Softwareudvikler' },
    { lang: 'da', role: 'it-support', label: '🛠️ Dansk - IT Support' },
    { lang: 'da', role: 'general', label: '👤 Dansk - Generel Profil' },
  ];

  const currentFilename = generateFilename(role, lang);

  return (
    <>
      <div className="print-options-trigger">
        <button
          type="button"
          className="print-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          title="Export CV as PDF"
        >
          📥 Export PDF
        </button>
      </div>

      {isOpen && (
        <div className="print-options-modal">
          <div className="print-options-content">
            <div className="print-options-header">
              <h3>Export CV as PDF</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="print-options-presets">
              <p className="preset-intro">Quick export combinations:</p>
              {presets.map((preset) => {
                const filename = generateFilename(preset.role, preset.lang);
                return (
                  <div key={`${preset.lang}-${preset.role}`} className="preset-item">
                    <button
                      type="button"
                      className={`preset-btn ${
                        lang === preset.lang && role === preset.role ? 'active' : ''
                      }`}
                      onClick={() => {
                        generatePDF(preset.lang, preset.role);
                      }}
                    >
                      {preset.label}
                    </button>
                    <span className="preset-filename">{filename}</span>
                  </div>
                );
              })}
            </div>

            <div className="print-options-current">
              <p className="current-label">Current selection:</p>
              <p className="current-value">
                Language: <strong>{lang === 'en' ? 'English' : 'Dansk'}</strong> | 
                Role: <strong>{role === 'developer' ? 'Software Engineer' : role === 'it-support' ? 'IT Support' : 'General Profile'}</strong>
              </p>
              
              <div className="filename-display">
                <p className="filename-label">Suggested filename:</p>
                <div className="filename-box">
                  <code>{currentFilename}</code>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => copyToClipboard(currentFilename)}
                    title="Copy filename"
                  >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="print-current-btn"
                onClick={() => {
                  window.print();
                }}
              >
                🖨️ Print Current Selection
              </button>
            </div>

            <div className="print-options-help">
              <p className="help-text">
                💡 <strong>How to use:</strong> Select a preset to switch role/language, copy the suggested filename (includes language code), then click "Print" and save as PDF.
              </p>
            </div>
          </div>
        </div>
      )}

      {isOpen && <div className="print-options-backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
};

PrintOptions.propTypes = {};
