import React, { Fragment } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-root">
          <div className="navigation-container">
            <a href="/">
              <div aria-label="Vaprosafe 首頁" className="navigation-logo-link">
                <div className="navigation-logo-icon">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <span className="navigation-brand-name">
                  天基電子工業有限公司
                </span>
              </div>
            </a>
            <div className="navigation-desktop-menu">
              <div className="navigation-nav-links">
                <div className="navigation-dropdown-wrapper">
                  <button
                    aria-expanded="false"
                    className="navigation-link navigation-dropdown-trigger"
                  >
                    <span>產品系列</span>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      className="navigation-thq-navigation-chevron-elm"
                    >
                      <path
                        d="m6 9l6 6l6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div className="navigation-dropdown-content">
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>氣體檢測儀</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>呼吸防護 (PAPR)</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>空氣呼吸器 (SCBA)</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="navigation-dropdown-item">
                        <span>防毒面具與濾罐</span>
                      </div>
                    </a>
                  </div>
                </div>
                <a href="#">
                  <div className="navigation-link">
                    <span>行業解決方案</span>
                  </div>
                </a>
                <a href="#">
                  <div className="navigation-link">
                    <span>技術支援</span>
                  </div>
                </a>
                <a href="#">
                  <div className="navigation-link">
                    <span>關於我們</span>
                  </div>
                </a>
              </div>
              <a href="#contact">
                <div className="btn navigation-cta btn-primary">
                  <span>聯繫我們</span>
                </div>
              </a>
            </div>
            <button
              id="mobile-nav-toggle"
              aria-label="開啟選單"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-nav-overlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="/">
              <div className="navigation-logo-link">
                <div className="navigation-logo-icon">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <span className="navigation-brand-name">Vaprosafe</span>
              </div>
            </a>
            <button
              id="mobile-nav-close"
              aria-label="關閉選單"
              className="navigation-mobile-close"
            >
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
                  <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  <path d="M3 9h18M9 16l3-3l3 3"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <details className="navigation-mobile-details">
                <summary className="navigation-mobile-summary">
                  <span>產品系列</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m6 9l6 6l6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </summary>
                <div className="navigation-mobile-sublinks">
                  <a href="#">
                    <div className="navigation-mobile-link">
                      <span>氣體檢測儀</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="navigation-mobile-link">
                      <span>呼吸防護 (PAPR)</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="navigation-mobile-link">
                      <span>空氣呼吸器 (SCBA)</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="navigation-mobile-link">
                      <span>防毒面具與濾罐</span>
                    </div>
                  </a>
                </div>
              </details>
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>行業解決方案</span>
                </div>
              </a>
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>技術支援</span>
                </div>
              </a>
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>關於我們</span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <a href="#contact">
                <div className="btn navigation-mobile-cta btn-primary btn-lg">
                  <span>立即諮詢</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("mobile-nav-toggle")
  const closeBtn = document.getElementById("mobile-nav-close")
  const overlay = document.getElementById("mobile-nav-overlay")
  const body = document.body

  function openMenu() {
    overlay.style.display = "flex"
    setTimeout(() => {
      overlay.classList.add("is-active")
      toggleBtn.setAttribute("aria-expanded", "true")
      body.style.overflow = "hidden"
    }, 10)
  }

  function closeMenu() {
    overlay.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
    setTimeout(() => {
      if (!overlay.classList.contains("is-active")) {
        overlay.style.display = "none"
      }
    }, 400)
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  const mobileLinks = overlay.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && overlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  const dropdownTriggers = document.querySelectorAll(".navigation-dropdown-trigger")
  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true"
      trigger.setAttribute("aria-expanded", !isExpanded)
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <nav className="navigation-thq-navlinks-elm">
          <Link href="/">
            <a>
              {props.text ?? (
                <Fragment>
                  <span className="navigation-text28">Home</span>
                </Fragment>
              )}
            </a>
          </Link>
          <Link href="/compliance-certifications">
            <a>
              {props.text1 ?? (
                <Fragment>
                  <span className="navigation-text29">Page</span>
                </Fragment>
              )}
            </a>
          </Link>
        </nav>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-chevron-elm {
            width: 16px;
            height: 16px;
            transition: transform 0.2s ease;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-thq-navlinks-elm {
            gap: 16px;
            display: flex;
            align-items: center;
          }
          .navigation-text28 {
            display: inline-block;
          }
          .navigation-text29 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  text: undefined,
  text1: undefined,
}

Navigation.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
}

export default Navigation
