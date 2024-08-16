<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1>Danh sách trang mẫu</h1>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            item-key="name"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-btn :to="item.route" text>
                <v-icon>mdi-arrow-right</v-icon>
                {{ item.name }}
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      headers: [
        { text: "Tên ", value: "name", align: "start" },
        { text: "Đến trang", value: "action", sortable: false },
      ],
      items: [
        { name: "Studio Kiến Trúc", route: "/architect-studio" },
        { name: "Cắt Tóc Nam", route: "/barber" },
        { name: "Blog", route: "/blog" },
        { name: "Hiệu Sách", route: "/bookshop" },
        { name: "Cửa Hàng Sách", route: "/book-shop" },
        { name: "Xây Dựng", route: "/builder-construction" },
        { name: "Bánh Ngọt", route: "/cakes" },
        { name: "Ô Tô", route: "/cars-automobile" },
        { name: "Người Nổi Tiếng", route: "/celebrity" },
        { name: "Từ Thiện", route: "/charity" },
        { name: "Kinh Doanh Cổ Điển", route: "/classic-business" },
        { name: "Thương Hiệu Thời Trang", route: "/clothing-brand" },
        { name: "Cà Phê", route: "/coffee" },
        { name: "Xây Dựng", route: "/construction" },
        { name: "Tư Vấn", route: "/consulting" },
        { name: "Tư Vấn Khởi Nghiệp", route: "/consulting-startup" },
        { name: "Doanh Nghiệp", route: "/corporate" },
        { name: "Cơ Quan Doanh Nghiệp", route: "/corporate-agency" },
        { name: "Giám Đốc Doanh Nghiệp", route: "/corporate-executive" },
        { name: "Tài Chính Doanh Nghiệp", route: "/corporate-finance" },
        { name: "Nhà Thiết Kế Sáng Tạo", route: "/creative-designer" },
        { name: "Parallax Sáng Tạo", route: "/creative-parallax" },
        { name: "Piling Sáng Tạo", route: "/creative-piling" },
        { name: "Danh Mục Sáng Tạo", route: "/creative-portfolio" },
        { name: "Khởi Nghiệp Sáng Tạo", route: "/creative-startup" },
        { name: "Studio Sáng Tạo", route: "/creative-studio" },
        { name: "Đạp Xe", route: "/cycling" },
        { name: "Cơ Quan Tối", route: "/dark-agency" },
        { name: "Sáng Tạo Tối", route: "/dark-creative" },
        { name: "Nha Khoa", route: "/dental" },
        { name: "Cơ Quan Thiết Kế", route: "/design-agency" },
        { name: "Cơ Quan Kỹ Thuật Số", route: "/digital-agency" },
        { name: "Doanh Nghiệp Kỹ Thuật Số", route: "/digital-corporate" },
        { name: "Sáng Tạo Kỹ Thuật Số", route: "/digital-creative" },
        { name: "Tiếp Thị Kỹ Thuật Số", route: "/digital-marketing" },
        { name: "Danh Mục Kỹ Thuật Số", route: "/digital-portfolio" },
        { name: "Khởi Nghiệp Kỹ Thuật Số", route: "/digital-startup" },
        { name: "Đại Học Kỹ Thuật Số", route: "/digital-university" },
        { name: "Danh Bạ", route: "/directory-listing" },
        { name: "Giáo Dục", route: "/education" },
        { name: "Các Yếu Tố", route: "/elements" },
        { name: "Danh Mục Các Yếu Tố", route: "/elements-portfolio" },
        { name: "Sự Kiện", route: "/event" },
        { name: "Kính Mắt", route: "/eyewear" },
        { name: "Blog Thời Trang", route: "/fashion-blog" },
        { name: "Phim", route: "/film" },
        { name: "Huấn Luyện Viên Thể Hình", route: "/fitness-trainer" },
        { name: "Thực Phẩm", route: "/food" },
        { name: "Blog Ẩm Thực", route: "/food-blog" },
        { name: "Giao Hàng Thực Phẩm", route: "/food-delivery" },
        { name: "Cửa Hàng Thực Phẩm", route: "/food-shop" },
        { name: "Bóng Đá", route: "/football" },
        { name: "Nội Thất", route: "/furniture" },
        { name: "Làm Vườn", route: "/gardening" },
        { name: "Người Chơi Golf", route: "/golf-player" },
        { name: "Cơ Quan Màu Nền", route: "/gradient-agency" },
        { name: "Lưới", route: "/grid" },
        { name: "Phòng Tập Gym", route: "/gym" },
        { name: "Túi Xách", route: "/handbags" },
        { name: "Đổi Mới", route: "/innovative" },
        { name: "Đổi Mới 1", route: "/innovative1" },
        { name: "Khởi Nghiệp Đổi Mới", route: "/innovative-startup" },
        { name: "Bảo Hiểm", route: "/insurance" },
        { name: "Trang Sức", route: "/jewelry" },
        { name: "Trẻ Em", route: "/kids" },
        { name: "Nội Thất Bếp", route: "/kitchen-interior" },
        { name: "Trang Đích", route: "/landing" },
        { name: "Trang Đích", route: "/landing-page" },
        { name: "Luật", route: "/law" },
        { name: "Hậu Cần", route: "/logistic" },
        { name: "Bản Đồ", route: "/map" },
        { name: "Cơ Quan Tiếp Thị", route: "/marketing-agency" },
        { name: "Y Tế", route: "/medical" },
        { name: "Tối Giản", route: "/minimal" },
        { name: "Sáng Tạo Tối Giản", route: "/minimal-creative" },
        { name: "Khởi Nghiệp Tối Giản", route: "/minimal-startup" },
        { name: "Cơ Quan Người Mẫu", route: "/model-agency" },
        { name: "Cơ Quan Mới", route: "/new-agency" },
        { name: "Parallax", route: "/parallax" },
        { name: "Cá Nhân", route: "/personal" },
        { name: "Vùng Hotspot Cá Nhân", route: "/personal-hotspot" },
        { name: "Danh Mục Cá Nhân", route: "/personal-portfolio" },
        { name: "Hồ Sơ Cá Nhân", route: "/personal-profile" },
        { name: "Thú Cưng", route: "/pets" },
        { name: "Nhiếp Ảnh Gia", route: "/photographer" },
        { name: "Danh Mục", route: "/portfolio" },
        { name: "Cơ Quan Danh Mục", route: "/portfolio-agency" },
        { name: "Cột Danh Mục", route: "/portfolio-column" },
        { name: "Sản Phẩm", route: "/product" },
        { name: "Sản Phẩm Tối", route: "/product-dark" },
        { name: "Vùng Hotspot Sản Phẩm", route: "/product-hotspot" },
        { name: "Bất Động Sản", route: "/realestate" },
        { name: "Nhà Hàng", route: "/restaurant" },
        { name: "Sơ Yếu Lý Lịch", route: "/resume" },
        { name: "Cơ Quan SEO", route: "/seo-agency" },
        { name: "Cửa Hàng", route: "/shop" },
        { name: "Trưng Bày", route: "/showcase" },
        { name: "Trưng Bày Tối", route: "/showcase-dark" },
        { name: "Chăm Sóc Da", route: "/skincare" },
        { name: "Bác Sĩ Da Liễu", route: "/skin-doctor" },
        { name: "Spa", route: "/spa" },
        { name: "Diễn Giả", route: "/speaker" },
        { name: "Danh Mục Khởi Nghiệp", route: "/startup-portfolio" },
        { name: "Studio", route: "/studio" },
        { name: "Lướt Sóng", route: "/surfing" },
        { name: "Du Lịch", route: "/travelling" },
        { name: "Lưu Trữ Web", route: "/web-hosting" },
        { name: "Cưới Hỏi", route: "/wedding" },
        { name: "Yoga", route: "/yoga" },
        { name: "Cơ Quan Quảng Cáo", route: "/ad-agency" },
        { name: "Cơ Quan", route: "/agency" },
        { name: "Vùng Hotspot Cơ Quan", route: "/agency-hotspot" },
        { name: "Studio Cơ Quan", route: "/agency-studio" },
        { name: "Video Cơ Quan", route: "/agency-video" },
      ],
    };
  },
};
</script>

<style scoped>
.v-data-table {
  overflow-x: auto;
}
</style>
