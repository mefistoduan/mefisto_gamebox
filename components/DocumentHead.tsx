import React from 'react';
import Head from 'next/head';

interface DocumentHeadProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string;
  type?: string;
}

const DocumentHead: React.FC<DocumentHeadProps> = ({ 
  title, 
  description, 
  url = 'https://gamebox.qzz.io', 
  image, 
  keywords = 'free games, HTML5 games, online games, play games', 
  type = 'website'
}) => {
  const fullTitle = `${title} | Mefisto Game Box`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph 元标签 */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}
      
      {/* Twitter 元标签 */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={title} />}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* 搜索引擎索引指令 */}
      <meta name="robots" content="index, follow" />
      
      {/* 站点地图引用 */}
      <link rel="sitemap" type="application/xml" href="https://gamebox.qzz.io/sitemap.xml" />
      
      {/* 关联到 Google Search Console */}
      {/* 请替换为您的 Google Search Console 验证代码 */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": fullTitle,
            "description": description,
            "url": url,
            "potentialAction": {
              "@type": "PlayAction",
              "target": url,
              "name": "Play Game"
            }
          })
        }}
      />
    </Head>
  );
};

export default DocumentHead;