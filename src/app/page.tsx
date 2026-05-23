"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Fish, Star, Sun, Users, Utensils, Waves, Wine, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Reservation",          id: "contact"},
      ]}
      brandName="Shoreside Terrace Cafe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars"}}
      title="SHORESIDE TERRACE CAFE"
      description="Mediterranean-inspired dining overlooking the ocean."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-expressive-young-man_273609-6855.jpg",          alt: "Diner"},
        {
          src: "http://img.b2bpic.net/free-photo/unpleased-young-brunette-caucasian-girl-stands-with-crossed-arms_141793-104161.jpg",          alt: "Diner"},
        {
          src: "http://img.b2bpic.net/free-photo/pleased-young-brunette-caucasian-girl-puts-hand-chin-looks-camera_141793-103509.jpg",          alt: "Diner"},
        {
          src: "http://img.b2bpic.net/free-photo/smling-young-girl-is-looking-camera-white-background_176474-117447.jpg",          alt: "Smiling young girl"},
        {
          src: "http://img.b2bpic.net/free-photo/puzzled-beautiful-young-african-american-woman-fashionable-pink-jacket-reacts-something-with-dissatisfied-expression_273609-45751.jpg",          alt: "Satisfied customer"},
      ]}
      avatarText="⭐ 4.7 Rated Dining Experience"
      buttons={[
        {
          text: "Reserve a Table",          href: "#contact"},
        {
          text: "View Menu",          href: "#menu"},
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",          text: "Fresh Catch Daily",          icon: Fish,
        },
        {
          type: "text-icon",          text: "Oceanfront Terrace",          icon: Waves,
        },
        {
          type: "text-icon",          text: "Award Winning Cuisine",          icon: Award,
        },
        {
          type: "text-icon",          text: "Sunset Dining",          icon: Sun,
        },
        {
          type: "text-icon",          text: "Cocktail Bar",          icon: Wine,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="An Escape By The Sea"
      metrics={[
        {
          icon: Waves,
          label: "Ocean View",          value: "180°"},
        {
          icon: Utensils,
          label: "Culinary Style",          value: "Med"},
        {
          icon: Sun,
          label: "Sunset Terrace",          value: "Daily"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          title: "Relaxed Lunch",          description: "Soak in the sun with a breezy Mediterranean lunch.",          buttonIcon: Sun,
          imageSrc: "http://img.b2bpic.net/free-photo/chair-with-wooden-table-sunrise_1203-2110.jpg"},
        {
          title: "Romantic Dinners",          description: "Candlelight, wine, and the rhythmic sound of waves.",          buttonIcon: Heart,
          imageSrc: "http://img.b2bpic.net/free-photo/beach-restaurant-evening_661209-253.jpg"},
        {
          title: "Sunset Gathering",          description: "The perfect backdrop for drinks with friends.",          buttonIcon: Wine,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-celebrating-with-music_23-2149182693.jpg"},
        {
          title: "Exclusive Terrace",          description: "Private seating options for your special occasion.",          buttonIcon: Award,
          imageSrc: "http://img.b2bpic.net/free-photo/flowering-plant-with-blurred-port-background_1156-81.jpg"},
      ]}
      title="The Experience"
      description="Whether it’s a relaxed lunch, romantic dinner, or sunset gathering, Shoreside Terrace Cafe offers unforgettable dining."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Kingklip",          price: "R245",          imageSrc: "http://img.b2bpic.net/free-photo/plate-tasty-salmon-steak-with-sauce-puree-modern-food-restaurant_8353-7022.jpg"},
        {
          id: "p2",          name: "Beef Prego Roll",          price: "R165",          imageSrc: "http://img.b2bpic.net/free-photo/juicy-beef-wellington-tenderloin-dish-rustic-wooden-table-english-food-ai-generative_123827-24944.jpg"},
        {
          id: "p3",          name: "Seafood Platter",          price: "R495",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-assortment-seafood-with-mussels-squid_23-2148643584.jpg"},
        {
          id: "p4",          name: "Portuguese Chicken",          price: "R195",          imageSrc: "http://img.b2bpic.net/free-photo/festive-holiday-dinner-with-roasted-ham-food-photography_53876-103588.jpg"},
        {
          id: "p5",          name: "Mediterranean Salad",          price: "R120",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-vegetable-salad-with-sliced-cucumbers-tomatoes-olive-white-cheese-inside-plate-with-tomatoes-dark-blue-surface-vegetable-food-salad-meal-snack_140725-38003.jpg"},
        {
          id: "p6",          name: "Signature Cocktail",          price: "R95",          imageSrc: "http://img.b2bpic.net/free-photo/orange-cocktail-table-with-plants_140725-3868.jpg"},
      ]}
      title="Signature Dishes"
      description="Exquisite plates crafted with locally sourced Mediterranean ingredients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah",          handle: "@sarah_durban",          testimonial: "The atmosphere is comfy and chill with a lovely view.",          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-woman-hands-holds-two-burgers-blurred-background_169016-43765.jpg"},
        {
          id: "t2",          name: "Mark",          handle: "@mark_foodie",          testimonial: "The kingklip was divine. Truly fresh.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-holding-wine-glass_23-2149335065.jpg"},
        {
          id: "t3",          name: "Elena",          handle: "@elena_travels",          testimonial: "Tender and delicious steak. Beautiful setting.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-cup_23-2149005414.jpg"},
        {
          id: "t4",          name: "Jason",          handle: "@jason_coast",          testimonial: "Exceptional service and beautiful ocean views.",          imageSrc: "http://img.b2bpic.net/free-photo/pleased-female-entrepreneur-trendy-sunglasses-denim-jacke_197531-31011.jpg"},
        {
          id: "t5",          name: "Chloe",          handle: "@chloe_dining",          testimonial: "My favorite spot in Durban North. Pure luxury.",          imageSrc: "http://img.b2bpic.net/free-photo/merry-young-adult-enjoying-christmas-conversation-video-call-room-decorated-festivity-celebration-talking-woman-preparing-drink-wine-kitchen-with-joyful-ornaments_482257-28400.jpg"},
      ]}
      title="Customer Love"
      description="Hear what our guests have to say about their experience."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "4.7",          title: "Rating",          description: "Diners' choice",          icon: Star,
        },
        {
          id: "m2",          value: "150+",          title: "Seating",          description: "Terrace capacity",          icon: Users,
        },
        {
          id: "m3",          value: "20",          title: "Years",          description: "Culinary heritage",          icon: Award,
        },
      ]}
      title="Coastal Excellence"
      description="We pride ourselves on providing a world-class dining experience consistently."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Culinary Insights"
      description="Stories from our kitchen and coastal life."
      blogs={[
        {
          id: "b1",          category: "Food",          title: "The Art of Seafood",          excerpt: "How we source our fresh daily catches.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chef-cutting-head-fish-chopping-board-pepper-grinder-flour-bowl-pomegranate-seeds-bowl-kitchen-table_179666-46855.jpg",          authorName: "Chef",          authorAvatar: "http://img.b2bpic.net/free-photo/pretty-woman-with-space-buns-yellow-turtleneck_273609-6929.jpg",          date: "Oct 12"},
        {
          id: "b2",          category: "Lifestyle",          title: "Sunsets & Sangria",          excerpt: "Your guide to perfect terrace afternoons.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cocktail-with-straw_1203-1745.jpg",          authorName: "Manager",          authorAvatar: "http://img.b2bpic.net/free-photo/close-up-model-posing_23-2149154619.jpg",          date: "Oct 10"},
        {
          id: "b3",          category: "Wine",          title: "Mediterranean Pairings",          excerpt: "Best wines for our Portuguese chicken.",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-picnic-still-life_23-2149419733.jpg",          authorName: "Sommelier",          authorAvatar: "http://img.b2bpic.net/free-photo/anxious-young-brunette-caucasian-girl-stands-with-crossed-arms-isolated-orange-wall-with-copy-space_141793-116438.jpg",          date: "Oct 05"},
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do I need a reservation?",          content: "Booking is recommended, especially for sunset seating."},
        {
          id: "f2",          title: "Is there parking available?",          content: "Yes, secure parking is provided on-site."},
        {
          id: "f3",          title: "Are children welcome?",          content: "We are family-friendly and offer a dedicated kids menu."},
      ]}
      title="Planning Your Visit"
      faqsAnimation="slide-up"
      description="Common questions answered to make your visit smoother."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static"}}
      tag="Booking"
      title="Reserve Your Table"
      description="Experience coastal elegance at 46 Heleza Blvd, La Mercy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Gallery",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="Shoreside Terrace Cafe © 2024"
      bottomRightText="La Mercy, Durban North Coast"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
