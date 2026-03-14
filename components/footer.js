import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-col footer-col-brand">
                <div className="footer-logo-wrap">
                  <span className="footer-brand-name">Vaprosafe</span>
                </div>
                <p className="section-content footer-description">
                  專業提供 Draeger 個人防護裝備
                  (PPE)、氣體偵測器、動力濾網式呼吸防護具 (PAPR)、自給式呼吸器
                  (SCBA)
                  及防毒面罩。深耕台灣市場，服務半導體、石化工業及醫療機構，守護您的呼吸安全。
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h3 className="footer-col-title section-subtitle">快速連結</h3>
                <nav className="footer-nav">
                  <ul className="footer-nav-list">
                    <li>
                      <a href="/">
                        <div className="footer-nav-link">
                          <span>首頁</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>產品系列</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>解決方案</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>關於我們</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>聯絡資訊</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-col">
                <h3 className="footer-col-title section-subtitle">聯絡我們</h3>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="section-content">+886 02 2222 4860</span>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <span className="section-content">sales@tgele.tw</span>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-icon-box">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="section-content">
                      新北市中和區立德街98巷74號
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-inner">
                <p className="footer-copyright">© 2026 XRP 589</p>
                <div className="footer-legal">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>隱私條款</span>
                    </div>
                  </a>
                  <span className="footer-legal-divider"></span>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>服務條款</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  // Hover effect enhancement for social icons
  const socialIcons = document.querySelectorAll(".footer-social-icon")

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transition = "all 0.3s ease"
    })
  })

  // Dynamic Year Update (Optional, but good for "2026" context)
  const copyright = document.querySelector(".footer-copyright")
  if (copyright) {
    const currentYear = new Date().getFullYear()
    if (currentYear > 2026) {
      copyright.textContent = copyright.textContent.replace("2026", currentYear)
    }
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
