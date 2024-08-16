import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("@/components/Home.vue"),
  },
  {
    path: "/architect-studio",
    component: () => (window.location.href = "/index-architect-studio.html"),
  },
  {
    path: "/barber",
    component: () => (window.location.href = "/index-barber.html"),
  },
  {
    path: "/blog",
    component: () => (window.location.href = "/index-blog.html"),
  },
  {
    path: "/bookshop",
    component: () => (window.location.href = "/index-bookshop.html"),
  },
  {
    path: "/book-shop",
    component: () => (window.location.href = "/index-book-shop.html"),
  },
  {
    path: "/builder-construction",
    component: () =>
      (window.location.href = "/index-builder-construction.html"),
  },
  {
    path: "/cakes",
    component: () => (window.location.href = "/index-cakes.html"),
  },
  {
    path: "/cars-automobile",
    component: () => (window.location.href = "/index-cars-automobile.html"),
  },
  {
    path: "/celebrity",
    component: () => (window.location.href = "/index-celebrity.html"),
  },
  {
    path: "/charity",
    component: () => (window.location.href = "/index-charity.html"),
  },
  {
    path: "/classic-business",
    component: () => (window.location.href = "/index-classic-business.html"),
  },
  {
    path: "/clothing-brand",
    component: () => (window.location.href = "/index-clothing-brand.html"),
  },
  {
    path: "/coffee",
    component: () => (window.location.href = "/index-coffee.html"),
  },
  {
    path: "/construction",
    component: () => (window.location.href = "/index-construction.html"),
  },
  {
    path: "/consulting",
    component: () => (window.location.href = "/index-consulting.html"),
  },
  {
    path: "/consulting-startup",
    component: () => (window.location.href = "/index-consulting-startup.html"),
  },
  {
    path: "/corporate",
    component: () => (window.location.href = "/index-corporate.html"),
  },
  {
    path: "/corporate-agency",
    component: () => (window.location.href = "/index-corporate-agency.html"),
  },
  {
    path: "/corporate-executive",
    component: () => (window.location.href = "/index-corporate-executive.html"),
  },
  {
    path: "/corporate-finance",
    component: () => (window.location.href = "/index-corporate-finance.html"),
  },
  {
    path: "/creative-designer",
    component: () => (window.location.href = "/index-creative-designer.html"),
  },
  {
    path: "/creative-parallax",
    component: () => (window.location.href = "/index-creative-parallax.html"),
  },
  {
    path: "/creative-piling",
    component: () => (window.location.href = "/index-creative-piling.html"),
  },
  {
    path: "/creative-portfolio",
    component: () => (window.location.href = "/index-creative-portfolio.html"),
  },
  {
    path: "/creative-startup",
    component: () => (window.location.href = "/index-creative-startup.html"),
  },
  {
    path: "/creative-studio",
    component: () => (window.location.href = "/index-creative-studio.html"),
  },
  {
    path: "/cycling",
    component: () => (window.location.href = "/index-cycling.html"),
  },
  {
    path: "/dark-agency",
    component: () => (window.location.href = "/index-dark-agency.html"),
  },
  {
    path: "/dark-creative",
    component: () => (window.location.href = "/index-dark-creative.html"),
  },
  {
    path: "/dental",
    component: () => (window.location.href = "/index-dental.html"),
  },
  {
    path: "/design-agency",
    component: () => (window.location.href = "/index-design-agency.html"),
  },
  {
    path: "/digital-agency",
    component: () => (window.location.href = "/index-digital-agency.html"),
  },
  {
    path: "/digital-corporate",
    component: () => (window.location.href = "/index-digital-corporate.html"),
  },
  {
    path: "/digital-creative",
    component: () => (window.location.href = "/index-digital-creative.html"),
  },
  {
    path: "/digital-marketing",
    component: () => (window.location.href = "/index-digital-marketing.html"),
  },
  {
    path: "/digital-portfolio",
    component: () => (window.location.href = "/index-digital-portfolio.html"),
  },
  {
    path: "/digital-startup",
    component: () => (window.location.href = "/index-digital-startup.html"),
  },
  {
    path: "/digital-university",
    component: () => (window.location.href = "/index-digital-university.html"),
  },
  {
    path: "/directory-listing",
    component: () => (window.location.href = "/index-directory-listing.html"),
  },
  {
    path: "/education",
    component: () => (window.location.href = "/index-education.html"),
  },
  {
    path: "/elements",
    component: () => (window.location.href = "/index-elements.html"),
  },
  {
    path: "/elements-portfolio",
    component: () => (window.location.href = "/index-elements-portfolio.html"),
  },
  {
    path: "/event",
    component: () => (window.location.href = "/index-event.html"),
  },
  {
    path: "/eyewear",
    component: () => (window.location.href = "/index-eyewear.html"),
  },
  {
    path: "/fashion-blog",
    component: () => (window.location.href = "/index-fashion-blog.html"),
  },
  {
    path: "/film",
    component: () => (window.location.href = "/index-film.html"),
  },
  {
    path: "/fitness-trainer",
    component: () => (window.location.href = "/index-fitness-trainer.html"),
  },
  {
    path: "/food",
    component: () => (window.location.href = "/index-food.html"),
  },
  {
    path: "/food-blog",
    component: () => (window.location.href = "/index-food-blog.html"),
  },
  {
    path: "/food-delivery",
    component: () => (window.location.href = "/index-food-delivery.html"),
  },
  {
    path: "/food-shop",
    component: () => (window.location.href = "/index-food-shop.html"),
  },
  {
    path: "/football",
    component: () => (window.location.href = "/index-football.html"),
  },
  {
    path: "/furniture",
    component: () => (window.location.href = "/index-furniture.html"),
  },
  {
    path: "/gardening",
    component: () => (window.location.href = "/index-gardening.html"),
  },
  {
    path: "/golf-player",
    component: () => (window.location.href = "/index-golf-player.html"),
  },
  {
    path: "/gradient-agency",
    component: () => (window.location.href = "/index-gradient-agency.html"),
  },
  {
    path: "/grid",
    component: () => (window.location.href = "/index-grid.html"),
  },
  { path: "/gym", component: () => (window.location.href = "/index-gym.html") },
  {
    path: "/handbags",
    component: () => (window.location.href = "/index-handbags.html"),
  },
  {
    path: "/innovative",
    component: () => (window.location.href = "/index-innovative.html"),
  },
  {
    path: "/innovative1",
    component: () => (window.location.href = "/index-innovative1.html"),
  },
  {
    path: "/innovative-startup",
    component: () => (window.location.href = "/index-innovative-startup.html"),
  },
  {
    path: "/insurance",
    component: () => (window.location.href = "/index-insurance.html"),
  },
  {
    path: "/jewelry",
    component: () => (window.location.href = "/index-jewelry.html"),
  },
  {
    path: "/kids",
    component: () => (window.location.href = "/index-kids.html"),
  },
  {
    path: "/kitchen-interior",
    component: () => (window.location.href = "/index-kitchen-interior.html"),
  },
  {
    path: "/landing",
    component: () => (window.location.href = "/index-landing.html"),
  },
  {
    path: "/landing-page",
    component: () => (window.location.href = "/index-landing-page.html"),
  },
  { path: "/law", component: () => (window.location.href = "/index-law.html") },
  {
    path: "/logistic",
    component: () => (window.location.href = "/index-logistic.html"),
  },
  { path: "/map", component: () => (window.location.href = "/index-map.html") },
  {
    path: "/marketing-agency",
    component: () => (window.location.href = "/index-marketing-agency.html"),
  },
  {
    path: "/medical",
    component: () => (window.location.href = "/index-medical.html"),
  },
  {
    path: "/minimal",
    component: () => (window.location.href = "/index-minimal.html"),
  },
  {
    path: "/minimal-creative",
    component: () => (window.location.href = "/index-minimal-creative.html"),
  },
  {
    path: "/minimal-startup",
    component: () => (window.location.href = "/index-minimal-startup.html"),
  },
  {
    path: "/model-agency",
    component: () => (window.location.href = "/index-model-agency.html"),
  },
  {
    path: "/new-agency",
    component: () => (window.location.href = "/index-new-agency.html"),
  },
  {
    path: "/parallax",
    component: () => (window.location.href = "/index-parallax.html"),
  },
  {
    path: "/personal",
    component: () => (window.location.href = "/index-personal.html"),
  },
  {
    path: "/personal-hotspot",
    component: () => (window.location.href = "/index-personal-hotspot.html"),
  },
  {
    path: "/personal-portfolio",
    component: () => (window.location.href = "/index-personal-portfolio.html"),
  },
  {
    path: "/personal-profile",
    component: () => (window.location.href = "/index-personal-profile.html"),
  },
  {
    path: "/pets",
    component: () => (window.location.href = "/index-pets.html"),
  },
  {
    path: "/photographer",
    component: () => (window.location.href = "/index-photographer.html"),
  },
  {
    path: "/portfolio",
    component: () => (window.location.href = "/index-portfolio.html"),
  },
  {
    path: "/portfolio-agency",
    component: () => (window.location.href = "/index-portfolio-agency.html"),
  },
  {
    path: "/portfolio-column",
    component: () => (window.location.href = "/index-portfolio-column.html"),
  },
  {
    path: "/product",
    component: () => (window.location.href = "/index-product.html"),
  },
  {
    path: "/product-dark",
    component: () => (window.location.href = "/index-product-dark.html"),
  },
  {
    path: "/product-hotspot",
    component: () => (window.location.href = "/index-product-hotspot.html"),
  },
  {
    path: "/realestate",
    component: () => (window.location.href = "/index-realestate.html"),
  },
  {
    path: "/restaurant",
    component: () => (window.location.href = "/index-restaurant.html"),
  },
  {
    path: "/resume",
    component: () => (window.location.href = "/index-resume.html"),
  },
  {
    path: "/seo-agency",
    component: () => (window.location.href = "/index-seo-agency.html"),
  },
  {
    path: "/shop",
    component: () => (window.location.href = "/index-shop.html"),
  },
  {
    path: "/showcase",
    component: () => (window.location.href = "/index-showcase.html"),
  },
  {
    path: "/showcase-dark",
    component: () => (window.location.href = "/index-showcase-dark.html"),
  },
  {
    path: "/skincare",
    component: () => (window.location.href = "/index-skincare.html"),
  },
  {
    path: "/skin-doctor",
    component: () => (window.location.href = "/index-skin-doctor.html"),
  },
  { path: "/spa", component: () => (window.location.href = "/index-spa.html") },
  {
    path: "/speaker",
    component: () => (window.location.href = "/index-speaker.html"),
  },
  {
    path: "/startup-portfolio",
    component: () => (window.location.href = "/index-startup-portfolio.html"),
  },
  {
    path: "/studio",
    component: () => (window.location.href = "/index-studio.html"),
  },
  {
    path: "/surfing",
    component: () => (window.location.href = "/index-surfing.html"),
  },
  {
    path: "/travelling",
    component: () => (window.location.href = "/index-travelling.html"),
  },
  {
    path: "/web-hosting",
    component: () => (window.location.href = "/index-web-hosting.html"),
  },
  {
    path: "/wedding",
    component: () => (window.location.href = "/index-wedding.html"),
  },
  {
    path: "/yoga",
    component: () => (window.location.href = "/index-yoga.html"),
  },
  {
    path: "/ad-agency",
    component: () => (window.location.href = "/index-ad-agency.html"),
  },
  {
    path: "/agency",
    component: () => (window.location.href = "/index-agency.html"),
  },
  {
    path: "/agency-hotspot",
    component: () => (window.location.href = "/index-agency-hotspot.html"),
  },
  {
    path: "/agency-studio",
    component: () => (window.location.href = "/index-agency-studio.html"),
  },
  {
    path: "/agency-video",
    component: () => (window.location.href = "/index-agency-video.html"),
  },
  // Add more routes as needed
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
