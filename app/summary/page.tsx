import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function SummaryPage() {
  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Tóm tắt" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Tổng kết</h1>
          <p className="section-subtitle">
            Tóm tắt 1 trang, sơ đồ tổng hợp, link luyện 20 câu sát đề.
          </p>
        </div>
        <Link href="/quiz" className="btn btn-primary btn-sm">
          Luyện 20 câu
        </Link>
      </div>

      <div className="summary-card">
        <h3>Tóm tắt nhanh</h3>
        <p className="muted" style={{ marginTop: 8 }}>
          Hình thái kinh tế – xã hội là chỉnh thể xã hội cụ thể trong lịch sử, gồm
          3 bộ phận: cơ sở hạ tầng (lực lượng sản xuất + quan hệ sản xuất) và kiến trúc
          thượng tầng (chính trị, pháp luật, tư tưởng). Lực lượng sản xuất quyết định
          quan hệ sản xuất; cơ sở hạ tầng quyết định kiến trúc thượng tầng. Có 5 hình thái
          chủ yếu: công xã nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa,
          cộng sản chủ nghĩa (qua thời kỳ quá độ XHCN). Mỗi hình thái có quy luật vận động
          riêng, kế thừa từ hình thái cũ nhưng cao hơn về chất.
        </p>
      </div>

      <div className="grid grid-2" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Sơ đồ tổng hợp</h3>
          <p className="muted">
            Xem sơ đồ tư duy đầy đủ tại trang Sơ đồ. Nhánh: Khái niệm HTKTXH → Cấu trúc
            3 tầng → Quy luật vận động → 5 hình thái cụ thể → Đặc trưng từng hình thái →
            Quá độ lên CNCS → Bối cảnh Việt Nam.
          </p>
          <Link
            href="/mindmap"
            className="btn btn-secondary btn-sm"
            style={{ marginTop: 12 }}
          >
            Xem sơ đồ
          </Link>
        </div>
        <div className="card">
          <h3>Xuất PDF</h3>
          <p className="muted">
            Placeholder: nút tải PDF bài học (có thể tích hợp generate PDF sau).
          </p>
          <button className="btn btn-secondary btn-sm" disabled>
            Tải PDF (sắp có)
          </button>
        </div>
      </div>
    </div>
  );
}
