import Breadcrumb from "@/app/components/Breadcrumb";

export default function AboutPage() {
  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Giới thiệu" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Giới thiệu</h1>
          <p className="section-subtitle">
            Mục tiêu trang web, nguồn tài liệu và phương pháp học.
          </p>
        </div>
      </div>
      <div className="card">
        <h3>Mục tiêu</h3>
        <p className="muted">
          Xây dựng nền tảng học Triết học Mác – Lênin về Hình thái kinh tế – xã
          hội hiện đại, dễ học, dễ nhớ, phù hợp desktop và mobile. Giúp người
          học nắm vững khái niệm, cấu trúc và quy luật vận động của các hình
          thái kinh tế – xã hội trong lịch sử loài người.
        </p>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Nguồn tài liệu</h3>
        <p className="muted">
          Dựa trên giáo trình Triết học Mác – Lênin, lý luận của C.Mác và
          Ph.Ăngghen về vật chất lịch sử, tổng hợp các nội dung: định nghĩa hình
          thái kinh tế – xã hội, cơ sở hạ tầng (lực lượng sản xuất và quan hệ
          sản xuất), kiến trúc thượng tầng, quy luật vận động và kế thừa, 5 hình
          thái chủ yếu trong lịch sử.
        </p>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Phương pháp học</h3>
        <ul style={{ marginTop: 8, paddingLeft: 18 }}>
          <li>
            Đọc bài → làm quiz → ôn flashcard → xem sơ đồ tư duy → tổng kết.
          </li>
          <li>
            Highlight nội dung quan trọng: định nghĩa, cấu trúc 3 tầng, quy luật
            vận động.
          </li>
          <li>
            Gamification: quiz, flashcard lật, sơ đồ tương tác các hình thái.
          </li>
          <li>Kết hợp hình ảnh minh họa từng hình thái cụ thể qua lịch sử.</li>
        </ul>
      </div>
    </div>
  );
}
