# WebTech

Portfólio profissional em Next.js 15 + React + Tailwind CSS + Framer Motion + Lucide Icons.

Duas páginas:
- `/` — Landing page de conversão da WebTech (venda de sites para empresas de tecnologia e assistência técnica)
- `/nexus-tech` — Site demonstrativo da empresa fictícia Nexus Tech (case de portfólio)

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Antes de publicar

1. **WhatsApp**: troque o número placeholder em `src/lib/constants.ts` (`WHATSAPP_NUMBER`) pelo número real, só dígitos, com DDI (ex: `5511999999999`).
2. **Domínio**: atualize `siteUrl` em `src/app/layout.tsx`, `src/app/sitemap.ts` e `src/app/robots.ts` para o domínio real.
3. **Imagem OG**: adicione um arquivo `public/og-image.png` (1200x630) para o preview em redes sociais.
4. **Indexação da Nexus Tech**: a página `/nexus-tech` está com `robots: { index: false }` por ser uma demonstração — ajuste em `src/app/nexus-tech/page.tsx` se quiser que ela seja indexada como case de portfólio.

## Estrutura

```
src/
├── app/                  # Rotas (App Router)
│   ├── page.tsx          # WebTech (/)
│   └── nexus-tech/       # Demonstração (/nexus-tech)
├── components/
│   ├── ui/               # Design system compartilhado (Button, Reveal, SpotlightCard...)
│   ├── webtech/           # Seções da página WebTech
│   └── nexus/             # Seções da página Nexus Tech
├── lib/                  # constants.ts (conteúdo), animations.ts, utils.ts
└── types/                # Tipos compartilhados
```

Todo o conteúdo textual (benefícios, FAQ, serviços, depoimentos etc.) fica centralizado em `src/lib/constants.ts` — edite ali para atualizar textos sem mexer nos componentes.
