import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/VariantB.module.css'

const CHECKOUT_URL = 'https://pay.kiwify.com.br/xqhlmRc'

const solutions = [
  { num: '01', title: 'A Mente do Especialista', desc: 'O agente de IA que replica o raciocínio estratégico do Marcos Martins. Use para tomar decisões, criar planos e pensar como um fundador.' },
  { num: '02', title: 'SDR Blindado no WhatsApp', desc: 'Configure um agente que qualifica leads, responde dúvidas e organiza conversas — 24h por dia, sem você.' },
  { num: '03', title: 'O Fim do Follow-up Manual', desc: 'Automação de follow-up infinito que mantém seus leads quentes no piloto automático. Zero lead esquecido.' },
  { num: '04', title: 'IA de Análise Comercial', desc: 'Jogue seus dados de vendas e receba um diagnóstico completo: gargalos, oportunidades e próximo passo.' },
  { num: '05', title: 'Calculadora de Lucro Real', desc: 'Domine seu OTE, comissões e margens sem erros de cálculo. IA que faz a conta por você.' },
  { num: '06', title: 'Seu Clone no WhatsApp', desc: 'Crie agentes inteligentes que atendem, vendem e resolvem problemas 24/7 como se fosse você.' },
  { num: '07', title: 'Dominação no Instagram', desc: 'Integre IA ao Manychat e transforme directs em uma máquina de vendas automática.' },
  { num: '08', title: 'Gestão de Comunidade 2.0', desc: 'IA de suporte para grupos que mantém a ordem, responde a audiência e filtra o que precisa de atenção.' },
  { num: '09', title: 'Omnichannel sem Custo', desc: 'Centralize WhatsApp, Instagram e email num único painel profissional — de graça.' },
  { num: '10', title: 'O Fim do Caos no Gmail', desc: 'IA para organizar sua caixa de entrada e destacar o que realmente gera dinheiro.' },
  { num: '11', title: 'Agenda Inteligente', desc: 'Deixe a IA organizar suas tarefas e compromissos para você focar só na execução que importa.' },
  { num: '12', title: 'Fábrica de Conteúdo Infinito', desc: 'Nunca mais sofra com bloqueio criativo. Gere ideias de alto impacto em segundos.' },
  { num: '13', title: 'YouTube como Fonte de Dados', desc: 'Transcreva e extraia insights de qualquer vídeo instantaneamente, sem perder tempo assistindo.' },
  { num: '14', title: 'Engenharia de Prompt Mestra', desc: 'Aprenda a falar a língua das IAs para obter resultados perfeitos na primeira tentativa.' },
  { num: '15', title: 'Site Próprio em Minutos', desc: 'Crie sua presença digital sem digitar uma linha de código. Ferramenta + prompt + resultado.' },
  { num: '16', title: 'Automação para Iniciantes (n8n)', desc: 'Dispare mensagens em massa de forma inteligente e segura. Configuração em minutos.' },
  { num: '17', title: 'Organização de Docs & Mapas Mentais', desc: 'Transforme informações espalhadas em conhecimento estruturado e visual, automático.' },
  { num: '18', title: 'Agendamento de Tarefas com IA', desc: 'Crie rotinas automáticas que agendam, priorizam e executam sem intervenção humana.' },
  { num: '19', title: 'Sistema Financeiro com IA', desc: 'Controle receitas, despesas e projeções com automações inteligentes. Sem planilhas manuais.' },
  { num: '20', title: 'Análise de Prompt Avançada', desc: 'Diagnostique e melhore qualquer prompt para garantir resultados melhores com menos tentativas.' },
  { num: '21', title: 'Simulador de Preço Lucrativo', desc: 'Encontre o sweet spot entre competitividade e alta margem de lucro com um prompt.' },
]

const faqs = [
  {
    q: 'Preciso saber programar para usar os sistemas?',
    a: 'Não. Os sistemas foram feitos exatamente para quem não sabe programar. Você copia o arquivo, segue as instruções passo a passo e cola na ferramenta indicada. Se você sabe usar o WhatsApp, você consegue aplicar.',
  },
  {
    q: 'Funciona para qualquer tipo de negócio?',
    a: 'Sim. Os 21 sistemas foram desenhados para serem adaptáveis a qualquer segmento: agências, clínicas, escritórios, e-commerce, prestadores de serviço, agronegócio e muito mais. Se você tem leads para converter, tem como aplicar.',
  },
  {
    q: 'Quando vou receber acesso após o pagamento?',
    a: 'O acesso é imediato. Logo após a confirmação do pagamento (inclusive via PIX) você recebe o link por email e já pode explorar todos os 21 sistemas e os bônus.',
  },
  {
    q: 'E se eu não gostar? Tem garantia?',
    a: 'Sim. Você tem 7 dias de Garantia Incondicional. Se por qualquer razão você não ficar satisfeito, basta enviar um email e devolvemos 100% do valor pago, sem perguntas e sem burocracia.',
  },
  {
    q: 'O que é exatamente cada "sistema"?',
    a: 'Cada sistema é um arquivo pronto (prompt, automação ou template configurado) + um vídeo de implementação de poucos minutos mostrando exatamente como copiar, colar e usar. É para funcionar no mesmo dia.',
  },
]

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

export default function VariantB() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>21 Sistemas de IA Prontos — Copia, Cola e Aplica Hoje | Núcleo1</title>
        <meta
          name="description"
          content="A IA vai atrás dos seus leads, faz follow-up infinito e só te entrega quem fecha. 21 sistemas prontos. Sem programar. R$97 acesso imediato."
        />
      </Head>

      {/* 1. URGENCY BAR */}
      <div className={styles.urgencyBar}>
        ⚡ <span>Bônus de R$494 garantidos</span> somente para as próximas compras
      </div>

      {/* 2. NAV */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          Núcleo<span>1</span>
        </div>
        <a href={CHECKOUT_URL} className={styles.navCta}>
          Garantir Acesso — R$97
        </a>
      </nav>

      {/* 3. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroEyebrow}>21 sistemas prontos · sem programar · acesso imediato</div>
        <h1 className={styles.heroH1}>
          A IA vai atrás dos seus leads,{' '}
          <span className="green">faz follow-up infinito</span> e só te entrega quem fecha.
        </h1>
        <p className={styles.heroSub}>
          21 sistemas testados nas minhas próprias empresas — para copiar, colar e aplicar ainda hoje.
          Sem saber programar. Sem enrolação. Sem perder tempo.
        </p>
        <div className={styles.heroBullets}>
          <span className={styles.heroBullet}>Acesso imediato</span>
          <span className={styles.heroBullet}>21 sistemas prontos</span>
          <span className={styles.heroBullet}>Atualizações mensais</span>
          <span className={styles.heroBullet}>Funciona em qualquer negócio</span>
        </div>
        <a href={CHECKOUT_URL} className={styles.heroCta}>
          QUERO AS 21 SOLUÇÕES POR R$97 →
        </a>
        <p className={styles.heroNote}>
          <span>🔒 Garantia de 7 dias</span> · Arquivo pronto + vídeo tutorial
        </p>
      </section>

      {/* 4. WHAT CHANGES */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>O que muda no seu negócio</p>
        <h2 className={styles.sectionH2}>Pare de correr atrás.<br />Deixe a IA trabalhar por você.</h2>
        <div className={styles.changeGrid}>
          <div className={styles.changeCard}>
            <div className={styles.changeIcon}>🎯</div>
            <div className={styles.changeTitle}>Só fala com quem vai fechar</div>
            <p className={styles.changeSub}>A IA qualifica e filtra antes de você entrar na conversa. Seu tempo vale ouro.</p>
          </div>
          <div className={styles.changeCard}>
            <div className={styles.changeIcon}>♾️</div>
            <div className={styles.changeTitle}>Follow-up infinito sem esforço</div>
            <p className={styles.changeSub}>Nenhum lead esquecido. A automação mantém o contato até o lead fechar ou sair.</p>
          </div>
          <div className={styles.changeCard}>
            <div className={styles.changeIcon}>⚡</div>
            <div className={styles.changeTitle}>Sua equipe rende mais</div>
            <p className={styles.changeSub}>Não substitui ninguém. Faz cada pessoa da equipe trabalhar como se fossem duas.</p>
          </div>
          <div className={styles.changeCard}>
            <div className={styles.changeIcon}>📋</div>
            <div className={styles.changeTitle}>Copia e cola. Funciona hoje.</div>
            <p className={styles.changeSub}>Arquivo pronto + vídeo tutorial. Sem programar, sem enrolação, sem curso de meses.</p>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* 5. SOLUTIONS */}
      <div className={styles.solutionsBg}>
        <div className={styles.sectionWide}>
          <p className={styles.sectionLabel}>O que você coloca pra trabalhar hoje</p>
          <h2 className={styles.sectionH2}>21 sistemas — cada um com arquivo pronto + vídeo de implementação</h2>
          <div className={styles.solutionsList}>
            {solutions.map((sol) => (
              <div key={sol.num} className={styles.solItem}>
                <div className={styles.solNum}>{sol.num}</div>
                <div>
                  <div className={styles.solTitle}>{sol.title}</div>
                  <div className={styles.solDesc}>{sol.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.solCta}>
            <a href={CHECKOUT_URL} className={styles.heroCta}>
              QUERO AS 21 SOLUÇÕES POR R$97 →
            </a>
            <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#6a8a7a' }}>
              🔒 Garantia de 7 dias · Acesso imediato · Arquivo + vídeo tutorial · Sem programar
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* 6. TESTIMONIALS */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Quem já aplicou</p>
        <h2 className={styles.sectionH2}>Resultados reais, não teoria</h2>
        <div className={styles.testiGrid}>
          {[
            {
              initials: 'VL',
              name: 'Vitor Lara',
              role: 'Fundador · VDUC Digital',
              quote: '"Copiei e colei e inclusive já vendi a solução de WhatsApp por R$5k. O ROI é incontável. Muito obrigado."',
              roi: true,
            },
            {
              initials: 'JL',
              name: 'Julio Lara',
              role: 'CEO · Nova Dimensão Digital',
              quote: '"Absurdo essas ferramentas. Muito obrigado, meu mentor."',
              roi: false,
            },
            {
              initials: 'MJ',
              name: 'Murilo Júlio',
              role: 'Sócio · ODU Assessoria de Marketing',
              quote: '"Absurdo. Copiei e colei, já estou usando todas as soluções e aguardando as próximas."',
              roi: false,
            },
            {
              initials: 'LK',
              name: 'Luiz Eduardo Kasuya',
              role: 'CEO · Kasuya Inteligência Agronômica',
              quote: '"Me ajudou a organizar meus e-mails, agenda e rotina. Parabéns pelas soluções."',
              roi: false,
            },
          ].map((t, i) => (
            <div key={i} className={`${styles.testiCard} ${t.roi ? styles.featured : ''}`}>
              <p className={styles.testiQuote}>{t.quote}</p>
              {t.roi && <span className={styles.testiRoi}>⭐ ROI Incontável</span>}
              <div className={styles.testiAuthor}>
                <div className={styles.testiAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.testiName}>{t.name}</div>
                  <div className={styles.testiRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* 7. FOR WHOM */}
      <div className={styles.forWhomBg}>
        <div className={styles.forWhomInner}>
          <p className={styles.sectionLabel}>Para quem é</p>
          <h2 className={styles.sectionH2}>As 21 Soluções são para você que...</h2>
          <ul className={styles.forWhomList}>
            {[
              'Quer parar de perder lead por falta de follow-up',
              'Quer que a IA qualifique e filtre antes de você entrar na conversa',
              'Quer implementar IA sem precisar saber programar',
              'É dono de agência e quer entregar mais resultado sem aumentar equipe',
              'É gestor e quer potencializar o time sem contratar ninguém',
              'Quer parar de testar ferramenta e copiar o que já funciona',
              'Quer resultados reais, não teoria',
            ].map((text, i) => (
              <li key={i} className={styles.forWhomItem}>{text}</li>
            ))}
          </ul>
          <p className={styles.forWhomHighlight}>
            Não importa o seu setor. Funciona para agências, locadoras, escritórios de advocacia, agronegócio, mercado de educação e qualquer negócio que tem leads para converter.
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* 8. BONUSES */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>E ainda mais bônus especiais</p>
        <h2 className={styles.sectionH2}>Comprando hoje você também recebe:</h2>
        <div className={styles.bonusGrid}>
          <div className={styles.bonusCard}>
            <span className={styles.bonusTag}>Presente Gratuito #1</span>
            <div className={styles.bonusBody}>
              <h4 className={styles.bonusTitle}>🎁 5 Aulões Exclusivos de IA Aplicada nos Negócios</h4>
              <p className={styles.bonusValue}>
                5 aulas gravadas e práticas que mostram como estruturar IA na sua empresa do jeito certo.{' '}
                <s>de R$297,00</s> <strong>por R$0,00</strong>
              </p>
            </div>
          </div>
          <div className={styles.bonusCard}>
            <span className={styles.bonusTag}>Presente Gratuito #2</span>
            <div className={styles.bonusBody}>
              <h4 className={styles.bonusTitle}>🎁 Templates Prontos no Lovable</h4>
              <p className={styles.bonusValue}>
                Sistemas pré-configurados para mapas mentais, transcrição do YouTube e calculadora OTE.{' '}
                <s>de R$197,00</s> <strong>por R$0,00</strong>
              </p>
            </div>
          </div>
          <div className={styles.bonusCard}>
            <span className={styles.bonusTag}>Incluso sempre</span>
            <div className={styles.bonusBody}>
              <h4 className={styles.bonusTitle}>🔄 Atualizações Mensais</h4>
              <p className={styles.bonusValue}>
                Todo mês novos sistemas são adicionados à sua biblioteca, sem custo extra. Você nunca fica desatualizado.{' '}
                <strong>Sem mensalidade.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICE */}
      <div className={styles.priceBg}>
        <h2 className={styles.priceTitle}>
          Acesso imediato a tudo isso por <span>apenas R$97</span>
        </h2>
        <p className={styles.priceSub}>Pagamento único. Sem mensalidade. Sem renovação.</p>
        <div className={styles.priceBox}>
          <p className={styles.priceLabel}>Valor total</p>
          <div className={styles.priceAmount}>
            <small>R$</small>97<span className={styles.priceAmountCents}>,00</span>
          </div>
          <div className={styles.pricePerks}>
            <span>Acesso imediato</span>
            <span>21 sistemas</span>
            <span>R$494 em bônus</span>
            <span>Atualizações mensais</span>
          </div>
        </div>
        <div>
          <a href={CHECKOUT_URL} className={styles.priceCta}>
            QUERO AS 21 SOLUÇÕES POR R$97 →
          </a>
        </div>
        <div className={styles.payBadges}>
          {['PIX', 'Visa', 'Mastercard', 'Elo', 'Boleto', 'PayPal'].map((p) => (
            <span key={p} className={styles.payBadge}>{p}</span>
          ))}
        </div>
        <p className={styles.priceSecure}>
          🔒 Compra 100% segura · <span>Garantia incondicional de 7 dias</span> · Sem risco
        </p>
      </div>

      {/* 10. FAQ */}
      <div className={styles.faqBg}>
        <div className={styles.faqInner}>
          <p className={styles.sectionLabel} style={{ textAlign: 'center' }}>Dúvidas frequentes</p>
          <h2 className={styles.sectionH2} style={{ textAlign: 'center', marginBottom: '40px' }}>
            Perguntas e respostas
          </h2>
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href={CHECKOUT_URL} className={styles.heroCta}>
              QUERO AS 21 SOLUÇÕES POR R$97 →
            </a>
            <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#6a8a7a' }}>
              🔒 Garantia de 7 dias · Se não gostar, devolvemos 100%
            </p>
          </div>
        </div>
      </div>

      {/* SPACER for sticky bar */}
      <div className={styles.bottomPad} />

      {/* STICKY BOTTOM BAR */}
      <div className={styles.stickyBar}>
        <div className={styles.stickyBarText}>
          <strong>QUERO AS 21 SOLUÇÕES</strong>
          Acesso imediato · Garantia 7 dias
        </div>
        <a href={CHECKOUT_URL} className={styles.stickyBarBtn}>
          Garantir por R$97 →
        </a>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          Núcleo<span>1</span>
        </div>
        <p className={styles.footerCopy}>
          © 2025 Núcleo1 · Marcos Martins · Todos os direitos reservados<br />
          Produto distribuído pela plataforma Kiwify
        </p>
        <div className={styles.footerLinks}>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </footer>
    </div>
  )
}
