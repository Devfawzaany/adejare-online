
const WHATSAPP = "2349039502229";
const PHONE = "+2349039502229";
const INSTAGRAM = "https://instagram.com/adejareclothing";
const TIKTOK = "https://www.tiktok.com/@adejareclothing";

document.querySelectorAll("[data-wa]").forEach(btn=>{
  const product = btn.dataset.wa || "Adejare Clothing";
  const message = `Hello Adejare Clothing, I am interested in ${product}. Please provide more details about availability, pricing and delivery.`;
  btn.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
});
document.querySelectorAll("[data-phone]").forEach(btn=>btn.href=`tel:${PHONE}`);
document.querySelectorAll("[data-instagram]").forEach(btn=>btn.href=INSTAGRAM);
document.querySelectorAll("[data-tiktok]").forEach(btn=>btn.href=TIKTOK);

const header=document.querySelector(".site-header");
window.addEventListener("scroll",()=>header?.classList.toggle("scrolled",window.scrollY>20));

const toggle=document.querySelector(".menu-toggle");
const mobile=document.querySelector(".mobile-menu");
toggle?.addEventListener("click",()=>{
  const open=mobile.classList.toggle("open");
  toggle.setAttribute("aria-expanded",open);
});
mobile?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".faq-question").forEach(q=>{
  q.addEventListener("click",()=>{
    const item=q.closest(".faq-item");
    item.classList.toggle("open");
    q.querySelector("span").textContent=item.classList.contains("open")?"−":"+";
  });
});

const products={
  "cashmere": {
    name:"Cashmere",
    category:"Premium Fabric",
    image:"images/fabrics/cashmere.jpg",
    description:"A luxurious, exceptionally soft fabric selected for its warmth, refined hand feel and understated elegance. Ideal for elevated tailoring and statement pieces.",
    details:"Soft texture • Refined finish • Luxury warmth"
  },
  "american-wool":{
    name:"American Wool",
    category:"Premium Fabric",
    image:"images/fabrics/american-wool.jpg",
    description:"A sophisticated wool selection valued for its structure, durability and elegant appearance. A dependable foundation for polished tailoring.",
    details:"Structured drape • Durable • Tailoring ready"
  },
  "7-star-fabric":{
    name:"7 Star Fabric",
    category:"Premium Fabric",
    image:"images/fabrics/seven-star.jpg",
    description:"A distinctive premium fabric selection created for customers who appreciate a refined surface, comfortable feel and confident presence.",
    details:"Refined texture • Comfortable • Distinctive"
  },
  "9-star-fabric":{
    name:"9 Star Fabric",
    category:"Premium Fabric",
    image:"images/fabrics/nine-star.jpg",
    description:"An elevated fabric choice for customers seeking a sophisticated balance of appearance, comfort and premium character.",
    details:"Elevated finish • Comfortable • Sophisticated"
  },
  "italian-wool":{
    name:"Italian Wool",
    category:"Premium Fabric",
    image:"images/fabrics/italian-wool.jpg",
    description:"Elegant wool inspired by the refined tradition of Italian tailoring, with beautiful drape and a polished finish for timeless garments.",
    details:"Elegant drape • Refined finish • Tailoring"
  },
  "merino":{
    name:"Merino Fabric",
    category:"Premium Fabric",
    image:"images/fabrics/merino.jpg",
    description:"A fine, versatile fabric appreciated for its soft natural feel, comfort and sophisticated finish across refined garments.",
    details:"Fine fibres • Soft feel • Versatile"
  },
  "australian-wool":{
    name:"Australian Wool",
    category:"Premium Fabric",
    image:"images/fabrics/australian-wool.jpg",
    description:"Premium wool valued for quality, durability, warmth and an elegant appearance suited to timeless tailoring.",
    details:"Premium quality • Warmth • Durable"
  }
};

const params=new URLSearchParams(location.search);
const key=params.get("product");
const p=products[key];
if(p && document.querySelector("[data-product-name]")){
  document.querySelector("[data-product-name]").textContent=p.name;
  document.querySelector("[data-product-category]").textContent=p.category;
  document.querySelector("[data-product-description]").textContent=p.description;
  document.querySelector("[data-product-details]").textContent=p.details;
  document.querySelector("[data-product-image]").src=p.image;
  document.querySelector("[data-product-image]").alt=p.name;
  document.querySelector("[data-wa]").dataset.wa=p.name;
  document.title=`${p.name} | Adejare Clothing`;
}
