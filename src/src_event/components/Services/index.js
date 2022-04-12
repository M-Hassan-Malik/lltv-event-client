import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          <ServicesH2>Event Start Time</ServicesH2>
          <ServicesP>
            Be there on time. Your loss if you're late
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          <ServicesH2> Break </ServicesH2>
          <ServicesP>
            Everything in this world needs a break. Yes, parties as well.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" />
          <ServicesH2>Event End Timings</ServicesH2>
          <ServicesP>
            Time for Goodbye... or Is it? Its Never too late
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
