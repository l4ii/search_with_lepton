import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CINF智语先锋",
  description:
    "CINF智语先锋是一款基于大型语言模型构建的智能对话系统，它凭借深度学习与大规模训练数据，能够生成高度相关且富有创意的回答。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
