import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event =>
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (total, value) => (total += value),
      0
    );
  }

  countPositiveFeedbackPercentage() {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.state.good
      ? this.countPositiveFeedbackPercentage()
      : 0;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
