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
    component: () =>
      (window.location.href = "/weblist/index-architect-studio.html"),
  },
  {
    path: "/barber",
    component: () => (window.location.href = "/weblist/index-barber.html"),
  },
  {
    path: "/blog",
    component: () => (window.location.href = "/weblist/index-blog.html"),
  },
  {
    path: "/bookshop",
    component: () => (window.location.href = "/weblist/index-bookshop.html"),
  },
  {
    path: "/book-shop",
    component: () => (window.location.href = "/weblist/index-book-shop.html"),
  },
  {
    path: "/builder-construction",
    component: () =>
      (window.location.href = "/weblist/index-builder-construction.html"),
  },
  {
    path: "/cakes",
    component: () => (window.location.href = "/weblist/index-cakes.html"),
  },
  {
    path: "/cars-automobile",
    component: () =>
      (window.location.href = "/weblist/index-cars-automobile.html"),
  },
  {
    path: "/celebrity",
    component: () => (window.location.href = "/weblist/index-celebrity.html"),
  },
  {
    path: "/charity",
    component: () => (window.location.href = "/weblist/index-charity.html"),
  },
  {
    path: "/classic-business",
    component: () =>
      (window.location.href = "/weblist/index-classic-business.html"),
  },
  {
    path: "/clothing-brand",
    component: () =>
      (window.location.href = "/weblist/index-clothing-brand.html"),
  },
  {
    path: "/coffee",
    component: () => (window.location.href = "/weblist/index-coffee.html"),
  },
  {
    path: "/construction",
    component: () =>
      (window.location.href = "/weblist/index-construction.html"),
  },
  {
    path: "/consulting",
    component: () => (window.location.href = "/weblist/index-consulting.html"),
  },
  {
    path: "/consulting-startup",
    component: () =>
      (window.location.href = "/weblist/index-consulting-startup.html"),
  },
  {
    path: "/corporate",
    component: () => (window.location.href = "/weblist/index-corporate.html"),
  },
  {
    path: "/corporate-agency",
    component: () =>
      (window.location.href = "/weblist/index-corporate-agency.html"),
  },
  {
    path: "/corporate-executive",
    component: () =>
      (window.location.href = "/weblist/index-corporate-executive.html"),
  },
  {
    path: "/corporate-finance",
    component: () =>
      (window.location.href = "/weblist/index-corporate-finance.html"),
  },
  {
    path: "/creative-designer",
    component: () =>
      (window.location.href = "/weblist/index-creative-designer.html"),
  },
  {
    path: "/creative-parallax",
    component: () =>
      (window.location.href = "/weblist/index-creative-parallax.html"),
  },
  {
    path: "/creative-piling",
    component: () =>
      (window.location.href = "/weblist/index-creative-piling.html"),
  },
  {
    path: "/creative-portfolio",
    component: () =>
      (window.location.href = "/weblist/index-creative-portfolio.html"),
  },
  {
    path: "/creative-startup",
    component: () =>
      (window.location.href = "/weblist/index-creative-startup.html"),
  },
  {
    path: "/creative-studio",
    component: () =>
      (window.location.href = "/weblist/index-creative-studio.html"),
  },
  {
    path: "/cycling",
    component: () => (window.location.href = "/weblist/index-cycling.html"),
  },
  {
    path: "/dark-agency",
    component: () => (window.location.href = "/weblist/index-dark-agency.html"),
  },
  {
    path: "/dark-creative",
    component: () =>
      (window.location.href = "/weblist/index-dark-creative.html"),
  },
  {
    path: "/dental",
    component: () => (window.location.href = "/weblist/index-dental.html"),
  },
  {
    path: "/design-agency",
    component: () =>
      (window.location.href = "/weblist/index-design-agency.html"),
  },
  {
    path: "/digital-agency",
    component: () =>
      (window.location.href = "/weblist/index-digital-agency.html"),
  },
  {
    path: "/digital-corporate",
    component: () =>
      (window.location.href = "/weblist/index-digital-corporate.html"),
  },
  {
    path: "/digital-creative",
    component: () =>
      (window.location.href = "/weblist/index-digital-creative.html"),
  },
  {
    path: "/digital-marketing",
    component: () =>
      (window.location.href = "/weblist/index-digital-marketing.html"),
  },
  {
    path: "/digital-portfolio",
    component: () =>
      (window.location.href = "/weblist/index-digital-portfolio.html"),
  },
  {
    path: "/digital-startup",
    component: () =>
      (window.location.href = "/weblist/index-digital-startup.html"),
  },
  {
    path: "/digital-university",
    component: () =>
      (window.location.href = "/weblist/index-digital-university.html"),
  },
  {
    path: "/directory-listing",
    component: () =>
      (window.location.href = "/weblist/index-directory-listing.html"),
  },
  {
    path: "/education",
    component: () => (window.location.href = "/weblist/index-education.html"),
  },
  {
    path: "/elements",
    component: () => (window.location.href = "/weblist/index-elements.html"),
  },
  {
    path: "/elements-portfolio",
    component: () =>
      (window.location.href = "/weblist/index-elements-portfolio.html"),
  },
  {
    path: "/event",
    component: () => (window.location.href = "/weblist/index-event.html"),
  },
  {
    path: "/eyewear",
    component: () => (window.location.href = "/weblist/index-eyewear.html"),
  },
  {
    path: "/fashion-blog",
    component: () =>
      (window.location.href = "/weblist/index-fashion-blog.html"),
  },
  {
    path: "/film",
    component: () => (window.location.href = "/weblist/index-film.html"),
  },
  {
    path: "/fitness-trainer",
    component: () =>
      (window.location.href = "/weblist/index-fitness-trainer.html"),
  },
  {
    path: "/food",
    component: () => (window.location.href = "/weblist/index-food.html"),
  },
  {
    path: "/food-blog",
    component: () => (window.location.href = "/weblist/index-food-blog.html"),
  },
  {
    path: "/food-delivery",
    component: () =>
      (window.location.href = "/weblist/index-food-delivery.html"),
  },
  {
    path: "/food-shop",
    component: () => (window.location.href = "/weblist/index-food-shop.html"),
  },
  {
    path: "/football",
    component: () => (window.location.href = "/weblist/index-football.html"),
  },
  {
    path: "/furniture",
    component: () => (window.location.href = "/weblist/index-furniture.html"),
  },
  {
    path: "/gardening",
    component: () => (window.location.href = "/weblist/index-gardening.html"),
  },
  {
    path: "/golf-player",
    component: () => (window.location.href = "/weblist/index-golf-player.html"),
  },
  {
    path: "/gradient-agency",
    component: () =>
      (window.location.href = "/weblist/index-gradient-agency.html"),
  },
  {
    path: "/grid",
    component: () => (window.location.href = "/weblist/index-grid.html"),
  },
  {
    path: "/gym",
    component: () => (window.location.href = "/weblist/index-gym.html"),
  },
  {
    path: "/handbags",
    component: () => (window.location.href = "/weblist/index-handbags.html"),
  },
  {
    path: "/innovative",
    component: () => (window.location.href = "/weblist/index-innovative.html"),
  },
  {
    path: "/innovative1",
    component: () => (window.location.href = "/weblist/index-innovative1.html"),
  },
  {
    path: "/innovative-startup",
    component: () =>
      (window.location.href = "/weblist/index-innovative-startup.html"),
  },
  {
    path: "/insurance",
    component: () => (window.location.href = "/weblist/index-insurance.html"),
  },
  {
    path: "/jewelry",
    component: () => (window.location.href = "/weblist/index-jewelry.html"),
  },
  {
    path: "/kids",
    component: () => (window.location.href = "/weblist/index-kids.html"),
  },
  {
    path: "/kitchen-interior",
    component: () =>
      (window.location.href = "/weblist/index-kitchen-interior.html"),
  },
  {
    path: "/landing",
    component: () => (window.location.href = "/weblist/index-landing.html"),
  },
  {
    path: "/landing-page",
    component: () =>
      (window.location.href = "/weblist/index-landing-page.html"),
  },
  {
    path: "/law",
    component: () => (window.location.href = "/weblist/index-law.html"),
  },
  {
    path: "/logistic",
    component: () => (window.location.href = "/weblist/index-logistic.html"),
  },
  {
    path: "/map",
    component: () => (window.location.href = "/weblist/index-map.html"),
  },
  {
    path: "/marketing-agency",
    component: () =>
      (window.location.href = "/weblist/index-marketing-agency.html"),
  },
  {
    path: "/medical",
    component: () => (window.location.href = "/weblist/index-medical.html"),
  },
  {
    path: "/minimal",
    component: () => (window.location.href = "/weblist/index-minimal.html"),
  },
  {
    path: "/minimal-creative",
    component: () =>
      (window.location.href = "/weblist/index-minimal-creative.html"),
  },
  {
    path: "/minimal-startup",
    component: () =>
      (window.location.href = "/weblist/index-minimal-startup.html"),
  },
  {
    path: "/model-agency",
    component: () =>
      (window.location.href = "/weblist/index-model-agency.html"),
  },
  {
    path: "/new-agency",
    component: () => (window.location.href = "/weblist/index-new-agency.html"),
  },
  {
    path: "/parallax",
    component: () => (window.location.href = "/weblist/index-parallax.html"),
  },
  {
    path: "/personal",
    component: () => (window.location.href = "/weblist/index-personal.html"),
  },
  {
    path: "/personal-hotspot",
    component: () =>
      (window.location.href = "/weblist/index-personal-hotspot.html"),
  },
  {
    path: "/personal-portfolio",
    component: () =>
      (window.location.href = "/weblist/index-personal-portfolio.html"),
  },
  {
    path: "/personal-profile",
    component: () =>
      (window.location.href = "/weblist/index-personal-profile.html"),
  },
  {
    path: "/pets",
    component: () => (window.location.href = "/weblist/index-pets.html"),
  },
  {
    path: "/photographer",
    component: () =>
      (window.location.href = "/weblist/index-photographer.html"),
  },
  {
    path: "/portfolio",
    component: () => (window.location.href = "/weblist/index-portfolio.html"),
  },
  {
    path: "/portfolio-agency",
    component: () =>
      (window.location.href = "/weblist/index-portfolio-agency.html"),
  },
  {
    path: "/portfolio-column",
    component: () =>
      (window.location.href = "/weblist/index-portfolio-column.html"),
  },
  {
    path: "/product",
    component: () => (window.location.href = "/weblist/index-product.html"),
  },
  {
    path: "/product-dark",
    component: () =>
      (window.location.href = "/weblist/index-product-dark.html"),
  },
  {
    path: "/product-hotspot",
    component: () =>
      (window.location.href = "/weblist/index-product-hotspot.html"),
  },
  {
    path: "/realestate",
    component: () => (window.location.href = "/weblist/index-realestate.html"),
  },
  {
    path: "/restaurant",
    component: () => (window.location.href = "/weblist/index-restaurant.html"),
  },
  {
    path: "/resume",
    component: () => (window.location.href = "/weblist/index-resume.html"),
  },
  {
    path: "/seo-agency",
    component: () => (window.location.href = "/weblist/index-seo-agency.html"),
  },
  {
    path: "/shop",
    component: () => (window.location.href = "/weblist/index-shop.html"),
  },
  {
    path: "/showcase",
    component: () => (window.location.href = "/weblist/index-showcase.html"),
  },
  {
    path: "/showcase-dark",
    component: () =>
      (window.location.href = "/weblist/index-showcase-dark.html"),
  },
  {
    path: "/skincare",
    component: () => (window.location.href = "/weblist/index-skincare.html"),
  },
  {
    path: "/skin-doctor",
    component: () => (window.location.href = "/weblist/index-skin-doctor.html"),
  },
  {
    path: "/spa",
    component: () => (window.location.href = "/weblist/index-spa.html"),
  },
  {
    path: "/speaker",
    component: () => (window.location.href = "/weblist/index-speaker.html"),
  },
  {
    path: "/startup-portfolio",
    component: () =>
      (window.location.href = "/weblist/index-startup-portfolio.html"),
  },
  {
    path: "/studio",
    component: () => (window.location.href = "/weblist/index-studio.html"),
  },
  {
    path: "/surfing",
    component: () => (window.location.href = "/weblist/index-surfing.html"),
  },
  {
    path: "/travelling",
    component: () => (window.location.href = "/weblist/index-travelling.html"),
  },
  {
    path: "/web-hosting",
    component: () => (window.location.href = "/weblist/index-web-hosting.html"),
  },
  {
    path: "/wedding",
    component: () => (window.location.href = "/weblist/index-wedding.html"),
  },
  {
    path: "/yoga",
    component: () => (window.location.href = "/weblist/index-yoga.html"),
  },
  {
    path: "/ad-agency",
    component: () => (window.location.href = "/weblist/index-ad-agency.html"),
  },
  {
    path: "/agency",
    component: () => (window.location.href = "/weblist/index-agency.html"),
  },
  {
    path: "/agency-hotspot",
    component: () =>
      (window.location.href = "/weblist/index-agency-hotspot.html"),
  },
  {
    path: "/agency-studio",
    component: () =>
      (window.location.href = "/weblist/index-agency-studio.html"),
  },
  {
    path: "/agency-video",
    component: () =>
      (window.location.href = "/weblist/index-agency-video.html"),
  },
  // Add more routes as needed
];

const router = new Router({
  mode: "hash",
  routes,
});

export default router;
