import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

// Основные ссылки для хедера, бургера и других общих компонентов
export const routes = [
  { name: "nav1", path: "#structure" },
  { name: "nav2", path: "#about" },
  { name: "nav3", path: "#advantages" },
  { name: "nav4", path: "#reviews" },
  { name: "nav5", path: "#faq" },
];

// Ссылки, которые используются только в футере
export const footerLinks = [
  { name: "link1", path: "/legal-details" },
  { name: "link2", path: "/individual-entrepreneur" },
  { name: "link3", path: "/offer" },
  { name: "link4", path: "/privacy-policy" },
];

// Соц.сети

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/grebinenko.official/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@grebinenko.official",
    icon: FaTiktok,
  },
  { name: "Telegram", url: "https://t.me/max_your_help", icon: FaTelegram },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@grebinenko",
    icon: FaYoutube,
  },
  { name: "Email", url: "mailto:hrebinenko@icloud.com", icon: FaEnvelope },
];

export const socLinksAbout = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/evgeniy.grebinenko/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@evgeniy.grebinenko",
    icon: FaTiktok,
  },
  {
    name: "Telegram",
    url: "https://t.me/evgeniy_grebinenko",
    icon: FaTelegram,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@grebinenko",
    icon: FaYoutube,
  },
  {
    name: "Email",
    url: "mailto:hrebinenko@icloud.com",
    icon: FaEnvelope,
  },
];

export const socLinksFooter = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/evgeniy.grebinenko/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@evgeniy.grebinenko",
    icon: FaTiktok,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@grebinenko",
    icon: FaYoutube,
  },
];
