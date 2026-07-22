export type Business = {
  id: string;
  title: string;
  summary: string;
  icon?: string;
};

export const BUSINESSES: Business[] = [
  { id: "knit-denim", title: "The Fortune Knit & Denim Fashion", summary: "Premium knitwear and denim manufacturing with export capability." },
  { id: "medicine-corner", title: "The Fortune Medicine Corner", summary: "Retail and distribution of healthcare and wellness products." },
  { id: "agro-farm", title: "The Fortune Agro Farm", summary: "Integrated livestock and crop farming with modern facilities." },
  { id: "tour-travels", title: "The Fortune Tour & Travels", summary: "Corporate travel management and premium tour services." },
  { id: "super-shop", title: "The Fortune Super Shop", summary: "Retail chain offering quality groceries and consumer goods." },
  { id: "transport-service", title: "The Fortune Transport Service", summary: "Reliable logistics and transportation solutions." },
  { id: "gold-diamond", title: "The Fortune Gold & Diamond House", summary: "Trusted jewellery business focused on quality and craftsmanship." },
  { id: "export-house", title: "The Fortune Export House", summary: "Export services and international trade operations." },
  { id: "automobile", title: "The Fortune Automobile", summary: "Automobile sales, service, and spare parts." },
  { id: "restaurant-cafe", title: "The Fortune Restaurant & Cafe", summary: "Premium dining and catering solutions." },
];
