"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import lessons from "@/data/lessons.json";

const bannerImages = [
  "/hinh-anh-5375.webp",
  "/article.jfif",
  "/hinh-thai-kinh-te-xa-hoi-cong-san-chu-nghia_2804134813.jpg",
  "/Dac-diem-cua-xa-hoi-nguyen-thuy.webp",
];

export default function Home() {
  const featuredLessons = lessons;
  const overviewLesson = lessons.find((l) => l.id === "htktxh-overview");
  const overviewSection = overviewLesson?.sections[0];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // Chuyển ảnh mỗi 4 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-banner fade-in">
        <div className="hero-banner-carousel">
          {bannerImages.map((image, index) => (
            <div
              key={image}
              className={`hero-banner-slide ${
                index === currentImageIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-inner">
          <h1>HÌNH THÁI KINH TẾ – XÃ HỘI</h1>
          <p>
            Hình thái kinh tế – xã hội là một chỉnh thể xã hội cụ thể trong lịch
            sử, bao gồm Lực lượng sản xuất, Quan hệ sản xuất và Kiến trúc thượng
            tầng, vận động theo các quy luật khách quan.
          </p>
          <div className="hero-actions">
            <Link
              href="/lesson/hinh-thai-kinh-te-xa-hoi"
              className="btn btn-hero"
            >
              Bắt đầu học →
            </Link>
          </div>
        </div>
      </section>

      {overviewSection && (
        <section className="section fade-in fade-in-delay">
          <div className="container">
            <div className="highlight-card">
              <h2 className="section-title" style={{ fontSize: "28px" }}>
                {overviewSection.heading}
              </h2>
              <div style={{ whiteSpace: "pre-line" }}>
                {overviewSection.body}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section fade-in fade-in-delay">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">📚 Lộ trình bài học</h2>
              <p className="section-subtitle">
                Các nội dung chính để nắm vững học thuyết Hình thái kinh tế – xã
                hội.
              </p>
            </div>
            <Link
              href="/lesson/hinh-thai-kinh-te-xa-hoi"
              className="btn btn-secondary btn-sm"
            >
              Vào bài học →
            </Link>
          </div>
          <div className="grid grid-2">
            {featuredLessons.map((lesson, idx) => (
              <Link
                href={`/lesson/${lesson.slug}`}
                key={lesson.id}
                className="card roadmap-card"
              >
                <div className="roadmap-card-header">
                  <div className="roadmap-number">{idx + 1}</div>
                  <div className="pill">Bài {idx + 1}</div>
                </div>
                <h3 className="roadmap-card-title">{lesson.title}</h3>
                <p className="muted roadmap-card-desc">
                  Trạng thái:{" "}
                  <span className="badge badge-muted">{lesson.status}</span>
                </p>
                <div className="roadmap-card-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
