import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ProjectDashboard.module.css'; // Import correto

// Importando imagens diretamente da pasta src/images
import temQueSerImg from '../images/tem-que-ser.png';
import aluSoftImg from '../images/alu-soft.jpeg';

const ProjectDashBoard = () => {
  const { t } = useTranslation();
  const projects = t("projectsDashboard.projects", { returnObjects: true });

  const projectsWithImages = projects.map(project => {
    let image;
    if (project.title === "Tem Que Ser") image = temQueSerImg;
    else if (project.title === "Alusoft") image = aluSoftImg;
    else image = project.image;

    return { ...project, image };
  });

  return (
    <div className={styles.dashboardContainer}>
      {/* Seção Hero */}
      <section className={styles.creativeWorkHero}>
        <div className={styles.heroContent}>
          <h1>{t("projectsDashboard.heroTitle")}</h1>
          <p className={styles.heroSubtitle}>{t("projectsDashboard.heroSubtitle")}</p>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>{t("projectsDashboard.featuredProjects")}</h2>
        <div className={styles.projectsGrid}>
          {projectsWithImages.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectMedia}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectDate}>{project.date}</span>
                  </div>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectFooter}>
                  <div className={styles.projectTags}>
                    {project.technologies?.map((tech, idx) => (
                      <span key={idx} className={styles.tag}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.projectActions}>
                    <a
                      href={project.liveDemoUrl}
                      className={`${styles.actionBtn} ${styles.demoBtn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projectsDashboard.liveDemo")}
                    </a>
                    <a
                      href={project.sourceCodeUrl}
                      className={`${styles.actionBtn} ${styles.codeBtn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projectsDashboard.sourceCode")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDashBoard;