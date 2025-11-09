import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Smart AI Hub
        </Heading>
        <p className="hero__subtitle">AI-Powered Workflow Automation Platform</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started">
            Get Started →
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/architecture"
            style={{marginLeft: '1rem'}}>
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className={styles.features} style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>What is Smart AI Hub?</h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto 3rem'}}>
              Smart AI Hub is an enterprise-grade AI workflow automation platform that enables businesses to create, 
              deploy, and manage intelligent automation workflows without writing code. Built on cutting-edge LLM 
              technology and powered by a flexible agent-based architecture, Smart AI Hub transforms how organizations 
              automate their processes.
            </p>
          </div>
        </div>

        <div className="row" style={{marginTop: '3rem'}}>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3><Link to="/agents" style={{color: 'inherit', textDecoration: 'none'}}>🤖 AI-Powered Agents</Link></h3>
              <p>
                Create intelligent agents that understand natural language, make decisions, and execute complex tasks 
                autonomously. Our agent system supports multi-agent orchestration and seamless collaboration.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3><Link to="/integrations" style={{color: 'inherit', textDecoration: 'none'}}>🔌 Universal Integrations</Link></h3>
              <p>
                Connect to 100+ services and APIs out of the box. From databases to cloud services, CRM to analytics 
                tools - integrate everything your business needs in one unified platform.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3><Link to="/frontend" style={{color: 'inherit', textDecoration: 'none'}}>⚡ No-Code Builder</Link></h3>
              <p>
                Visual workflow builder with drag-and-drop interface. Create sophisticated automation workflows without 
                writing a single line of code. Perfect for both technical and non-technical users.
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: '2rem'}}>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3><Link to="/security" style={{color: 'inherit', textDecoration: 'none'}}>🔒 Enterprise Security</Link></h3>
              <p>
                Bank-grade security with end-to-end encryption, role-based access control, and comprehensive audit logs. 
                SOC 2 Type II certified and GDPR compliant.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3><Link to="/analytics" style={{color: 'inherit', textDecoration: 'none'}}>📊 Real-time Analytics</Link></h3>
              <p>
                Monitor workflow performance, track agent activities, and gain insights with built-in analytics dashboard. 
                Make data-driven decisions with comprehensive reporting.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3><Link to="/architecture" style={{color: 'inherit', textDecoration: 'none'}}>🚀 Scalable Architecture</Link></h3>
              <p>
                Built on modern microservices architecture with Kubernetes orchestration. Scale from prototype to 
                production seamlessly, handling millions of workflow executions.
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Key Features</h2>
          </div>
        </div>

        <div className="row">
          <div className="col col--6">
            <div className="padding-horiz--md">
              <h4>✨ Natural Language Workflow Creation</h4>
              <p>Describe your workflow in plain English and let AI generate it automatically</p>
              
              <h4>🎨 Visual Flow Builder</h4>
              <p>Intuitive drag-and-drop interface with professional auto-layout</p>
              
              <h4>📚 Template Library</h4>
              <p>100+ pre-built workflow templates for common business processes</p>
              
              <h4>🔄 Multi-Agent Orchestration</h4>
              <p>Coordinate multiple AI agents to handle complex workflows</p>
            </div>
          </div>
          <div className="col col--6">
            <div className="padding-horiz--md">
              <h4>🌐 API Gateway</h4>
              <p>RESTful API with comprehensive documentation and SDKs</p>
              
              <h4>💾 Data Management</h4>
              <p>Built-in database, file storage, and caching capabilities</p>
              
              <h4>🔐 Advanced Security</h4>
              <p>OAuth 2.0, JWT, API keys, and role-based access control</p>
              
              <h4>📈 Performance Monitoring</h4>
              <p>Real-time metrics, logging, and alerting system</p>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: '4rem', textAlign: 'center'}}>
          <div className="col col--12">
            <h2 style={{marginBottom: '1.5rem'}}>Ready to Get Started?</h2>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
              Join thousands of businesses automating their workflows with Smart AI Hub
            </p>
            <Link
              className="button button--primary button--lg"
              to="/getting-started">
              Start Building Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Smart AI Hub - AI-Powered Workflow Automation Platform">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
