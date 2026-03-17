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

  const generateFilename = (targetRole) => {
    const roleText = targetRole === 'developer' ? 'SoftwareEngineer' : 'ITSupport';
    return `Niclas_JuulSchaeffer_${roleText}.pdf`;
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

    // Get the filename for display
    const filename = generateFilename(targetRole);

    // Give React time to re-render with new values
    setTimeout(() => {
      // Alert user with the suggested filename
      alert(`Suggested filename:\n\n${filename}\n\nClick "Save" in the print dialog and use this name.`);
      
      // Trigger print dialog
      window.print();
    }, 100);
  };

  const presets = [
    { lang: 'en', role: 'developer', label: '💻 English - Software Engineer' },
    { lang: 'en', role: 'it-support', label: '🛠️ English - IT Support' },
    { lang: 'da', role: 'developer', label: '💻 Dansk - Softwareudvikler' },
    { lang: 'da', role: 'it-support', label: '🛠️ Dansk - IT Support' },
  ];

  const currentFilename = generateFilename(role);

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
                const filename = generateFilename(preset.role);
                return (
                  <div key={`${preset.lang}-${preset.role}`} className="preset-item">
                    <button
                      type="button"
                      className={`preset-btn ${
                        lang === preset.lang && role === preset.role ? 'active' : ''
                      }`}
                      onClick={() => {
                        generatePDF(preset.lang, preset.role);
                        setIsOpen(false);
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
                Role: <strong>{role === 'developer' ? 'Software Engineer' : 'IT Support'}</strong>
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
                  alert(`Suggested filename:\n\n${currentFilename}\n\nClick "Save" in the print dialog and use this name.`);
                  window.print();
                  setIsOpen(false);
                }}
              >
                🖨️ Print Current Selection
              </button>
            </div>

            <div className="print-options-help">
              <p className="help-text">
                💡 <strong>How to export:</strong> Click a preset, the suggested filename will appear, then save as PDF with that name in your print dialog.
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
