"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const formations = [
  {
    id: 1,
    title: "Cộng sản nguyên thủy",
    icon: "🏕️",
    period: "Khoảng 2,5 triệu năm - 4000 TCN",
    image: "/cong-san-nguyen-thuy.jpg",
    characteristics: [
      "Công cụ lao động thô sơ (đá, gỗ)",
      "Sở hữu chung về tư liệu sản xuất",
      "Lao động tập thể, phân phối bình đẳng",
      "Chưa có giai cấp và nhà nước",
    ],
    conclusion: "Hình thái đầu tiên của xã hội loài người",
  },
  {
    id: 2,
    title: "Chiếm hữu nô lệ",
    icon: "⛓️",
    period: "Khoảng 4000 TCN - thế kỷ V",
    image: "/no-le.jpg",
    characteristics: [
      "Xuất hiện chế độ tư hữu về TLSX",
      "Chủ nô sở hữu cả nô lệ như tài sản",
      "Mâu thuẫn chủ nô – nô lệ",
      "Nhà nước đầu tiên ra đời",
    ],
    conclusion: "Hình thái có giai cấp đối kháng đầu tiên",
  },
  {
    id: 3,
    title: "Phong kiến",
    icon: "🏰",
    period: "Thế kỷ V - thế kỷ XVIII",
    image: "/phong-kien.jpg",
    characteristics: [
      "Địa chủ sở hữu ruộng đất",
      "Nông dân phụ thuộc vào ruộng đất",
      "Quan hệ bóc lột địa tô",
      "Nhà nước quân chủ chuyên chế",
    ],
    conclusion: "Nông nghiệp là nền tảng kinh tế",
  },
  {
    id: 4,
    title: "Tư bản chủ nghĩa",
    icon: "🏭",
    period: "Thế kỷ XVIII - nay",
    image: "/tu-ban.jpg",
    characteristics: [
      "Tư sản sở hữu tư liệu sản xuất",
      "Công nhân bán sức lao động",
      "Bóc lột giá trị thặng dư",
      "Nhà nước tư sản, dân chủ hình thức",
    ],
    conclusion: "Phát triển LLSX mạnh mẽ nhất trong lịch sử",
  },
  {
    id: 5,
    title: "Cộng sản chủ nghĩa",
    icon: "⭐",
    period: "Tương lai",
    image: "/cong-san.jpg",
    characteristics: [
      "Sở hữu công cộng về TLSX",
      "Xóa bỏ giai cấp và bóc lột",
      "Phân phối theo nhu cầu",
      "Nhà nước tiêu vong dần",
    ],
    conclusion: "Hình thái cao nhất của xã hội loài người",
  },
];

const components = [
  {
    title: "Lực lượng sản xuất",
    icon: "⚙️",
    description: "Mối quan hệ giữa con người với tự nhiên trong quá trình sản xuất",
    elements: [
      "Người lao động (thể lực, trí lực, kỹ năng)",
      "Tư liệu sản xuất (công cụ, đối tượng lao động)",
      "Khoa học – công nghệ",
    ],
    role: "Yếu tố quyết định sự phát triển của HTKT-XH",
  },
  {
    title: "Quan hệ sản xuất",
    icon: "🤝",
    description: "Quan hệ giữa người với người trong quá trình sản xuất",
    elements: [
      "Quan hệ sở hữu về TLSX",
      "Quan hệ tổ chức quản lý",
      "Quan hệ phân phối sản phẩm",
    ],
    role: "Tạo thành cơ sở hạ tầng của xã hội",
  },
  {
    title: "Kiến trúc thượng tầng",
    icon: "🏛️",
    description: "Toàn bộ quan điểm và thiết chế xã hội tương ứng",
    elements: [
      "Nhà nước, pháp luật, đảng phái",
      "Triết học, đạo đức, tôn giáo",
      "Văn hóa, nghệ thuật, khoa học",
    ],
    role: "Bảo vệ và phục vụ cơ sở hạ tầng",
  },
];

export default function HinhThaiKTXH() {
  const [activeFormation, setActiveFormation] = useState<number | null>(null);

  return (
    <div className="lien-minh-page">
      {/* Hero Section */}
      <section className="lien-minh-hero">
        <div className="hero-background-image">
          <Image
            src="/hinh-thai-ktxh-bg.jpg"
            alt="Hình thái kinh tế - xã hội"
            fill
            style={{ objectFit: "cover", opacity: 0.3 }}
            priority
          />
        </div>
        <div className="container">
          <div className="lien-minh-hero-content fade-in">
            <h1 className="lien-minh-title">
              Hình thái kinh tế – xã hội
              <br />
              <span className="highlight-text">Học thuyết của C.Mác</span>
            </h1>
            <div className="lien-minh-subtitle">
              Khám phá quy luật vận động và phát triển của lịch sử xã hội loài
              người qua các hình thái kinh tế – xã hội
            </div>
            <div className="hero-stats">
              <div
                className="stat-item fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="stat-icon">⚙️</div>
                <div className="stat-label">Lực lượng SX</div>
              </div>
              <div
                className="stat-item fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="stat-icon">🤝</div>
                <div className="stat-label">Quan hệ SX</div>
              </div>
              <div
                className="stat-item fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="stat-icon">🏛️</div>
                <div className="stat-label">Kiến trúc TT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Khái niệm */}
          <div className="content-block fade-in-scroll">
            <div className="content-with-image" style={{ marginBottom: 40 }}>
              <div className="text-container" style={{ flex: 1 }}>
                <h2 className="section-title-large">
                  1. Khái niệm Hình thái kinh tế – xã hội
                </h2>
                <p
                  className="lead-text"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  <strong>Hình thái kinh tế – xã hội</strong> là một phạm trù cơ
                  bản của chủ nghĩa duy vật lịch sử, dùng để chỉ xã hội ở từng
                  giai đoạn lịch sử nhất định, với một kiểu quan hệ sản xuất đặc
                  trưng phù hợp với một trình độ nhất định của lực lượng sản
                  xuất và với một kiến trúc thượng tầng tương ứng được xây dựng
                  trên những quan hệ sản xuất ấy.
                </p>
                <div
                  className="card-conclusion"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    padding: "16px 20px",
                    borderRadius: 12,
                    marginTop: 16,
                  }}
                >
                  💡 Học thuyết hình thái KT-XH là hòn đá tảng của chủ nghĩa duy
                  vật lịch sử
                </div>
              </div>
              <div
                className="image-container"
                style={{ flex: 1, position: "relative" }}
              >
                <Image
                  src="/marx-theory.jpg"
                  alt="C.Mác và học thuyết hình thái kinh tế - xã hội"
                  width={500}
                  height={350}
                  style={{ borderRadius: 16, width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Cấu trúc */}
          <div className="content-block fade-in-scroll">
            <h2 className="section-title-large">
              2. Cấu trúc của Hình thái kinh tế – xã hội
            </h2>

            <div className="significance-grid">
              {components.map((component, index) => (
                <div
                  key={index}
                  className="significance-card card-animated"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="card-icon">{component.icon}</div>
                  <h3>{component.title}</h3>
                  <p className="muted">{component.description}</p>
                  <ul className="custom-list">
                    {component.elements.map((element, idx) => (
                      <li key={idx}>{element}</li>
                    ))}
                  </ul>
                  <div className="card-conclusion">➡️ {component.role}</div>
                </div>
              ))}
            </div>

            {/* Mối quan hệ biện chứng */}
            <div
              className="evaluation-box"
              style={{ marginTop: 40, background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
            >
              <h3 style={{ color: "#ffd700", marginBottom: 20 }}>
                🔄 Mối quan hệ biện chứng giữa các yếu tố
              </h3>
              <div className="evaluation-content">
                <div className="eval-item">
                  <div className="eval-number">01</div>
                  <p>
                    <strong>LLSX quyết định QHSX:</strong> Khi LLSX phát triển
                    đến một trình độ nhất định, QHSX cũ trở nên lỗi thời, đòi
                    hỏi QHSX mới phù hợp hơn.
                  </p>
                </div>
                <div className="eval-item">
                  <div className="eval-number">02</div>
                  <p>
                    <strong>CSHT quyết định KTTT:</strong> Cơ sở hạ tầng (tổng
                    hợp các QHSX) quyết định tính chất của kiến trúc thượng
                    tầng. Khi CSHT thay đổi, KTTT cũng thay đổi theo.
                  </p>
                </div>
                <div className="eval-item">
                  <div className="eval-number">03</div>
                  <p>
                    <strong>KTTT tác động ngược lại CSHT:</strong> Kiến trúc
                    thượng tầng có tính độc lập tương đối, có thể thúc đẩy hoặc
                    kìm hãm sự phát triển của cơ sở hạ tầng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Các hình thái trong lịch sử */}
          <div className="content-block fade-in-scroll">
            <h2 className="section-title-large">
              3. Các hình thái kinh tế – xã hội trong lịch sử
            </h2>
            <p
              className="lead-text"
              style={{ marginBottom: 30, textAlign: "center" }}
            >
              Theo C.Mác, lịch sử loài người đã và sẽ trải qua 5 hình thái
              KT-XH kế tiếp nhau
            </p>

            <div className="evidence-grid">
              {formations.map((formation, index) => (
                <div
                  key={formation.id}
                  className={`evidence-card ${
                    activeFormation === formation.id ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveFormation(
                      activeFormation === formation.id ? null : formation.id
                    )
                  }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="evidence-header">
                    <div className="evidence-icon">{formation.icon}</div>
                    <div>
                      <h3>{formation.title}</h3>
                      <p className="evidence-desc">{formation.period}</p>
                    </div>
                  </div>

                  <div
                    className={`evidence-details ${
                      activeFormation === formation.id ? "show" : ""
                    }`}
                  >
                    <ul className="custom-list">
                      {formation.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                    <div className="evidence-conclusion">
                      ➡️ {formation.conclusion}
                    </div>
                  </div>

                  <div className="evidence-expand">
                    {activeFormation === formation.id
                      ? "Thu gọn ▲"
                      : "Xem thêm ▼"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quy luật phát triển */}
          <div className="content-block fade-in-scroll">
            <h2 className="section-title-large">
              4. Quy luật phát triển của các hình thái KT-XH
            </h2>

            <div className="significance-grid" style={{ marginTop: 30 }}>
              <div className="significance-card card-animated">
                <div className="card-icon">📈</div>
                <h3>Tính khách quan</h3>
                <p className="muted">
                  Sự thay thế các hình thái KT-XH là quá trình lịch sử - tự
                  nhiên, không phụ thuộc vào ý muốn chủ quan của con người.
                </p>
                <ul className="custom-list">
                  <li>Do mâu thuẫn giữa LLSX và QHSX</li>
                  <li>Mâu thuẫn giữa CSHT và KTTT</li>
                  <li>Cách mạng xã hội là động lực thay đổi</li>
                </ul>
              </div>

              <div
                className="significance-card card-animated"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="card-icon">🌍</div>
                <h3>Tính thống nhất và đa dạng</h3>
                <p className="muted">
                  Các dân tộc đều tuân theo quy luật chung nhưng có thể có con
                  đường phát triển riêng.
                </p>
                <ul className="custom-list">
                  <li>Xu hướng chung: tiến lên CNXH</li>
                  <li>Có thể "bỏ qua" một số giai đoạn</li>
                  <li>Điều kiện cụ thể của mỗi nước</li>
                </ul>
              </div>

              <div
                className="significance-card card-animated"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="card-icon">🇻🇳</div>
                <h3>Việt Nam quá độ lên CNXH</h3>
                <p className="muted">
                  Việt Nam bỏ qua chế độ TBCN, quá độ lên CNXH từ nước nông
                  nghiệp lạc hậu.
                </p>
                <ul className="custom-list">
                  <li>Công nghiệp hóa, hiện đại hóa</li>
                  <li>Phát triển kinh tế thị trường XHCN</li>
                  <li>Xây dựng nền văn hóa tiên tiến</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ý nghĩa */}
          <div className="content-block fade-in-scroll">
            <div className="evaluation-box">
              <h2 className="section-title-large">
                5. Ý nghĩa của học thuyết Hình thái KT-XH
              </h2>
              <div className="evaluation-content">
                <div className="eval-item">
                  <div className="eval-number">01</div>
                  <p>
                    <strong>Ý nghĩa lý luận:</strong> Là cơ sở khoa học để nhận
                    thức đúng đắn quy luật vận động của xã hội, khắc phục quan
                    điểm duy tâm, siêu hình về lịch sử.
                  </p>
                </div>
                <div className="eval-item">
                  <div className="eval-number">02</div>
                  <p>
                    <strong>Ý nghĩa thực tiễn:</strong> Là kim chỉ nam để các
                    Đảng Cộng sản hoạch định đường lối cách mạng phù hợp với
                    điều kiện cụ thể của đất nước.
                  </p>
                </div>
                <div className="eval-item">
                  <div className="eval-number">03</div>
                  <p>
                    <strong>Bác bỏ quan điểm sai trái:</strong> Chứng minh CNTB
                    không phải là hình thái cuối cùng, CNXH là tất yếu lịch sử,
                    không ai có thể ngăn cản được.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kết luận */}
          <div className="content-block fade-in-scroll">
            <div className="conclusion-box">
              <div className="conclusion-icon">⭐</div>
              <h2>Kết luận</h2>
              <p className="conclusion-text">
                Học thuyết <strong>Hình thái kinh tế – xã hội</strong> của C.Mác
                đã cung cấp cho chúng ta phương pháp luận khoa học để nhận thức
                và cải tạo xã hội. Đây là{" "}
                <strong>hòn đá tảng của chủ nghĩa duy vật lịch sử</strong>, chỉ
                ra quy luật phát triển tất yếu của lịch sử loài người.
              </p>
              <div className="conclusion-highlight">
                Việt Nam kiên định con đường đi lên CNXH là phù hợp với quy luật
                phát triển của lịch sử
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <Link href="/lesson" className="btn btn-primary btn-lg">
              ← Quay lại bài học
            </Link>
            <Link href="/quiz" className="btn btn-secondary btn-lg">
              Làm bài quiz →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
