import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const CHECKOUT_URL = 'https://pay.kiwify.com.br/xqhlmRc'

const solutionCategories = [
  {
    category: '🧠 Inteligência Estratégica & Vendas',
    items: [
      { num: '01', title: 'A Mente do Especialista', desc: 'Replique o processo de decisão e o "Cérebro do Marcos Martins" na sua empresa.' },
      { num: '02', title: 'SDR Blindado', desc: 'Automatize a qualificação de leads e nunca mais perca tempo com contatos frios.' },
      { num: '03', title: 'O Fim do Follow-up Manual', desc: 'O sistema de conversão infinita que mantém seus leads quentes no piloto automático.' },
      { num: '04', title: 'Calculadora de Lucro Real', desc: 'Domine seu OTE, comissões e margens sem erros de cálculo.' },
      { num: '05', title: 'Simulador de Preço Lucrativo', desc: 'Encontre o "sweet spot" entre competitividade e alta margem de lucro.' },
    ]
  },
  {
    category: '📲 Automação de Atendimento & Social',
    items: [
      { num: '06', title: 'Seu Clone no WhatsApp', desc: 'Crie agentes inteligentes que atendem, vendem e resolvem problemas 24/7.' },
      { num: '07', title: 'Dominação no Instagram', desc: 'Integre IA ao Manychat e transforme directs em uma máquina de vendas.' },
      { num: '08', title: 'Gestão de Comunidade 2.0', desc: 'IA de suporte para grupos que mantém a ordem e responde a audiência instantaneamente.' },
      { num: '09', title: 'Omnichannel sem Custo', desc: 'Como estruturar um atendimento multicanal profissional de forma gratuita.' },
    ]
  },
  {
    category: '⚡ Produtividade Exponencial & Operação',
    items: [
      { num: '10', title: 'O Fim do Caos no Gmail', desc: 'IA para organizar sua caixa de entrada e destacar o que realmente dá dinheiro.' },
      { num: '11', title: 'Agenda Inteligente', desc: 'Deixe a IA organizar suas tarefas e compromissos para você focar só na execução.' },
      { num: '12', title: 'Fábrica de Conteúdo Infinito', desc: 'Nunca mais sofra com bloqueio criativo; gere ideias de alto impacto em segundos.' },
      { num: '13', title: 'YouTube como Fonte de Dados', desc: 'Transcreva e extraia insights de qualquer vídeo instantaneamente.' },
      { num: '14', title: 'Engenharia de Prompt Mestra', desc: 'Aprenda a falar a língua das IAs para obter resultados perfeitos na primeira tentativa.' },
    ]
  },
  {
    category: '🛠️ Desenvolvimento & Estrutura',
    items: [
      { num: '15', title: 'Site Próprio em Minutos', desc: 'Crie sua presença digital sem precisar digitar uma linha de código.' },
      { num: '16', title: 'Automação para Iniciantes (n8n)', desc: 'Aprenda a disparar mensagens em massa de forma inteligente e segura.' },
      { num: '17', title: 'Organização de Docs & Mapas Mentais', desc: 'Transforme informações espalhadas em conhecimento estruturado e visual.' },
      { num: '18', title: 'Agendamento de Tarefas com IA', desc: 'Crie rotinas automáticas que agendam, priorizam e executam sem intervenção humana.' },
      { num: '19', title: 'Sistema Financeiro com IA', desc: 'Controle receitas, despesas e projeções com automações inteligentes.' },
      { num: '20', title: 'Análise de Prompt Avançada', desc: 'Diagnostique e melhore qualquer prompt para garantir resultados melhores com menos tentativas.' },
      { num: '21', title: 'IA de Análise Comercial', desc: 'Use IA para interpretar seu desempenho comercial e tomar decisões baseadas em dados reais.' },
    ]
  },
]

const faqs = [
  {
    q: 'Preciso saber programar para usar os sistemas?',
    a: 'Não. Os sistemas foram feitos exatamente para quem não sabe programar. Você copia o sistema, segue as instruções passo a passo e cola na ferramenta indicada. Se você sabe usar o WhatsApp, você consegue aplicar.'
  },
  {
    q: 'Funciona para qualquer tipo de negócio?',
    a: 'Sim. Os 21 sistemas foram desenhados para serem adaptáveis a qualquer segmento: e-commerce, clínicas, agências, prestadores de serviço, escritórios, restaurantes e muito mais. Se você tem clientes, tem como aplicar.'
  },
  {
    q: 'Quando vou receber acesso após o pagamento?',
    a: 'O acesso é imediato. Logo após a confirmação do pagamento (inclusive via PIX) você recebe o acesso por email e já pode explorar todos os 21 sistemas e os bônus.'
  },
  {
    q: 'E se eu não gostar? Tem garantia?',
    a: 'Sim. Você tem 7 dias de Garantia Incondicional. Se por qualquer razão — nem precisa ter motivo — você não ficar satisfeito, basta enviar um email e devolvemos 100% do valor pago, sem perguntas e sem burocracia.'
  },
]

/* ─── COUNTDOWN TIMER ────────────────────────── */
function Countdown() {
  const calcTime = () => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('cdEnd')
    if (saved) return Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000))
    const end = Date.now() + 23 * 60 * 60 * 1000 + 47 * 60 * 1000
    if (typeof window !== 'undefined') localStorage.setItem('cdEnd', end)
    return 23 * 3600 + 47 * 60
  }
  const [secs, setSecs] = useState(0)
  useEffect(() => {
    setSecs(calcTime())
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [])
  const h = String(Math.floor(secs / 3600)).padStart(2, '0')
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0')
  const s = String(secs % 60).padStart(2, '0')
  return (
    <div style={{
      background: '#0a0a0a', borderTop: '1px solid rgba(255,69,0,0.3)',
      padding: '10px 8%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', gap: '12px', flexWrap: 'wrap',
    }}>
      <span style={{ fontSize: '0.78rem', color: '#aaa', fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.06em' }}>
        ⏳ OFERTA EXPIRA EM:
      </span>
      <div style={{ display: 'flex', gap: '6px' }}>
        {[h, m, s].map((unit, i) => (
          <span key={i} style={{
            background: '#FF4500', color: '#fff', padding: '4px 10px',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 900,
            fontSize: '1rem', minWidth: '36px', textAlign: 'center',
          }}>{unit}{i < 2 ? ':' : ''}</span>
        ))}
      </div>
      <span style={{ fontSize: '0.78rem', color: '#FF4500', fontWeight: 700 }}>— GARANTA R$97 AGORA</span>
    </div>
  )
}

/* ─── SOCIAL PROOF TOAST ─────────────────────── */
function SocialProofToast() {
  const buyers = [
    { name: 'Rafael M.', city: 'São Paulo, SP' },
    { name: 'Camila R.', city: 'Belo Horizonte, MG' },
    { name: 'Lucas T.', city: 'Curitiba, PR' },
    { name: 'Ana Paula S.', city: 'Rio de Janeiro, RJ' },
    { name: 'Rodrigo C.', city: 'Brasília, DF' },
    { name: 'Fernanda A.', city: 'Fortaleza, CE' },
    { name: 'Diego N.', city: 'Porto Alegre, RS' },
    { name: 'Juliana F.', city: 'Recife, PE' },
  ]
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const show = () => {
      setCurrent(Math.floor(Math.random() * buyers.length))
      setVisible(true)
      setTimeout(() => setVisible(false), 4000)
    }
    const t = setTimeout(() => {
      show()
      const interval = setInterval(show, 18000)
      return () => clearInterval(interval)
    }, 5000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div style={{
      position: 'fixed', bottom: '80px', left: '20px', zIndex: 9999,
      background: '#1a1a1a', border: '1px solid rgba(255,69,0,0.35)',
      borderLeft: '4px solid #FF4500',
      padding: '12px 16px', maxWidth: '260px',
      transition: 'transform 0.4s ease, opacity 0.4s ease',
      transform: visible ? 'translateX(0)' : 'translateX(-320px)',
      opacity: visible ? 1 : 0,
      pointerEvents: 'none',
    }}>
      <div style={{ fontSize: '0.7rem', color: '#FF4500', fontWeight: 700, marginBottom: '4px', fontFamily: "'Montserrat',sans-serif", letterSpacing: '0.08em' }}>⚡ ACESSO RECENTE</div>
      <div style={{ fontSize: '0.88rem', color: '#f0f0f0', fontWeight: 600 }}>{buyers[current]?.name}</div>
      <div style={{ fontSize: '0.78rem', color: '#888' }}>{buyers[current]?.city} acabou de garantir acesso</div>
    </div>
  )
}

function MobileBuyBar() {
  return (
    <div className={styles.mobileBuyBar}>
      <div className={styles.mobileBuyPrice}>
        R$97<small>Pagamento único</small>
      </div>
      <a href="https://pay.kiwify.com.br/xqhlmRc" className={styles.mobileBuyBtn}>
        ⚡ Garantir Acesso
      </a>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqBtn} onClick={() => setOpen(!open)}>
        {q}
        <span className={`${styles.faqIcon} ${open ? styles.faqIconOpen : ''}`}>+</span>
      </button>
      <div className={`${styles.faqAnswer} ${open ? styles.faqAnswerOpen : ''}`}>{a}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>21 Soluções de IA Prontas | Marcos Martins</title>
        <meta name="description" content="21 sistemas de IA prontos para copiar, colar e aplicar hoje na sua empresa. Sem programar. Por apenas R$97." />
      </Head>

      <SocialProofToast />

      {/* 1. TOP BAR */}
      <div className={styles.topbar}>
        <p className={styles.topbarText}>
          Automação com IA aplicável a qualquer negócio — Sem precisar saber programar
        </p>
      </div>

      {/* STICKY NAV */}
      <nav className={styles.stickyNav}>
        <div className={styles.stickyLogo}>
          Núcleo<span className={styles.stickyLogoSpan}>1</span>
        </div>
        <a href={CHECKOUT_URL} className={`${styles.btnOrange} ${styles.btnSm}`}>
          Garantir Acesso — R$97
        </a>
      </nav>

      <Countdown />

      {/* 2. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLogo}>
            <div className={styles.heroLogoName}>
              Núcleo<span className={styles.heroLogoOrange}>1</span>
            </div>
            <div className={styles.heroLogoTag}>O arsenal de IA para empresários</div>
          </div>
          <h1 className={styles.heroH1}>
            A IA vai atrás dos seus leads, faz{' '}
            <span className={styles.glowText}>follow-up infinito</span>{' '}
            e só te entrega quem fecha.
          </h1>
          <p className={styles.heroSub}>
            Inteligência estratégica, automação de atendimento e produtividade exponencial — tudo documentado passo a passo, sem precisar saber programar. Acesso imediato por R$97.
          </p>
          <a
            href="#inscricao"
            className={`${styles.btnOrange} ${styles.btnPulse}`}
            onClick={(e) => {
              e.preventDefault()
              const target = document.getElementById('inscricao')
              if (!target) return
              const start = window.scrollY
              const end = target.getBoundingClientRect().top + window.scrollY - 80
              const dist = end - start
              const duration = 1400
              let startTime = null
              const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
              const step = (ts) => {
                if (!startTime) startTime = ts
                const progress = Math.min((ts - startTime) / duration, 1)
                window.scrollTo(0, start + dist * ease(progress))
                if (progress < 1) requestAnimationFrame(step)
              }
              requestAnimationFrame(step)
            }}
          >
            ⚡ Quero os 21 Sistemas Agora →
          </a>
          <div className={styles.heroMicroProof}>
            <span>🔒 Garantia 7 dias</span>
            <span>⚡ Acesso imediato</span>
            <span>🔄 Atualiza mensalmente</span>
          </div>
        </div>
        <div className={styles.heroImgWrap}>
          <Image
            src="/marcos.png"
            alt="Marcos Martins"
            width={420}
            height={540}
            className={styles.heroPhoto}
            style={{ objectFit: 'contain', background: 'transparent' }}
          />
          <div className={`${styles.heroBadge} ${styles.heroBadgeTop}`}>
            <div className={styles.heroBadgeNum}>+21</div>
            <div className={styles.heroBadgeLabel}>sistemas prontos</div>
          </div>
          <div className={`${styles.heroBadge} ${styles.heroBadgeBottom}`}>
            <div className={styles.heroBadgeNum}>R$97</div>
            <div className={styles.heroBadgeLabel}>pagamento único</div>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON */}
      <section className={styles.comparison}>
        <h2 className={styles.compH2}>
          A diferença entre <em>ter</em> IA e{' '}
          <span className={styles.orange}>usar</span> IA de verdade
        </h2>
        <div className={styles.compGrid}>
          <div className={styles.compCard}>
            <div className={styles.compHeader}>❌ Sem os sistemas</div>
            <div className={styles.compResult}>Operação manual</div>
            <p className={styles.compDesc}>
              Equipe sobrecarregada, follow-up à mão, leads esfriando, horas perdidas em tarefas que a IA poderia fazer em segundos.
            </p>
          </div>
          <div className={`${styles.compCard} ${styles.compCardWith}`}>
            <div className={`${styles.compHeader} ${styles.compHeaderWith}`}>✅ Com os 21 sistemas</div>
            <div className={`${styles.compResult} ${styles.compResultWith}`}>IA no piloto automático</div>
            <p className={styles.compDesc}>
              Follow-up infinito, leads qualificados, atendimento 24/7 e decisões baseadas em dados — enquanto você foca no que importa.
            </p>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* 4. PAIN POINTS */}
      <section className={styles.pain}>
        <div className={styles.painInner}>
          <h2 className={styles.sectionH2}>
            Se você se identifica com algum desses problemas,<br />isso é para você:
          </h2>
          <ul className={styles.painList}>
            {[
              'Sua equipe gasta horas fazendo follow-up manual enquanto leads quentes esfriam sem resposta.',
              'Você tentou usar IA mas desistiu porque parecia complicado demais ou exigia saber programar.',
              'Assiste tutoriais e cursos de IA mas nunca consegue implementar nada na prática no seu negócio.',
              'Paga ferramentas caras de automação que nunca chegam perto do potencial prometido.',
              'Sabe que concorrentes já estão usando IA e se sente ficando para trás enquanto tenta entender por onde começar.',
            ].map((text, i) => (
              <li key={i} className={styles.painItem}>
                <span className={styles.painIcon}>✕</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* 5. REFRAME */}
      <section className={styles.reframe}>
        <div className={styles.reframeEmoji}>💡</div>
        <h2 className={styles.reframeH2}>
          Você não precisa ser programador<br />para ter IA trabalhando por você
        </h2>
        <p className={styles.reframeP}>
          A maioria das pessoas acha que precisa aprender código, contratar um especialista ou gastar fortunas.
          A verdade é que com os sistemas certos, qualquer um consegue aplicar.{' '}
          <span className={styles.reframeBold}>Copia, cola e roda hoje.</span>
        </p>
      </section>

      <hr className={styles.divider} />

      {/* 6. SOLUTIONS */}
      <section className={styles.solutions}>
        <p className={styles.sectionLabel}>O que você recebe</p>
        <h2 className={styles.sectionH2}>
          🚀 Domine a IA: O Arsenal para{' '}
          <span className={styles.orange}>Escalar sua Operação</span>
        </h2>
        <p className={styles.solutionsSub}>
          21 sistemas organizados em 4 categorias. Cada um documentado passo a passo para você aplicar no mesmo dia.
        </p>

        {solutionCategories.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: '48px', textAlign: 'left' }}>
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#FF4500',
              marginBottom: '16px',
              paddingBottom: '8px',
              borderBottom: '1px solid rgba(255,69,0,0.2)',
            }}>
              {cat.category}
            </h3>
            <div className={styles.solGrid}>
              {cat.items.map((sol, si) => (
                <div key={si} className={styles.solCard}>
                  <div className={styles.solNum}>{sol.num}</div>
                  <div>
                    <div className={styles.solTitle}>{sol.title}</div>
                    <div style={{ fontSize: '0.82rem', color: '#888', marginTop: '4px', lineHeight: '1.5' }}>
                      {sol.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <a href={CHECKOUT_URL} className={styles.btnOrange}>
          Quero Acesso a Todos os 21 Sistemas →
        </a>
      </section>

      <hr className={styles.divider} />

      {/* 7. TESTIMONIALS */}
      <section className={styles.beforeafter}>
        <p className={styles.sectionLabel} style={{ textAlign: 'center' }}>O que dizem quem já usa</p>
        <h2 className={styles.sectionH2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Resultados <span className={styles.orange}>reais</span> de quem aplicou
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {[
            { initials: 'JL', name: 'Julio Lara', role: 'CEO · NDD (Nova Dimensão Digital)', quote: '"Absurdo essas ferramentas. Muito obrigado, meu mentor."', highlight: false },
            { initials: 'VL', name: 'Vitor Lara', role: 'Fundador · VDUC Digital — Assessoria de Vendas', quote: '"Copiei e colei e inclusive já vendi a solução de WhatsApp por R$5k. O ROI é incontável. Muito obrigado."', highlight: true },
            { initials: 'MJ', name: 'Murilo Júlio', role: 'Sócio · ODU Assessoria de Marketing para Locadoras', quote: '"Absurdo. Copiei e colei, já estou usando todas as soluções e aguardando as próximas. Estamos juntos."', highlight: false },
            { initials: 'LK', name: 'Luiz Eduardo Kasuya', role: 'CEO · Kasuya Inteligência Agronômica', quote: '"Me ajudou a organizar meus e-mails, minha agenda e minha rotina. Parabéns pelas soluções."', highlight: false },
          ].map((t, i) => (
            <div key={i} style={{
              background: t.highlight ? 'rgba(255,69,0,0.07)' : '#141414',
              border: t.highlight ? '1px solid rgba(255,69,0,0.4)' : '1px solid rgba(255,255,255,0.07)',
              borderTop: t.highlight ? '3px solid #FF4500' : '1px solid rgba(255,255,255,0.07)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <p style={{ fontSize: '1rem', color: '#e8e8e8', lineHeight: '1.7', fontStyle: 'italic', flexGrow: 1 }}>{t.quote}</p>
              {t.highlight && (
                <div style={{ background: '#FF4500', color: '#fff', fontSize: '0.72rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', display: 'inline-block', alignSelf: 'flex-start' }}>⭐ ROI Incontável</div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: '#FF4500', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '0.8rem', color: '#fff', flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.92rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* 8. DIFFERENTIATION */}
      <section className={styles.diff}>
        <div className={styles.diffCard}>
          <div className={styles.diffTag}>O que isso não é</div>
          <h2 className={styles.diffH2}>
            Não é curso. Não é consultoria. Não é teoria.
          </h2>
          <p className={styles.diffP}>
            Esses 21 sistemas não são conceitos para você estudar nem aulas para assistir por semanas.
            São as ferramentas exatas, documentadas linha por linha, que o Marcos usa nas próprias empresas todos os dias.
            Você pega, replica e vê funcionando na primeira hora.
          </p>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* 9. BONUSES */}
      <section className={styles.bonus}>
        <p className={styles.sectionLabel}>Bônus exclusivos</p>
        <h2 className={styles.sectionH2}>
          Você ainda leva esses{' '}
          <span className={styles.orange}>bônus de graça</span>
        </h2>
        <div className={styles.bonusGrid}>
          <div className={styles.bonusCard}>
            <div className={`${styles.imgPlaceholder} ${styles.bonusImg}`}>Bônus 1</div>
            <div className={styles.bonusBody}>
              <h4 className={styles.bonusTitle}>🎁 5 Aulões de IA Aplicada</h4>
              <p className={styles.bonusDesc}>
                Aulas exclusivas com os casos práticos mais valiosos de IA nos negócios. Do zero ao avançado, sem enrolação.{' '}
                <span className={styles.bonusHighlight}>Valor: R$297 — GRÁTIS</span>
              </p>
            </div>
          </div>
          <div className={styles.bonusCard}>
            <div className={`${styles.imgPlaceholder} ${styles.bonusImg}`}>Bônus 2</div>
            <div className={styles.bonusBody}>
              <h4 className={styles.bonusTitle}>🎁 Templates no Lovable</h4>
              <p className={styles.bonusDesc}>
                Designs de sites e ferramentas prontas para duplicar, personalizar e publicar em minutos sem designer.{' '}
                <span className={styles.bonusHighlight}>Valor: R$197 — GRÁTIS</span>
              </p>
            </div>
          </div>
          <div className={styles.bonusCard}>
            <div className={`${styles.imgPlaceholder} ${styles.bonusImg}`}>Bônus 3</div>
            <div className={styles.bonusBody}>
              <h4 className={styles.bonusTitle}>🎁 Atualizações Mensais</h4>
              <p className={styles.bonusDesc}>
                Todo mês novos sistemas são adicionados à sua biblioteca, sem custo extra. Você nunca fica desatualizado.{' '}
                <span className={styles.bonusHighlight}>INCLUSO — sem mensalidade</span>
              </p>
            </div>
          </div>
        </div>
        <a href={CHECKOUT_URL} className={styles.btnOrange}>
          Quero Tudo Isso por R$97 →
        </a>
      </section>

      <hr className={styles.divider} />

      {/* 10. PRICE */}
      <section className={styles.price} id="inscricao">
        <h2 className={styles.priceH2}>
          Pare de perder tempo com operação manual.{' '}
          <span className={styles.orange}>Coloque IA pra trabalhar por você hoje.</span>
        </h2>
        <p className={styles.priceSub}>Você vai ter acesso a tudo isso por apenas:</p>
        <div className={styles.priceAmount}>
          <small className={styles.priceSmall}>R$</small>97<small className={styles.priceSmall}>,00</small>
        </div>
        <div className={styles.priceBtnWrap}>
          <a href={CHECKOUT_URL} className={`${styles.btnOrange} ${styles.btnLg}`}>
            ⚡ Quero Acesso Imediato
          </a>
        </div>
        <div className={styles.paymentBadges}>
          {['PIX', 'Visa', 'Mastercard', 'PayPal', 'Boleto', 'Elo'].map((p) => (
            <div key={p} className={styles.payBadge}>{p}</div>
          ))}
        </div>
        <p className={styles.priceSecure}>🔒 Compra 100% segura · Garantia incondicional de 7 dias</p>
      </section>

      <hr className={styles.divider} />

      {/* 11. AUTHOR */}
      <section className={styles.author}>
        <div className={styles.authorInner}>
          <div className={styles.authorText}>
            <h2 className={styles.authorH2}>
              Quem é <span className={styles.authorSpan}>Marcos Martins?</span>
            </h2>
            <p className={styles.authorP}>
              Marcos é fundador da <strong>Núcleo1</strong> e da <strong>StayApp</strong>, com mais de 14 anos construindo e escalando empresas de tecnologia. Já liderou equipes de mais de 50 pessoas e processou dezenas de milhares de transações.
            </p>
            <p className={styles.authorP}>
              Esses não são sistemas teóricos — são as ferramentas exatas que ele usa no dia a dia para manter suas empresas competitivas. Cada sistema foi testado na prática antes de ser documentado aqui.
            </p>
            <p className={styles.authorP}>
              Sua missão com o Núcleo1 é simples: tornar o poder da IA acessível para empresários de qualquer segmento, sem precisar saber programar ou contratar uma equipe de tecnologia cara.
            </p>
          </div>
          <Image
            src="/marcos.png"
            alt="Marcos Martins"
            width={380}
            height={460}
            className={styles.authorPhoto}
            style={{ objectFit: 'contain', background: 'transparent' }}
          />
        </div>
      </section>

      <hr className={styles.divider} />

      {/* 12. FINAL CTA */}
      <section className={styles.finalcta}>
        <h2 className={styles.finalH2}>
          Você já sabe o que quer.<br />
          <span className={styles.orange}>Você só precisava de um empurrão.</span>
        </h2>
        <p className={styles.finalP}>
          Seus concorrentes já estão automatizando. Cada dia sem IA é um dia de vantagem que eles acumulam sobre você.
        </p>
        <p className={styles.actionLine}>Tome a decisão. Acesse os 21 sistemas. Aplique hoje.</p>
        <a href={CHECKOUT_URL} className={`${styles.btnOrange} ${styles.btnLg}`}>
          Garantir Acesso por R$97 →
        </a>
        <p className={styles.finalNote}>
          Em menos de 5 minutos você pode ter seu primeiro sistema de IA rodando.
        </p>
      </section>

      <hr className={styles.divider} />

      {/* 13. FAQ */}
      <section className={styles.faq}>
        <h2 className={styles.sectionH2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Perguntas <span className={styles.orange}>frequentes</span>
        </h2>
        <div className={styles.faqInner}>
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <MobileBuyBar />

      {/* 14. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            Núcleo<span className={styles.footerLogoSpan}>1</span>
          </div>
          <p className={styles.footerCopy}>
            © 2025 Núcleo1 · Marcos Martins · Todos os direitos reservados<br />
            Produto distribuído pela plataforma Kiwify
          </p>
          <div className={styles.footerLinks}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
