import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>TangibleElectronics</title>
          <meta property="og:title" content="TangibleElectronics" />
          <link
            rel="canonical"
            href="https://best-funny-eland-kli7f5.teleporthq.app/"
          />
          <meta
            property="og:url"
            content="https://best-funny-eland-kli7f5.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-overview">
          <div className="hero-media-container">
            <video
              src="https://videos.pexels.com/video-files/4213298/4213298-hd_1920_1080_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-bg-video"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-content-block">
              <h1 className="home-hero-title hero-title">
                守護台灣產業安全：頂尖 Draeger 呼吸防護與氣體偵測方案
              </h1>
              <p className="hero-subtitle home-hero-subtitle">
                Vaprosafe 為半導體、石化及醫療產業提供專業級 Draeger
                PPE、氣體偵測器、PAPR 及 SCBA
                解決方案，確保您在嚴苛環境下的絕對安全。
              </p>
              <div className="hero-cta-group">
                <a href="#products">
                  <div className="btn btn-primary btn-lg">
                    <span>探索產品</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="btn btn-outline btn-lg">
                    <span>聯繫專家</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="industry-solutions">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">產業安全解決方案</h2>
              <p className="section-content">
                針對台灣核心產業量身打造，符合國際法規與本土安全標準。
              </p>
            </div>
            <div className="solutions-grid">
              <div className="solution-card">
                <div className="icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">半導體與高科技</h3>
                <p className="section-content">
                  提供針對特殊化學氣體偵測的精密設備，確保無塵室與生產線的持續安全運作。
                </p>
              </div>
              <div className="solution-card">
                <div className="icon-box">
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
                      <path d="M4 21c1.147-4.02 1.983-8.027 2-12h6c.017 3.973.853 7.98 2 12"></path>
                      <path d="M12.5 13H17c.025 2.612.894 5.296 2 8M9 5a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1M3 21h19"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">石化與能源</h3>
                <p className="section-content">
                  強化的防爆氣體監測與長效型呼吸保護裝備，應對高度易燃與有毒氣體環境。
                </p>
              </div>
              <div className="solution-card">
                <div className="icon-box">
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
                      <path d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"></path>
                      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
                      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">醫療與生技</h3>
                <p className="section-content">
                  提供輕量化 PAPR
                  與專業防護面罩，在防疫與臨床手術中提供醫護人員極致保護。
                </p>
              </div>
              <div className="solution-card">
                <div className="icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">合規與培訓</h3>
                <p className="section-content">
                  所有設備均符合歐盟與台灣勞安法規，並提供完整的技術培訓與維護支援。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="product-highlights">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">核心 Draeger 產品系列</h2>
              <p className="section-content">
                精選全球領先的防護科技，專為極端環境打造。
              </p>
            </div>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    alt="Draeger Gas Mask"
                    src="/%C3%A6%C2%B0%C2%B4%C3%A5%C2%A7%C2%91%C3%A5%C2%A8%C2%98-1500w.jpg"
                    className="product-img"
                  />
                </div>
                <div className="product-info">
                  <h3 className="section-subtitle">專業防護面罩與濾罐</h3>
                  <p className="section-content">
                    符合人體工學，提供全視野與卓越的密封性，適用於各類化學蒸氣防護。
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>查看規格</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    alt="Draeger Gas Detector"
                    src="/x-am8kl-1500w.jpg"
                    className="product-img"
                  />
                </div>
                <div className="product-info">
                  <h3 className="section-subtitle">攜帶式氣體偵測器</h3>
                  <p className="section-content">
                    精準偵測多種有毒及易燃氣體，反應迅速，操作簡便，適合石化巡檢。
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>查看規格</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper home-thq-product-image-wrapper-elm3">
                  <img
                    alt="Draeger SCBA"
                    src="/174135_02_x-plore-8000_02_if-award-1500w.jpg"
                    loading="eager"
                    className="product-img"
                  />
                </div>
                <div className="product-info">
                  <h3 className="section-subtitle">
                    動力式呼吸防護系統 (PAPR)
                  </h3>
                  <p className="section-content">
                    主動過濾空氣，減輕呼吸阻力，適合長時間在醫療或化工環境作業。
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>查看規格</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    alt="Draeger SCBA"
                    src="/firefighter-using-draeger-pss-airboss-scba-with-bodyguard-16-6-d-20043-2020-1500w.jpg"
                    className="product-img"
                  />
                </div>
                <div className="product-info">
                  <h3 className="section-subtitle">自給式呼吸器 (SCBA)</h3>
                  <p className="section-content">
                    為火災救援或缺氧環境提供獨立空氣源，堅固耐用，確保生命安全。
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>查看規格</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="safety-impact">
          <div className="container">
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-number">
                  <span>100%</span>
                </div>
                <h3 className="section-subtitle">法規合規性</h3>
                <p className="section-content">
                  所有設備均通過 CE, NIOSH 及台灣本地勞安檢驗標準。
                </p>
              </div>
              <div className="impact-item">
                <div className="impact-number">
                  <span>500+</span>
                </div>
                <h3 className="section-subtitle">產業部署</h3>
                <p className="section-content">
                  已成功協助超過 500 家台灣企業建立完善的安全防線。
                </p>
              </div>
              <div className="impact-item">
                <div className="impact-number">
                  <span>24/7</span>
                </div>
                <h3 className="section-subtitle">技術支援</h3>
                <p className="section-content">
                  全天候專業顧問諮詢，確保您的安全設備始終處於最佳狀態。
                </p>
              </div>
              <div className="impact-item">
                <div className="impact-number">
                  <span>0</span>
                </div>
                <h3 className="section-subtitle">工安意外</h3>
                <p className="section-content">
                  致力於透過精準偵測與防護，將作業風險降至零。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="case-studies">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">成功案例分享</h2>
              <p className="section-content">
                了解我們如何協助不同產業解決複雜的安全挑戰。
              </p>
            </div>
            <div className="case-grid">
              <div className="case-card">
                <div className="case-tag">
                  <span>半導體</span>
                </div>
                <h3 className="section-subtitle">新竹科學園區化學品監測系統</h3>
                <p className="section-content">
                  為頂尖晶圓代工廠部署 Draeger 固定式氣體偵測網絡，實現 0.1ppm
                  級別的精準監控。
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>閱讀全文</span>
                  </div>
                </a>
              </div>
              <div className="case-card">
                <div className="case-tag">
                  <span>石化業</span>
                </div>
                <h3 className="section-subtitle">麥寮石化廠大修安全升級</h3>
                <p className="section-content">
                  在年度停機檢修期間，提供超過 200 套 SCBA 與 PAPR
                  裝備，確保數千名作業人員零傷亡。
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>閱讀全文</span>
                  </div>
                </a>
              </div>
              <div className="case-card">
                <div className="case-tag">
                  <span>醫療業</span>
                </div>
                <h3 className="section-subtitle">醫學中心負壓病房防護專案</h3>
                <p className="section-content">
                  為第一線醫護人員配置 Draeger X-plore 8000
                  PAPR，顯著提升防疫期間的作業舒適度與安全性。
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>閱讀全文</span>
                  </div>
                </a>
              </div>
              <div className="case-card">
                <div className="case-tag">
                  <span>消防救援</span>
                </div>
                <h3 className="section-subtitle">高雄工業區應急救援設備更新</h3>
                <p className="section-content">
                  協助特搜隊更新 Draeger PSS
                  系列空氣呼吸器，大幅縮短應變時間並提升任務成功率。
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>閱讀全文</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">我們的服務流程</h2>
              <p className="section-content">
                從評估到維護，提供一站式的專業安全服務。
              </p>
            </div>
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">
                  <span>01</span>
                </div>
                <h3 className="section-subtitle">現場風險評估</h3>
                <p className="section-content">
                  專業顧問實地考察，識別潛在的氣體與呼吸風險。
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">
                  <span>02</span>
                </div>
                <h3 className="section-subtitle">客製化方案設計</h3>
                <p className="section-content">
                  根據作業環境與預算，精選最合適的 Draeger 設備組合。
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">
                  <span>03</span>
                </div>
                <h3 className="section-subtitle">設備安裝與訓練</h3>
                <p className="section-content">
                  專人到場安裝，並為您的團隊提供詳細的操作與保養訓練。
                </p>
              </div>
              <div className="step-item">
                <div className="step-number">
                  <span>04</span>
                </div>
                <h3 className="section-subtitle">持續維護與支援</h3>
                <p className="section-content">
                  定期校正與耗材更換，確保安全防線永不中斷。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials-rail">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;Vaprosafe 提供的 Draeger
                偵測器在我們半導體製程中表現極其穩定，是我們最信賴的夥伴。&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">陳經理</span>
                <span className="author-title">新竹科學園區 工安部</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;在石化廠高溫高壓的環境下，Draeger 的 SCBA
                給了我們同仁最大的安全感，耐用度無話可說。&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">林廠長</span>
                <span className="author-title">雲林麥寮 石化工業區</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;PAPR
                設備解決了醫護人員長時間配戴口罩的悶熱問題，防護等級更讓我們在防疫第一線無後顧之憂。&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">王醫師</span>
                <span className="author-title">台北 醫學中心</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;從評估到售後服務，Vaprosafe
                的專業度讓我們印象深刻，真正做到了全方位守護。&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">李主任</span>
                <span className="author-title">桃園 化學品倉儲中心</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="cta-assessment">
          <div className="container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">立即申請專業安全評估</h2>
                <p className="section-content">
                  別讓隱藏的風險威脅您的團隊。聯繫
                  Vaprosafe，讓我們為您的設施量身打造 Draeger 安全解決方案。
                </p>
                <div className="cta-features">
                  <div className="cta-feature-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>免費初步諮詢</span>
                  </div>
                  <div className="cta-feature-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>客製化防護報告</span>
                  </div>
                </div>
              </div>
              <div className="cta-form-wrapper">
                <form
                  action="#"
                  method="POST"
                  data-form-id="1f6820d5-af35-4e6c-ba9f-af2ed7f625db"
                  className="contact-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="thq_textinput_n4wg"
                      name="textinput"
                      required="true"
                      placeholder="姓名"
                      data-form-field-id="thq_textinput_n4wg"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="thq_textinput_xK-G"
                      name="textinput"
                      required="true"
                      placeholder="公司電子郵件"
                      data-form-field-id="thq_textinput_xK-G"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      id="thq_select_vB94"
                      name="select"
                      required="true"
                      data-form-field-id="thq_select_vB94"
                      className="form-input"
                    >
                      <option value="true" disabled="true" selected="true">
                        產業類別
                      </option>
                      <option value="semiconductor">半導體</option>
                      <option value="petrochemical">石化</option>
                      <option value="hospital">醫療</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <button
                    id="thq_button_6VNX"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_6VNX"
                    className="btn btn-block btn-primary btn-lg"
                  >
                    送出申請
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  position: relative;
  overflow: hidden;
}
@media (max-width: 479px) {
section {
  padding: var(--spacing-2xl) 0;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="vaprosafe-interactions">
(function(){
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        fadeObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply initial styles and start observing
  document.querySelectorAll(".solution-card, .product-card, .case-card, .step-item, .impact-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    fadeObserver.observe(el)
  })

  // Parallax effect for Hero Video
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset
    const video = document.querySelector(".hero-bg-video")
    if (video) {
      video.style.transform = \`translateY(\${scroll * 0.3}px)\`
    }
  })

  // Form submission feedback (UI only)
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const btn = contactForm.querySelector("button")
      const originalText = btn.textContent

      // Visual feedback only - native submission still occurs if action is set
      btn.disabled = true
      btn.textContent = "傳送中..."
      btn.style.backgroundColor = "var(--color-accent)"

      setTimeout(() => {
        btn.textContent = "已送出！我們會盡快聯繫您"
        contactForm.reset()

        setTimeout(() => {
          btn.disabled = false
          btn.textContent = originalText
          btn.style.backgroundColor = ""
        }, 3000)
      }, 1500)
    })
  }

  // Smooth scroll snap handling for testimonials
  const rail = document.querySelector(".testimonials-rail")
  if (rail) {
    let isDown = false
    let startX
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      rail.classList.add("active")
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })

    rail.addEventListener("mouseleave", () => {
      isDown = false
    })

    rail.addEventListener("mouseup", () => {
      isDown = false
    })

    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon27"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text34">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon27 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text34 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          @media (max-width: 1200px) {
            .home-thq-product-image-wrapper-elm3 {
              padding-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
