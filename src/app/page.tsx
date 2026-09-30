import Image from "next/image";
import Nav from "@/components/Nav";

const WHATSAPP_URL = "https://wa.me/5515996015944";

export default function Home() {
  return (
    <>
      <Nav />

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-tag">Psicóloga Clínica</span>
            <h1 className="hero-title">
              Cuidado acolhedor
              <br />
              em cada <em>fase</em>
              <br />
              da vida
            </h1>
            <p className="hero-credential">
              Especialista em Psicologia Perinatal e Parentalidade · Abordagem Psicanalítica
            </p>
            <p className="hero-desc">
              Gisele compreende a força que é pedir ajuda, e o poder transformador de ser
              verdadeiramente escutada. Ela oferece um espaço seguro e acolhedor onde gestantes,
              puérperas, famílias e pessoas enfrentando os desafios da vida encontram apoio,
              clareza e cuidado.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Agendar Consulta Inicial
              </a>
              <a href="#about" className="btn-secondary">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              <Image
                src="/images/gisele.jpg"
                alt="Gisele Rodrigues Da Silva, Psicóloga"
                width={840}
                height={1024}
                priority
                sizes="(max-width: 900px) 300px, 420px"
              />
              <div className="hero-photo-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-inner">
          <span className="section-label">Sobre Gisele</span>
          <div className="about-grid">
            <div className="about-text reveal">
              <h2 className="section-title">
                Uma abordagem atenta e acolhedora para a terapia
              </h2>
              <p>
                Gisele Rodrigues Da Silva é psicóloga com formação na abordagem psicanalítica,
                trazendo profundidade, empatia e competência clínica para cada atendimento. Sua
                jornada na psicologia foi moldada por um desejo genuíno de apoiar pessoas nos
                momentos mais delicados da vida, da alegria e incerteza da gestação ao peso do
                luto e das perdas.
              </p>
              <p>
                Com formação especializada em psicologia perinatal e parentalidade, psicologia
                hospitalar e psicologia da saúde, Gisele atende gestantes, puérperas e famílias
                navegando a complexidade emocional da maternidade e paternidade. Também oferece
                atendimento clínico para adolescentes, adultos e idosos.
              </p>
              <p>
                Seja na preparação para receber um bebê, no enfrentamento de um diagnóstico
                difícil ou simplesmente na necessidade de ter alguém ao seu lado, Gisele está
                aqui para escutar, sem julgamentos, e caminhar junto com você.
              </p>
            </div>
            <div className="about-values reveal">
              <div className="value-card">
                <div className="value-icon">
                  <Image
                    src="/images/hand-planting.png"
                    alt=""
                    width={75}
                    height={75}
                    loading="lazy"
                  />
                </div>
                <div className="value-text">
                  <h4>Espaço Seguro e Acolhedor</h4>
                  <p>
                    Cada sessão é construída com base em respeito, confidencialidade e
                    acolhimento. Um espaço onde você pode ser plenamente quem é.
                  </p>
                </div>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Image
                    src="/images/iceberg.png"
                    alt=""
                    width={75}
                    height={75}
                    loading="lazy"
                  />
                </div>
                <div className="value-text">
                  <h4>Fundamentação Psicanalítica</h4>
                  <p>
                    Com base na teoria psicanalítica, Gisele explora os padrões profundos e as
                    emoções que moldam a sua experiência.
                  </p>
                </div>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Image
                    src="/images/mind-body.png"
                    alt=""
                    width={75}
                    height={75}
                    loading="lazy"
                  />
                </div>
                <div className="value-text">
                  <h4>Cuidado Integral</h4>
                  <p>
                    Com formação em psicologia hospitalar, perinatal e da saúde, Gisele atende
                    todo o espectro do bem-estar mente e corpo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specialties" id="specialties">
        <div className="section-inner">
          <span className="section-label">Áreas de Atuação</span>
          <h2 className="section-title">Atendimento especializado, feito para você</h2>
          <p className="section-subtitle">
            Gisele atua em diversas áreas clínicas, sempre com empatia e um olhar atento à
            história única de cada pessoa.
          </p>
          <div className="specialties-grid">
            <article className="specialty-card reveal">
              <span className="specialty-icon" aria-hidden="true">
                🤰
              </span>
              <h4>Perinatal e Parentalidade</h4>
              <p>
                Apoio emocional para gestantes, puérperas, processos de recuperação no pós-parto
                e para famílias em transição para a parentalidade.
              </p>
            </article>
            <article className="specialty-card reveal">
              <span className="specialty-icon" aria-hidden="true">
                🏥
              </span>
              <h4>Psicologia Hospitalar e da Saúde</h4>
              <p>
                Acompanhamento em processos de adoecimento, hospitalização, diagnósticos e seus
                impactos emocionais, incluindo atendimento a pacientes oncológicos e queimados.
              </p>
            </article>
            <article className="specialty-card reveal">
              <span className="specialty-icon" aria-hidden="true">
                🕯️
              </span>
              <h4>Luto e Perdas</h4>
              <p>
                Apoio compassivo para a elaboração do luto, processos de perda e o caminho
                emocional de atravessar despedidas em todas as suas formas.
              </p>
            </article>
            <article className="specialty-card reveal">
              <span className="specialty-icon" aria-hidden="true">
                🧠
              </span>
              <h4>Psicologia Clínica</h4>
              <p>
                Atendimento clínico para adolescentes, adultos e idosos: ansiedade, depressão,
                transições de vida e processos de autoconhecimento.
              </p>
            </article>
            <article className="specialty-card reveal">
              <span className="specialty-icon" aria-hidden="true">
                🌿
              </span>
              <h4>Psicossomática</h4>
              <p>
                Investigação da conexão entre mente e corpo, compreendendo como sofrimentos
                emocionais podem se manifestar em sintomas físicos.
              </p>
            </article>
            <article className="specialty-card reveal">
              <span className="specialty-icon" aria-hidden="true">
                🎲
              </span>
              <h4>Dependência de Jogos e Apostas</h4>
              <p>
                Avaliação e intervenção clínica para pessoas que enfrentam dependência de jogos
                e apostas.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="credentials" id="credentials">
        <div className="section-inner">
          <span className="section-label">Formação e Capacitação</span>
          <h2 className="section-title">Formação e educação continuada</h2>
          <p className="section-subtitle">
            Gisele tem compromisso com o aprendizado contínuo, aprofundando seus conhecimentos
            para oferecer o melhor cuidado possível.
          </p>
          <div className="credentials-layout">
            <div className="cred-group reveal">
              <h3>Graduação e Especializações</h3>
              <div className="cred-item">
                <span className="cred-year">2026</span>
                <div className="cred-detail">
                  <h4>Psicologia Perinatal e da Parentalidade</h4>
                  <p>Instituto Mater</p>
                  <span className="cred-badge">✦ Especialização Mais Recente</span>
                </div>
              </div>
              <div className="cred-item">
                <span className="cred-year">2022</span>
                <div className="cred-detail">
                  <h4>Psicologia Hospitalar</h4>
                  <p>UniSão Paulo</p>
                </div>
              </div>
              <div className="cred-item">
                <span className="cred-year">2020</span>
                <div className="cred-detail">
                  <h4>Graduação em Psicologia</h4>
                  <p>UNIP (Universidade Paulista)</p>
                </div>
              </div>
            </div>
            <div className="cred-group reveal">
              <h3>Formação Complementar</h3>
              <ul className="extra-cred-list">
                <li>
                  Neuropsicologia da Memória, Instituto Israelita de Ensino e Pesquisa Albert
                  Einstein, São Paulo
                </li>
                <li>
                  Comunicação de Más Notícias, Instituto Israelita de Ensino e Pesquisa Albert
                  Einstein, São Paulo
                </li>
                <li>Atuação Psicossocial em Desastres: Conceitos e Saúde Mental Pós-Desastre</li>
                <li>Avaliação e Intervenção Clínica na Dependência de Jogos e Apostas</li>
                <li>Psicossomática</li>
                <li>Farmacologia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <span className="section-label">Vamos Começar</span>
          <h2 className="section-title">Pronto(a) para dar o primeiro passo?</h2>
          <p className="cta-desc">Agende uma consulta.</p>

          <a
            href={WHATSAPP_URL}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.556-1.467A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.818-6.3-2.187l-.44-.362-2.876.926.953-2.835-.382-.46A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            Enviar mensagem no WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-name">Gisele Rodrigues Da Silva</div>
        <p>Psicóloga · Abordagem Psicanalítica</p>
        <p style={{ marginTop: 16, fontSize: "0.8rem", opacity: 0.5 }}>
          © {new Date().getFullYear()} Gisele Rodrigues Da Silva. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
