import React from 'react';
import './WorkProcess.css';

const steps = [
  {
    number: "01",
    title: "Project Discussion",
    description: "Extensible for web iterate process before meta services impact with olisticly enable client.",
    imgSrc: "https://img.icons8.com/ios-filled/100/ffffff/idea.png",
  },
  {
    number: "02",
    title: "Testing & Trying",
    description: "Extensible for web iterate process before meta services impact with olisticly enable client.",
    imgSrc: "https://img.icons8.com/ios-filled/100/ffffff/test.png",
  },
  {
    number: "03",
    title: "Execute & Install",
    description: "Extensible for web iterate process before meta services impact with olisticly enable client.",
    imgSrc: "https://img.icons8.com/ios-filled/100/ffffff/installing-updates.png",
  },
  {
    number: "04",
    title: "We Care About",
    description: "Extensible for web iterate process before meta services impact with olisticly enable client.",
    imgSrc: "https://img.icons8.com/ios-filled/100/ffffff/like.png",
  },
];

const WorkProcess = () => {
  return (
    <div style={styles.container} >
      <h1 style={styles.title}>4 Steps Work Process</h1>
      <p style={styles.subtitle}>dolor sit consectetur adipicising elit. Morbi abortis ligula euismod seded estyam augue nisl consectetur . Lorem ipsum amet consectetur .</p>
      <div style={styles.steps}>
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>{step.number}</div>
              <img src={step.imgSrc} alt={step.title} style={styles.image} />
              <div style={styles.stepTitle}>{step.title}</div>
              <div style={styles.stepDescription}>{step.description}</div>
            </div>
            {index < steps.length - 1 && <div style={styles.arrow}>→</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#192F59',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '50px',
    marginBottom: '50px',
    
  
  
    
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  subtitle: {
    marginBottom: '50px',
  },
  steps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  step: {
    maxWidth: '250px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  stepNumber: {
    backgroundColor: '#e0f7ea',
    borderRadius: '50%',
    color: 'green',
    display: 'inline-block',
    fontSize: '1.5em',
    height: '50px',
    lineHeight: '50px',
    marginBottom: '10px',
    width: '50px',
  },
  image: {
    width: '100px',
    height: '100px',
  },
  stepTitle: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  stepDescription: {
    fontSize: '0.9em',
    color: '#aaa',
  },
  arrow: {
    fontSize: '2em',
    color: 'green',
  },
  '@media (max-width: 768px)': {
    steps: {
      flexDirection: 'column',
    },
    arrow: {
      display: 'none',
    },
  },
};

export default WorkProcess;
