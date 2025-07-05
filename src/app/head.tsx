export default function Head() {
  return (
    <>
      <title>Linktree by Luís Araújo</title>
      <meta name="description" content="Links úteis para produtos e serviços personalizados de Luís Araújo, desenvolvedor web." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Luís Araújo" />
      <meta name="keywords" content="Luís Araújo, desenvolvedor web, portfólio, produtos, links, React, Next.js" />

      {/* Open Graph (Facebook, LinkedIn etc) */}
      <meta property="og:title" content="Linktree by Luís Araújo" />
      <meta property="og:description" content="Acesse os links e produtos do desenvolvedor Luís Araújo." />
      <meta property="og:url" content="https://personal-portifolio-khaki.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://luisaraujo.dev/images/preview.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Linktree by Luís Araújo" />
      <meta name="twitter:description" content="Links úteis para produtos e serviços personalizados de Luís Araújo." />
      <meta name="twitter:image" content="https://luisaraujo.dev/images/preview.png" />
      <meta name="twitter:creator" content="@luisaraujo" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />
    </>
  );
}
